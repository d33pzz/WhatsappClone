import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        margin: 10,
    },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 50,
        alignItems: "center",
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
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,

    }
})

export default styles;
