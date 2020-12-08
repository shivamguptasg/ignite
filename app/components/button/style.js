import { StyleSheet } from 'react-native';
import { shadow } from '../../constants/style'
import * as color from '../../constants/color';

const styles = StyleSheet.create({
    conatainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        marginVertical: 7,
        flexDirection: 'row',
        backgroundColor: color.white,
        paddingHorizontal: 10,
        ...shadow
    },
    title: { fontSize: 17, color: color.black, paddingHorizontal: 10 },
    iconWrapper: { flexDirection: 'row', alignItems: 'center' }
});

export default styles;