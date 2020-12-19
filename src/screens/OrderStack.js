import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CurrentOrderScreen from "./CurrentOrder";

import {
  HeaderBack,
  HeaderBigLogo,
  HeaderCenter,
  HeaderRight,
} from "../components";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
      }}
    >
      <Stack.Screen
        name="CurrentOrderScreen"
        component={CurrentOrderScreen}
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
    </Stack.Navigator>
  );
};

export default HomeStack;
