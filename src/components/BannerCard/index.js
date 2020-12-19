import React from "react";
import { View, Text, Image } from "react-native";
import style from "./style";

const BannerCard = ({ text, date, image }) => {
  return (
    <View style={style.wrapper}>
      <View style={style.wrapperImage}>
        <Image style={style.image} source={{ uri: `https://beer.dev-swift.ru${image}` }} />
      </View>
      <View style={style.content}>
        <Text style={style.action}>Акции</Text>
        <Text style={style.text}>{text}</Text>
        <Text style={style.date}>{date}</Text>
      </View>
    </View>
  )
}

export default BannerCard
