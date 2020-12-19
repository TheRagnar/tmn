import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { API_URL } from "../../const";

import style from "./style";
import { BASE_STYLE } from "../../const";

const Banner = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [title, setTitle] = useState(false);
  const [text, setText] = useState(false);
  const [image, setImage] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData(route.params.id);
    });

    return unsubscribe;
  }, [navigation]);

  const fetchData = (id) => {
    axios
      .get(`${API_URL}/banners/${id}`)
      .then((response) => {
        setImage(response.data.data.item.image);
        setTitle(response.data.data.item.header);
        setText(response.data.data.item.content);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <View style={BASE_STYLE.main}>
      <ScrollView style={BASE_STYLE.scroll}>
        {isFetching ? (
          <View style={style.clear}>
            <ActivityIndicator size="large" color="rgba(30, 66, 160, 1)" />
          </View>
        ) : (
          <View>
            <View style={style.imageWrapper}>
              <Image
                source={{ uri: `https://beer.dev-swift.ru${image}` }}
                style={style.imageImage}
              />
            </View>
            <View style={style.content}>
              <Text style={style.title}>{title}</Text>
              <Text style={style.text}>{text}</Text>
              {/*<View style={style.button}>
                <TouchableOpacity style={BASE_STYLE.button}>
                  <Text style={BASE_STYLE.buttonText}>Купить</Text>
                </TouchableOpacity>
              </View>*/}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Banner;
