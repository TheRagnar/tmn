import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import style from "./style";

const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <View style={style.paddingLeft}>
      <TouchableOpacity style={style.backIcon} onPress={() => { navigation.goBack() }}>
        <Ionicons name="ios-arrow-back" size={30} color="#E31E24" />
        <Text style={style.backText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBack;
