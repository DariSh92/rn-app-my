import React from "react";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/font/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/font/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
    </>
  );
}
