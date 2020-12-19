import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./Profile";
import ProfileChangeScreen from "./Profile/ProfileChange";
import ShopsScreen from "./Shops";

import {
  HeaderBack,
  HeaderBigLogo,
  HeaderCenter,
  HeaderRight,
} from "../components";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
            height: 92,
          },
          headerTitle: null,
          headerLeft: () => <HeaderBigLogo />,
          headerRight: () => <HeaderRight />,
        }}
      />

      <Stack.Screen
        name="ProfileChangeScreen"
        component={ProfileChangeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
            height: 92,
          },
          headerTitle: () => <HeaderCenter />,
          headerLeft: () => <HeaderBack />,
          headerRight: () => <HeaderRight />,
        }}
      />

      <Stack.Screen
        name="ShopsScreen"
        component={ShopsScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
            height: 92,
          },
          headerTitle: () => <HeaderCenter />,
          headerLeft: () => <HeaderBack />,
          headerRight: () => <HeaderRight />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
