import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";


import AuthScreen from "./Auth";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import OrderStack from "./OrderStack";

import { BASE_STYLE } from "../const";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationWrapper = ({ authIn }) => {
  const tabsScreen = () => {
    return (
      <Tab.Navigator tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 6,
          borderTopColor: "#E31E24"
        }
      }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: (({ focused }) => (
              <Text style={[BASE_STYLE.tabText, focused && { color: "#E31E24" }]}>Каталог</Text>
            )),
            tabBarIcon: (({ focused }) => (
              <Ionicons name="ios-beer" size={30} color={focused ? "#E31E24" : "#a6a6ab"} />
            ))
          }}
        />
        <Tab.Screen
          name="OrderStack"
          component={OrderStack}
          options={{
            tabBarLabel: (({ focused }) => (
              <Text style={[BASE_STYLE.tabText, focused && { color: "#E31E24" }]}>Заказ</Text>
            )),
            tabBarIcon: (({ focused }) => (
              <Ionicons name="ios-map" size={30} color={focused ? "#E31E24" : "#a6a6ab"} />
            ))
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: (({ focused }) => (
              <Text style={[BASE_STYLE.tabText, focused && { color: "#E31E24" }]}>Профиль</Text>
            )),
            tabBarIcon: (({ focused }) => (
              <Ionicons name="ios-person" size={30} color={focused ? "#E31E24" : "#a6a6ab"} />
            ))
          }}
        />
      </Tab.Navigator>
    )
  }
  const render = () => {
    if (authIn) {
      return (
        tabsScreen()
      );
    } else {
      return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
        </Stack.Navigator>
      );
    }
  };
  return <NavigationContainer>{render()}</NavigationContainer>;
};
const mapStateToProps = (state) => {
  return {
    authIn: state.auth.authIn,
  };
};

export default connect(mapStateToProps, null)(NavigationWrapper);
