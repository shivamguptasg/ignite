import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from '../../helper';
import * as color from '../../constants/color';

export default function BookReader(props) {
    console.log('web==>', props)
    const [title, setTitle] = useState(props.route.params.title)

    useEffect(() => {
        setTitle(props.route.params.title)
    }, [props.route.params.title])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                <Icon
                    name='Back'
                    size={22}
                    color={color.primary}
                    onPress={() => props.navigation.goBack()}
                />
                <Text style={styles.heading}>{title}</Text>
            </View>
            <WebView
                title='shivam'
                source={{ uri: props.route.params.url }}
            />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.lightBlue,
        padding: 10
    },
    heading: {
        fontSize: 20,
        color: color.primary,
        marginBottom: 10,
        marginLeft: 10
    }
})