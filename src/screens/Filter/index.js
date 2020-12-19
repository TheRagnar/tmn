import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { MaterialIcons } from '@expo/vector-icons';

import { API_URL, BASE_STYLE } from "../../const";
import style from "./style";

const Filter = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData(route.params.id);
    });

    return unsubscribe;
  }, [navigation]);

  const fetchData = (id) => {
    setIsFetching(true)
    axios
      .get(`${API_URL}/categories/${id}?with.get-options-and-values`)
      .then((response) => {
        setData(response.data.data.item.options_and_values);
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
              <View style={style.groups}>
                {data.map((group, key) => (
                  <TouchableOpacity key={key} style={style.group} onPress={() => {
                    navigation.navigate("FilterInnerScreen", {
                      id: group.id,
                      name: group.name,
                      values: group.values
                    })
                  }}>
                    <Text style={style.groupText}>{group.name}</Text>
                    <Text style={style.groupSelect}></Text>
                    <View style={style.groupIcon}><MaterialIcons name="keyboard-arrow-right" size={24} color="#a6a6ab" /></View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Filter;
