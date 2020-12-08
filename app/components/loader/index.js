import React, { useEffect, useState } from 'react';
import { Modal, View, ActivityIndicator, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import * as color from '../../constants/color';
import styles from './style';

function Loader(props) {
    // console.log('alert props==>', props);
    const { showLoader } = props.showLoader;

    return (
        <Modal animationType="slide" transparent={true} visible={showLoader}>
            <View style={styles.centeredView}>
                <ActivityIndicator size='large' color={color.primary} />
            </View>
        </Modal>
    );
}

const mapStateToProps = state => {
    return { showLoader: state.loader };
};

export default connect(mapStateToProps)(Loader);