import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Numbers from "../Numbers";
import style from "./style";
import { LinearGradient } from "expo-linear-gradient";


const ProductCard = ({ id, feature, discount, count_stock, name, description, price, onAddTovarCard }) => {
  const [count, setCount] = useState(count_stock > 0 ? 1 : 0);
  return (
    <View style={style.wrapper}>
      <View style={style.imageWrapper}>
        <Image source={{ uri: `https://beer.dev-swift.ru${feature}` }} style={style.image} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,.7)"]}
          style={style.imageInfo}
        >
          {discount && (<View style={style.discount}><Text style={style.discountText}>- {discount}%</Text></View>)}
        </LinearGradient>
      </View>
      <View style={style.content}>
        {count_stock <= 0 && (<View style={style.stock}><Text style={style.stockText}></Text></View>)}
        {name && (<Text style={style.name}>{name}</Text>)}
        {description && (<Text style={style.description}>{description}</Text>)}
        {price && (<Text style={style.price}>{price} тг</Text>)}
        {count_stock > 0 && (<View style={style.numbers}><Numbers value={count} addTovar={() => {
          onAddTovarCard({
            id: id,
            feature: feature,
            discount: discount,
            count_stock: count_stock,
            name: name,
            description: description,
            price: price
          }, count)
        }} add={() => {
          if (count < count_stock) {
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

export default ProductCard
