import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { connect } from "react-redux";

import { API_URL, BASE_STYLE } from "../../const";
import style from "./style";
import ProductList from "./ProductList";


const Products = ({ navigation, route, optionsList }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData(route.params.id);
    });

    return unsubscribe;
  }, [navigation, optionsList]);

  const options = () => {
    let str = '';
    if (optionsList && optionsList.length > 0) {
      optionsList.forEach(element => {
        str += `&has.options-values.id=${element.value}`
      });
    }
    return str
  }

  const fetchData = (id) => {
    setIsFetching(true)
    axios
      .get(`${API_URL}/products?has.category.id=${id}${options()}`)
      .then((response) => {
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
          <View style={style.header}>
            <View style={style.headerButton}>
              <TouchableOpacity onPress={() => { navigation.navigate("FilterScreen", {
                id: route.params.id
              }) }} style={[BASE_STYLE.button, style.buttonBtn]}>
                <Text style={[BASE_STYLE.buttonText, style.buttonBtnText]}>Фильтр</Text>
              </TouchableOpacity>
            </View>
            {/*<View style={style.headerButton}>
              <TouchableOpacity style={[BASE_STYLE.button, style.buttonBtn]}>
                <Text style={[BASE_STYLE.buttonText, style.buttonBtnText]}>Сортировка</Text>
              </TouchableOpacity>
            </View>*/}
          </View>
          {!isFetching && data.length <= 0 ? (
            <View style={style.clear}>
              <Text style={style.clearText}>Нет товаров</Text>
            </View>
          ) : (
              <ProductList isFetching={isFetching} data={data} navigation={navigation} />
            )}

        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    optionsList: state.productsRequest.optionsList
  }
}


export default connect(mapStateToProps, null)(Products);
