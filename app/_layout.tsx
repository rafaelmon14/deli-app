import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import '../global.css';
import { useAuthStore } from "../utils/authStore";


 

export default function RootLayout(){
  const { isLoggedIn, shouldCreateAccount} = useAuthStore();

  return(
    <React.Fragment>
      <StatusBar style="auto"/>
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(cliente)" options={{headerShown: false}} />
          <Stack.Screen name="modal" options={{presentation: "modal"}}/>
        </Stack.Protected>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="login"/>
            <Stack.Protected guard={!shouldCreateAccount}>
              <Stack.Screen name="register"/>
            </Stack.Protected>
        </Stack.Protected>  
      </Stack>
    </React.Fragment>
  );

};