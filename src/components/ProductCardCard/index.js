import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import NumbersCard from "../NumbersCard";
import style from "./style";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { connect } from "react-redux";
import {API_URL} from "../../const";
import { editTovar, removeTovar } from "../../store/actions/card";

const ProductCardCard = ({ id, card, removeTovarAction, editTovarAction }) => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(card.find(item => { return item.id === id }).count);

  useEffect(() => {
    fetchData(id);
  }, []);

  useEffect(() => {
    editTovarAction({
      id: id
    }, count, card)
  }, [count]);

  const fetchData = (id) => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((response) => {
        setData(response.data.data.item);
      })
      .catch((error) => {
        console.warn(error);
      })
  }

  const onRemove = () => {
    removeTovarAction({
      id: id
    }, card)
  }

  return (
    <View style={style.wrapper}>
      <View style={style.imageWrapper}>
        {data.feature && (<Image source={{ uri: `https://beer.dev-swift.ru${data.feature}` }} style={style.image} />)}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,.7)"]}
          style={style.imageInfo}
        >
          {data.discount && (<View style={style.discount}><Text style={style.discountText}>- {data.discount}%</Text></View>)}
        </LinearGradient>
      </View>
      <View style={style.content}>
        {data.count_stock <= 0 && (<View style={style.stock}><Text style={style.stockText}></Text></View>)}
        {data.name && (<Text style={style.name}>{data.name}</Text>)}
        {data.description && (<Text style={style.description}>{data.description}</Text>)}
        {data.price && (<Text style={style.price}>{data.price} тг</Text>)}
        {data.count_stock > 0 && (<View style={style.numbers}><NumbersCard value={count} removeTovar={() => {
          onRemove()
        }} add={() => {
          if (count < data.count_stock) {
            setCount(count + 1);
          }
        }} remove={() => {
          if (count > 1) {
            setCount(count - 1)
          }
        }} /></View>)}
      </View>
    </View>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    editTovarAction: (prd, count, card) => {
      dispatch(editTovar(prd, count, card))
    },
    removeTovarAction: (prd, card) => {
      dispatch(removeTovar(prd, card));
    }
  }
}

const mapStateToProps = state => {
  return {
    card: state.card.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardCard);
