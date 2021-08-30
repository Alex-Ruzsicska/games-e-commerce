import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        marginTop: 20,
        backgroundColor: '#ededed'
    },
    headerContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#5126d1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    listContainer: {
        flex: 7,
        width: '100%'
    },
    footerContainer: {
        flex: 4,
        width: '100%',
        borderColor: '#5126d1',
        backgroundColor: '#5126d1',
        borderTopWidth: 1,
        padding: 10
    }
});

export default styles;