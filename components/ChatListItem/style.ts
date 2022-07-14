import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between", 
        padding: 10,
    },
    middleContainer: {
        justifyContent: "space-around"
    },
    leftContainer: {
        flexDirection: "row"
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: "grey",
    },
    time: {
        fontSize: 14,
        color: "grey"
    }

});

export default styles;