import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onMicrophonePress = () => {
    console.warn("mircrophpone")
  }
  const onSendPress = () => {
    console.warn("sending : "+message)
    //Send message to the Backend
    setMessage("");
  }

  const onPress = () => {
    if(!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="gray" />
        <TextInput
          placeholder="Type a Message"
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="gray" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={24} color="gray" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          ) : (
            <MaterialIcons name="send" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default InputBox;
