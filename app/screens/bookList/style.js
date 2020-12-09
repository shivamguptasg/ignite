import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../constants/color';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.lightBlue,
        padding: 20,
        justifyContent: 'space-around'
    },
    headingContainer: {
        backgroundColor: color.white,
        padding: 10
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: color.primary,
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.lightBlue,
        width: "100%",
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1,
    },
    textField: {
        width: '87%',
        marginLeft: 10,
        fontSize: 16
    },
    booksContainer: {
        flex: 1,
        margin: 5,
        marginVertical: 10
    },
    ImageContainer: {
        height: 162,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
    }
}
)
export default styles