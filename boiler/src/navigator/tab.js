import React from "react";
import { Platform, StatusBar, View, Image } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  BottomTabBar
} from "react-navigation";

import Home from "../modules/Home";
import List from "../modules/List";

export default createBottomTabNavigator(
  {
    Home: { screen: Home },
    Friends: { screen: List },
  })