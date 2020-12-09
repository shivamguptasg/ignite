import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    Image,
    SafeAreaView,
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Icon from '../../helper';
import { connect } from 'react-redux'
import { getBookList } from '../../redux/actions'
import styles from './style'
import * as color from '../../constants/color';

function BookList(props) {
    // console.log('props==>', props)
    const [bookList, setBookList] = useState([])
    const [searchBookList, setSearchBookList] = useState([])
    const [title, setTitle] = useState(props.route.params.title)
    const [page, setPage] = useState(1)
    const [searchText, setSearchText] = useState('')
    const [inpuetBorderColor, setBorderColor] = useState(color.lightBlue)

    useEffect(() => {
        getBooks()
        setTitle(props.route.params.title)
    }, [props.route.params.title])

    useEffect(() => {
        setBookList(bookList.concat(props.BookList.results))
    }, [props.BookList.results])

    function getBooks() {
        if (bookList.length < props.BookList.count) {
            let apiData = {
                page,
                title
            }
            props.getBookList(apiData)
            setPage(page + 1)
        }
        else {
            alert('No more Books to Show.')
        }

    }

    function getSearchBookList(text) {
        setSearchText(text)
        if (text !== '')
            setSearchBookList(bookList.filter(item => (item.title.includes(text) || (item.authors.length && item.authors[0].name.includes(text)))))
        else
            setSearchBookList([])
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headingContainer}>
                <View style={styles.titleContainer}>
                    <Icon
                        name='Back'
                        size={22}
                        color={color.primary}
                        onPress={() => props.navigation.goBack()}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.searchContainer}>
                    <View style={[styles.searchBox, { borderColor: inpuetBorderColor }]}>
                        <Icon
                            name='Search'
                            size={15}
                            color={color.primary}
                        />
                        <TextInput
                            value={searchText}
                            placeholder='Search'
                            onFocus={() => setBorderColor(color.primary)}
                            onChangeText={text => getSearchBookList(text)}
                            style={styles.textField}
                        />
                        {searchText !== '' && <Icon
                            name='Cancel'
                            size={15}
                            color={color.grey}
                            onPress={() => {
                                setSearchText('')
                                setSearchBookList([])
                            }}
                            style={{ padding: 5 }}
                        />}
                    </View>
                </View>
            </View>

            <View style={[styles.container, { padding: 10 }]}>
                <FlatList
                    horizontal={false}
                    data={searchBookList.length > 0 ? searchBookList : bookList}
                    numColumns={3}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('BookReader', { url: item.formats['text/plain; charset=utf-8'], title: item.title })}
                            style={styles.booksContainer}
                        >
                            <View style={styles.ImageContainer}>
                                <Image
                                    source={item.formats['image/jpeg'] ? { uri: item.formats['image/jpeg'] } : require('../../assets/book.jpeg')}
                                    style={styles.image}
                                    resizeMode='stretch'
                                />
                            </View>
                            <Text style={{ fontSize: 12 }} numberOfLines={2}>{item.title}</Text>
                            <Text style={{ fontSize: 12, color: color.grey, marginTop: 3 }}>{item.authors.length && item.authors[0].name}</Text>
                        </TouchableOpacity>

                    )}
                    onEndReached={() => getBooks()}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return {
        BookList: state.getBookList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBookList: (params) => {
            dispatch(getBookList(params));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BookList);
