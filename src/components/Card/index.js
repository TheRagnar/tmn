import React from "react";
import { View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import style from "./style";

const Card = ({ image, title }) => {
  return (
    <View style={style.wrapper}>
      <Image
        source={{ uri: `https://beer.dev-swift.ru${image}` }}
        style={style.image}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,.7)"]}
        style={style.content}
      >
        <Text style={style.title}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

export default Card;
