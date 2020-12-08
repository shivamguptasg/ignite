import React, { useState } from 'react';
import { ScrollView, View, FlatList, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './style';
import * as color from '../../constants/color'

function Button(props) {
    return (
        <TouchableOpacity
            style={styles.conatainer}
            onPress={props.onPress}>
            <View style={styles.iconWrapper}>
                <Icon name='user' size={17} color={color.primary} />
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>
            <Icon name='arrow-right' size={17} color={color.primary} />
        </TouchableOpacity>
    );
}

export default Button;