import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { useEffect } from "react";
Amplify.configure(awsconfig);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //Run this snippet only when the app is mounted
  useEffect( () => {
    const fetchuser = async () => {
      //get authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      
      if(userInfo) {

      }
      
      //get the user from Backend with userid from Auth 


      //if there is no user in db then create one
    }
    fetchuser();
  },[])

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