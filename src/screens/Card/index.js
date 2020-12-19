import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';


import { API_URL, BASE_STYLE } from "../../const";
import style from "./style";
import { ProductCardCard } from "../../components";


const Card = ({card }) => {
  const navigation = useNavigation();

  const getTotalPrice = () => {
    let total = 0;
    console.log(card)
    card.forEach(el => {
      total+=el.prd.price*el.count;
    });
    return total
  }
  
  return (
    <View style={BASE_STYLE.main}>
      <ScrollView style={BASE_STYLE.scroll}>
        <View style={style.content}>
          {card.length <= 0 ? (
            <View style={style.clear}>
              <Text style={style.clearText}>Нет товаров в корзине</Text>
            </View>
          ) : (
              <View style={style.inner}>
                {card.map((item, key) => (
                  <View style={style.item} key={key}>
                    <ProductCardCard
                      id={item.id}
                    />
                  </View>
                ))}
                <View style={style.total}>
                  <Text style={style.totalText}>Сумма заказа:</Text>
                  <Text style={style.totalPrice}>{getTotalPrice()} тг</Text>
                </View>
                <View style={style.button}>
                  <TouchableOpacity onPress={() => { navigation.navigate("CardOrderScreen")}} style={[BASE_STYLE.button, style.buttonBtn]}>
                    <Text style={[BASE_STYLE.buttonText, style.buttonBtnText]}>Заказать</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    card: state.card.data
  }
}


export default connect(mapStateToProps, null)(Card);
