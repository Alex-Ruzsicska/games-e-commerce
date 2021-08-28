import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        marginTop: 20
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
        backgroundColor: 'green'
    },
    listContainer: {
        flex: 10,
        width: '100%',
        padding: 10
    }
});

export default styles;