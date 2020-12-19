import React, { useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import style from "./style";
import { getBanners } from "../../store/actions/banners";


const Banners = ({ navigation, banners, isFetching, getBannersAction }) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getBannersAction();
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BannerScreen", {
            id: item.id,
          });
        }}
        style={style.slide}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,.7)"]}
          style={style.slideContent}
        >
          <Text style={style.slideText}>{item.header}</Text>
        </LinearGradient>
        <Image
          style={style.slideImage}
          source={{ uri: `https://beer.dev-swift.ru${item.image}` }}
        />
      </TouchableOpacity>
    );
  };

  return isFetching ? (
    <View style={style.banners}>
      <View style={style.bannersClear}>
        <ActivityIndicator size="large" color="rgba(30, 66, 160, 1)" />
      </View>
    </View>
  ) : (
    <Carousel
      data={banners}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={280}
      inactiveSlideScale={1}
      activeSlideAlignment={`start`}
      containerCustomStyle={{
        paddingLeft: 20,
      }}
      slideStyle={{
        marginRight: 10,
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBannersAction: () => {
      dispatch(getBanners());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    banners: state.banners.data,
    isFetching: state.banners.isFetching,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banners);
