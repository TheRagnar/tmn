import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { Shop } from "../../components";

import { API_URL, BASE_STYLE } from "../../const";
import style from "./style";

const Shops = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  const fetchData = () => {
    setIsFetching(true)
    axios
      .get(`${API_URL}/shops?paginate.per-page=500&paginate.page=0`)
      .then((response) => {
        console.log(response.data.data.items)
        setData(response.data.data.items);
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
        <View style={style.content}>
          {isFetching ? (
            <View style={style.load}>
              <ActivityIndicator size="large" color="rgba(30, 66, 160, 0.9)" />
            </View>
          ) : (
              <View style={style.shops}>
                {data.map((item, key) => (
                  <View style={style.shop} key={key}>
                    <Shop addres={item.address} phone={item.phone} weekdays={item.time_work.weekdays} weekend={item.time_work.weekend} />
                  </View>
                ))}
              </View>
            )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Shops;
