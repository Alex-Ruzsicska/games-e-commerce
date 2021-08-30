import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        marginTop: 20,
        backgroundColor: '#ededed'
    },
    searchBarContainer:{
        flex: 1,
        padding: 10
    },
    searchBar:{
        flex: 1,
        width: '100%',
    },
    sortBarContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#5126d1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    listContainer: {
        flex: 10,
        width: '100%',
    }
});

export default styles;