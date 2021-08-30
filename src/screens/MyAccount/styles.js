import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        marginTop: 20
    },
    avatarContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    informationContainer: {
        flex: 8,
        width: '100%',
        padding: 10
    },
    informationCell: {
        padding: 10,
        flex: 1,
        width: '100%'
    },  
    name:{
        color: '#5126d1'
    },
    title:{
        color: 'gray'
    }

});

export default styles;