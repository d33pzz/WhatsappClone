import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { withAuthenticator } from "aws-amplify-react-native";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";

import { useEffect } from "react";
Amplify.configure(awsconfig);

const randomImages = [
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg",
];

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  };

  //Run this snippet only when the app is mounted
  useEffect(() => {
    const fetchuser = async () => {
      //get authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (userInfo) {
        //get the user from Backend with userid from Auth
        
       
        const userData = await API.graphql(
          graphqlOperation(getUser, {id: userInfo.attributes.sub})
          // {
          //   query: getUser,
          //   variables: { id: userInfo.attributes.sub },
          //   authMode: "API_KEY",
          //   authToken: "x4rdikhtibblbkgrqyykh3xtzq",
          // }
        );
        console.log('====================================');
        console.log("Hi D33PZZ", userData);
        console.log('====================================');
          
        if (userData.data.getUser) {
          console.log("User is already registered in database");
          return;
        }
        
        //if there is no user in db then create one

          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: getRandomImage(),
            status: "Hey there! I am using TTSChat",
          };

        await API.graphql(
          {
            query: createUser,
            variables: {input: newUser},
            authMode: "API_KEY",
            authToken: "x4rdikhtibblbkgrqyykh3xtzq",
          }
          
        );
      }

          };
    fetchuser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
