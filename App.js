import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/font/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/font/Roboto-Bold.ttf"),
  });

  const routing = useRoute({});
  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
