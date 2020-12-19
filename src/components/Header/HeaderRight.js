import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { connect } from "react-redux";
import style from "./style";
import { useNavigation } from '@react-navigation/native';


import { Ionicons } from "@expo/vector-icons";


const HeaderRight = ({ count }) => {
  const navigation = useNavigation();

  return (
    <View style={style.paddingRight}>
      <TouchableOpacity style={style.iconBox} onPress={() => { }}>
        <Ionicons name="ios-search" size={30} color="#E31E24" />
      </TouchableOpacity>
      <TouchableOpacity style={style.iconBox} onPress={() => {
        navigation.navigate("CardScreen");
      }}>
        <Ionicons name="ios-cart" size={30} color="#E31E24" />
        <View style={style.iconCount}>
          <Text style={style.text}>{count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    count: state.card.data.length
  }
}

export default connect(mapStateToProps, null)(HeaderRight);
