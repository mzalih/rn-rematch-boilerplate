import React from "react";
import { Platform, StatusBar, View, Image } from "react-native";
import {
  createAppContainer,
} from "react-navigation";
import{
  createStackNavigator
} from "react-navigation-stack"


import SplashScreen from "../modules/SplashScreen";
import Login from "../modules/Login";
import Home from "./tab"


const AppNavigator = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
    Login: { screen: Login },
    Home: { screen: Home },
  },
  {
   // headerMode: "none",
     navigationOptions: {
      headerVisible: false
    }
  }
);
export default createAppContainer(AppNavigator);