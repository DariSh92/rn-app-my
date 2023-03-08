import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreatePostsSreen from "./screens/mainScreen/CreatePostsScreen";
// import Home from "./screens/mainScreen/Home";
// import CommentsScreen from "./screens/mainScreen/CommentsScreen";
// import MapScreen from "./screens/mainScreen/MapScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name="post-add" size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Entypo name="squared-plus" size={size} color={color} />
          ),
        }}
        name="Create"
        component={CreatePostsSreen}
      />

      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
