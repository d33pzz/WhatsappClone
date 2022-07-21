import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: "flex-end",
    },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 25,
        alignItems: "flex-end",
        marginRight: 10,
        flex: 1,
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon:{
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,

    }
})

export default styles;
