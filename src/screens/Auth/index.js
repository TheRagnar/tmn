import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import RegisterScreen from "./Register";
import LoginScreen from "./Login";

const Stack = createStackNavigator();

const Auth = ({afterRegister}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {!afterRegister && (
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    afterRegister: state.registration.isSucces,
  };
};

export default connect(mapStateToProps, null)(Auth);
