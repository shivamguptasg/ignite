import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    SafeAreaView,
    View,
    Text,
    TextInput,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
import { getBookList } from '../../redux/actions'
import styles from './style'
import * as color from '../../constants/color';

function BookList(props) {
    console.log('props==>', props)
    const [inpuetBorderColor, setBorderColor] = useState(color.lightBlue)

    useEffect(() => {
        props.getBookList()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: color.white, padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='arrow-left' size={22} color={color.primary} />
                    <Text style={{ color: color.primary, fontSize: 22, fontWeight: 'bold', marginHorizontal: 10 }}>Fiction</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: color.lightBlue, width: "100%", height: 40, paddingHorizontal: 10, borderRadius: 4, borderWidth: 1, borderColor: inpuetBorderColor }}>
                        <Icon name='search' size={15} color={color.primary} />
                        <TextInput style={{ width: '90%', marginLeft: 10 }} onFocus={() => setBorderColor(color.primary)} />
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <FlatList
                    horizontal={false}
                    data={props.BookList.bookList}
                    numColumns={3}
                    renderItem={({ item, index }) => (
                        <Text>shivam</Text>

                    )}
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
