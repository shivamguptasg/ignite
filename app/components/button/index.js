import React, { useState } from 'react';
import { ScrollView, View, FlatList, TouchableOpacity, Text } from 'react-native';
import Icon from '../../helper';
import styles from './style';
import * as color from '../../constants/color'

function Button(props) {
    return (
        <TouchableOpacity
            style={styles.conatainer}
            onPress={props.onPress}>
            <View style={styles.iconWrapper}>
                <Icon name={props.icon} size={23} color={color.primary} />
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button;