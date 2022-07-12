import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ChatListItem from "../components/ChatListItem";
import chatRooms from "../data/ChatRooms";

function ChatScreen({ navigation }: RootTabScreenProps<"Chats">) {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chatRoom={chatRooms[0]}/> */}
      <FlatList 
        style={{width: "100%"}}
        data={chatRooms} 
        renderItem={({item}) => <ChatListItem chatRoom={item} />} 
        keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
