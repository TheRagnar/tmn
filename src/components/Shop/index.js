import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "./style";

import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';  
import { MaterialIcons } from '@expo/vector-icons'; 

const ProductCard = ({ addres, phone, weekdays, weekend }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={style.wrapper}>
      <TouchableOpacity style={style.header} onPress={() => {
        setIsOpen(!isOpen)
      }}>
        <View style={style.imageWrapper}>
          <Image source={require('../../assets/images/logo2.png')} style={style.image} />
        </View>
        <Text style={style.name}>{addres}</Text>
        <View style={style.drops}>
          {isOpen ? (
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#a6a6ab" />
          ) : (
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#a6a6ab" />
          )}
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={style.contet}>
          {weekdays && (
            <View style={style.row}>
              <View style={style.box}>
                <View style={style.icon}><EvilIcons name="clock" size={20} color="rgb(227, 30, 36)" /></View>
                <Text style={style.timeText}>Пн - Пт:</Text>
              </View>
              <View style={style.box}>
                <Text style={style.timeTimeText}>{weekdays.to} - {weekdays.from}</Text>
              </View>
            </View>
          )}
          {weekend && (
            <View style={style.row}>
              <View style={style.box}>
                <View style={style.icon}><EvilIcons name="clock" size={20} color="rgb(227, 30, 36)" /></View>
                <Text style={style.timeText}>Сб - Вс:</Text>
              </View>
              <View style={style.box}>
                <Text style={style.timeTimeText}>{weekend.to} - {weekend.from}</Text>
              </View>
            </View>
          )}

          {phone && (
            <View style={style.row}>
              <View style={style.box}>
                <View style={style.icon}><Ionicons name="ios-phone-portrait" size={20} color="rgb(227, 30, 36)" /></View>
                <Text style={style.timeText}>Телефон</Text>
              </View>
              <View style={style.box}>
                <Text style={style.timeTimeText}>{phone}</Text>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  )
}

export default ProductCard
