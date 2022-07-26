import { FlatList, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import {API} from "aws-amplify"
import NewMessageButton from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";
import { useEffect, useState } from "react";

import {listUsers} from "../src/graphql/queries";

function Contacts() {

  const [users, setUsers] =useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const userData = await API.graphql({
          query: listUsers,
          authMode: "API_KEY",
          authToken: "x4rdikhtibblbkgrqyykh3xtzq",
        })

        setUsers(userData.data.listUsers.items)
      }catch(error){
        console.log("Error from ContactScreen ",error );
        
      }
    }
    fetchUsers();
  }, [])
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
