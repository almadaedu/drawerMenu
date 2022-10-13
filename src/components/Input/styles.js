//#region Imports
import { StyleSheet } from "react-native";
//#endregion

const useStyles = () => {
    return StyleSheet.create({
    input: {
        paddingLeft: 10,
        width: 244,
        height: 50,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        justifyContent: 'space-between'
    },

    })
}

export default useStyles