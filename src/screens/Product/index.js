import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import axios from "axios"
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");


import { BASE_STYLE, API_URL } from "../../const";
import style from "./style";
import { Numbers } from "../../components";

import {addTovar} from "../../store/actions/card";

const Product = ({ navigation, token, route, addTovarAction, cards }) => {
  const [data, setData] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(true);

  let cars = useRef(null);


  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData(route.params.id);
    });
    return unsubscribe;
  }, [navigation]);

  const fetchData = (id) => {
    axios
      .get(`${API_URL}/products/${id}?with.get-options-and-values`)
      .then((response) => {
        setData(response.data.data.item);
        setCount(response.data.data.item.count_stock > 0 ? 1 : 0)
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const onAddTovarCard = (prd, co) => {
    addTovarAction(prd,co, cards)
  }


  const renderItem = ({ item, index }) => {
    return (
      <View style={style.slide} >
        {Array.isArray(item.content) ? (
          <View style={style.slideContent}>
            {item.content.map((i, k) => (
              <View style={style.slideRow} key={k}>
                <Text style={style.slideRowLeft}>{i.option.name}</Text>
                <Text style={style.slideRowRight}>{i.value.name}</Text>
              </View>
            ))}
          </View>
        ) : (
            <View style={style.slideContent}><Text style={style.slideText}>{item.content}</Text></View>
          )}
      </View>
    );
  };

  return (
    <View style={BASE_STYLE.main}>
      <ScrollView style={BASE_STYLE.scroll}>
        <View style={style.content}>
          {isFetching ? (
            <View style={style.clear}>
              <ActivityIndicator size="large" color="rgba(30, 66, 160, 1)" />
            </View>
          ) : (
              <View>
                <View style={style.wrapper}>
                  <View style={style.avatar}>
                    <Image style={style.avatarImage} source={data.feature ? { uri: `https://beer.dev-swift.ru${data.feature}` } : require("../../assets/images/user.png")} />
                  </View>
                  {data.name && (<Text style={style.name}>{data.name}</Text>)}
                  {/*<Text style={style.descript}></Text>*/}
                  {data.price && (<Text style={style.price}>{data.price} тг</Text>)}
                  {data.count_stock > 0 && (
                    <View style={style.numbers}>
                      <Numbers value={count} addTovar={() => {
                        onAddTovarCard(data, count)
                      }} add={() => {
                        if (count < data.count_stock) {
                          setCount(count + 1);
                        }
                      }} remove={() => {
                        if (count > 1) {
                          setCount(count - 1)
                        }
                      }} />
                    </View>
                  )}
                  {data.count_stock <= 0 && (
                    <View style={style.not}>
                      <Text style={style.notText}>Нет в наличии</Text>
                    </View>
                  )}
                </View>
                <View style={style.slider}>
                  <View style={style.sliderControl}>
                    <TouchableOpacity style={style.sliderControlItem} onPress={() => {
                      cars.snapToItem(0)
                      setSec(true)
                    }}>
                      <Text style={[style.sliderControlText, sec && style.sliderControlTextActive ]}>Описание</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.sliderControlItem} onPress={() => {
                      cars.snapToItem(1)
                      setSec(false)
                    }}>
                      <Text style={[style.sliderControlText, sec == false && style.sliderControlTextActive]}>Характеристики</Text>
                    </TouchableOpacity>
                  </View>
                  <Carousel
                    ref={(c) => { cars = c }}
                    data={[{
                      content: data.description
                    }, {
                      content: data.options_and_values
                    }]}
                    renderItem={renderItem}
                    sliderWidth={width - 40}
                    itemWidth={width - 40}
                    inactiveSlideScale={1}
                    activeSlideAlignment={`start`}
                  />
                </View>
              </View>
            )}
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTovarAction: (prd, count, products) => {
      dispatch(addTovar(prd, count, products))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    cards: state.card.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
