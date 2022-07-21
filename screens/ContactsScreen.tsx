import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import users from "../data/Users";
import NewMessageButton from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";

function Contacts() {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chatRoom={chatRooms[0]}/> */}
      <FlatList 
        style={{width: "100%"}}
        data={users} 
        renderItem={({item}) => <ContactListItem user={item} />} 
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

export default Contacts;
