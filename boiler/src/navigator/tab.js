import React from "react";
import { Platform, StatusBar, View, Image } from "react-native";
import{
  createBottomTabNavigator
} from "react-navigation-tabs"


import Home from "../modules/Home";
import List from "../modules/List";

export default createBottomTabNavigator(
  {
    Home: { screen: Home },
    Friends: { screen: List },
  })