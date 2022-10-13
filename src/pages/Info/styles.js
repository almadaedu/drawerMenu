import { StyleSheet } from "react-native";
const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            color: '#fff',
            marginBottom: 20,
            fontSize: 20,
            fontWeight: '700'

        },
    
    })
}

export default useStyles