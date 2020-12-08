import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../constants/color';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.lightBlue,
        padding: 20,
        justifyContent: 'space-around'
    },
    heading: { fontSize: 50, fontWeight: 'bold', color: color.primary },
    description: { fontSize: 18, color: color.black, letterSpacing: 1, marginVertical: 12 }
}
)
export default styles