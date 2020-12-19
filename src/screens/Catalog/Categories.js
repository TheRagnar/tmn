import React, { useEffect } from "react";
import { ActivityIndicator, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Category } from "../../components";

import style from "./style";
import { getCategories } from "../../store/actions/categories";

const Categories = ({ navigation, categories, isFetching, getCategoriesAction }) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getCategoriesAction();
  };

  return isFetching ? (
    <View style={style.categories}>
      <View style={style.categoriesClear}>
        <ActivityIndicator size="large" color="rgba(30, 66, 160, 1)" />
      </View>
    </View>
  ) : (
    <View style={style.categories}>
      {categories &&
        categories.map((item, key) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductsScreen", {
                id: item.id,
              });
            }}
            key={key}
            style={style.category}
          >
            <Category title={item.name} image={item.feature} />
          </TouchableOpacity>
        ))}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesAction: () => {
      dispatch(getCategories());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    isFetching: state.categories.isFetching,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
