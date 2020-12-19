import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CatalogScreen from "./Catalog";
import BannerScreen from "./Banner";
import ProductsScreen from "./Products";
import FilterScreen from "./Filter";
import FilterInnerScreen from "./Filter/FilterInner";
import BannersScreen from "./Banners";
import ProductScreen from "./Product";
import CardScreen from "./Card";
import CardOrderScreen from "./CardOrder";

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
        name="CatalogScreen"
        component={CatalogScreen}
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
        name="BannerScreen"
        component={BannerScreen}
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
        name="BannersScreen"
        component={BannersScreen}
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
        name="ProductsScreen"
        component={ProductsScreen}
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
        name="ProductScreen"
        component={ProductScreen}
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
        name="CardScreen"
        component={CardScreen}
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
        name="CardOrderScreen"
        component={CardOrderScreen}
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
        name="FilterScreen"
        component={FilterScreen}
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
        name="FilterInnerScreen"
        component={FilterInnerScreen}
        options={({ route }) => {
          return {
            headerStyle: {
              backgroundColor: "#fff",
              height: 92,
            },
            headerTitle: () => <HeaderCenter title={route.params.name} />,
            headerLeft: () => <HeaderBack />,
            headerRight: () => null,
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
