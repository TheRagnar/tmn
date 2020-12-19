import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";

import Banners from "./Banners";
import style from "./style";
import { BASE_STYLE } from "../../const";
import Categories from "./Categories";

const Catalog = ({ navigation }) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {};

  return (
    <View style={BASE_STYLE.main}>
      <ScrollView style={BASE_STYLE.scroll}>
        <View style={style.header}>
          <Banners navigation={navigation} />
        </View>
        <View style={style.cats}>
          <Categories navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
