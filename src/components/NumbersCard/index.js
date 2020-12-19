import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 

const NumbersCard = ({ value, add, remove, removeTovar }) => {
  return (
    <View style={style.wrapper}>
      <View style={style.buttons}>
        <TouchableOpacity
          style={[style.button, style.buttonFirst]}
          onPress={() => {
            remove();
          }}
        >
          <View style={style.minus}></View>
        </TouchableOpacity>
        <View style={[style.button, style.buttonCenter]}>
          <Text style={style.value}>{value}</Text>
        </View>
        <TouchableOpacity
          style={[style.button, style.buttonLast]}
          onPress={() => {
            add();
          }}
        >
          <View style={style.minus}></View>
          <View style={style.plus}></View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={style.control}
        onPress={() => {
          removeTovar();
        }}
      >
        <MaterialIcons name="remove-shopping-cart" size={30} color="#E31E24" />
      </TouchableOpacity>
    </View>
  );
};

export default NumbersCard;
