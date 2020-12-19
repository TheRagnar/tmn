import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons'; 
import { connect } from "react-redux";
import { setOptionsList } from "../../store/actions/productsRequest";

import { API_URL, BASE_STYLE } from "../../const";
import style from "./style";

const FilterInner = ({ navigation, route, optionsList, setOptionsListAction }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData(route.params.id);
    });

    return unsubscribe;
  }, [navigation]);

  const fetchData = (id) => {
    console.log(route.params.values)
    setData(route.params.values)
  };

  return (
    <View style={BASE_STYLE.main}>
      <ScrollView style={BASE_STYLE.scroll}>
        <View style={style.contentInner}>
          <View style={style.items}>
            {data.map((item, key) => (
              <TouchableOpacity key={key} style={[style.item, optionsList.find((cat)=>{return cat.value === item.id}) && style.itemActive]} onPress={()=>{
                setOptionsListAction(route.params.id, item.id, optionsList);
                navigation.goBack();
              }}>
                <Text style={style.itemText}>{item.name}</Text>
                {optionsList.find((cat)=>{return cat.value === item.id}) && (
                  <View style={style.itemIcon}><Ionicons name="md-checkmark" size={24} color="#E31E24" /></View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setOptionsListAction: (categoryId, optionId, optionsList) => {
      dispatch(setOptionsList(categoryId, optionId, optionsList))
    }
  }
}
const mapStateToProps = state => {
  return {
    optionsList: state.productsRequest.optionsList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterInner);
