import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

const InputBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="gray" />
        <TextInput 
            style={styles.textInput} 
            multiline 
            />
        <Entypo name="attachment" size={24} color="gray" style={styles.icon} />
        <Fontisto name="camera" size={24} color="gray" style={styles.icon} />
      </View>
      <View style={styles.buttonContainer}>
        <MaterialCommunityIcons name="microphone" size={28} color="white" />
      </View>
    </View>
  );
};
export default InputBox;
