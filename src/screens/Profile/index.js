import React, { useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 


import { BASE_STYLE } from "../../const";

import { getUserInfo } from "../../store/actions/userInfo";
import style from "./style";

const Profile = ({ navigation, token, isFetching, data, getUserInfoAction }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchData = () => {
    getUserInfoAction(token);
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
              <View style={style.wrapper}>
                <View style={style.avatar}>
                  <Image style={style.avatarImage} source={data.avatar ? { uri: `https://beer.dev-swift.ru${data.avatar}` } : require("../../assets/images/user.png")} />
                </View>
                <Text style={style.name}>{data.name ? data.name : "Имя не установлено"}</Text>
                <View style={style.lists}>
                  <TouchableOpacity style={style.listItem} onPress={() => {
                    navigation.navigate("ProfileChangeScreen")
                  }}>
                    <View style={style.listIconBox}><Ionicons name="ios-person" size={24} color="#ffffff" /></View>
                    <Text style={style.listText}>Профиль</Text>
                    <View style={style.listArrow}><MaterialIcons name="keyboard-arrow-right" size={24} color="#c8c7cc" /></View>
                  </TouchableOpacity>

                  <TouchableOpacity style={style.listItem} onPress={() => {
                    navigation.navigate("ShopsScreen")
                  }}>
                    <View style={style.listIconBox}><Ionicons name="ios-home" size={24} color="#ffffff" /></View>
                    <Text style={style.listText}>Магазины</Text>
                    <View style={style.listArrow}><MaterialIcons name="keyboard-arrow-right" size={24} color="#c8c7cc" /></View>
                  </TouchableOpacity>

                  <TouchableOpacity style={style.listItem} onPress={()=>{
                    navigation.navigate("BannersScreen")
                  }}>
                    <View style={style.listIconBox}><Ionicons name="ios-notifications" size={24} color="#ffffff" /></View>
                    <Text style={style.listText}>Акции</Text>
                    <View style={style.listArrow}><MaterialIcons name="keyboard-arrow-right" size={24} color="#c8c7cc" /></View>
                  </TouchableOpacity>

                  {/*<TouchableOpacity style={style.listItem}>
                    <View style={style.listIconBox}><MaterialCommunityIcons name="calendar" size={24} color="#ffffff" /></View>
                    <Text style={style.listText}>Истории заказов</Text>
                    <View style={style.listArrow}><MaterialIcons name="keyboard-arrow-right" size={24} color="#c8c7cc" /></View>
                  </TouchableOpacity>

                  <TouchableOpacity style={style.listItem}>
                    <View style={style.listIconBox}><Ionicons name="ios-star-outline" size={24} color="#ffffff" /></View>
                    <Text style={style.listText}>Избранное</Text>
                    <View style={style.listArrow}><MaterialIcons name="keyboard-arrow-right" size={24} color="#c8c7cc" /></View>
                  </TouchableOpacity>

                  <TouchableOpacity style={style.listItem}>
                    <View style={style.listIconBox}><Ionicons name="md-headset" size={24} color="#ffffff" /></View>
                    <Text style={[style.listText, style.listTextNoborder]}>Помощь</Text>
                    <View style={style.listArrow}><MaterialIcons name="keyboard-arrow-right" size={24} color="#c8c7cc" /></View>
                  </TouchableOpacity>*/}
                </View>
              </View>
            )}
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfoAction: (token) => {
      dispatch(getUserInfo(token));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isFetching: state.userInfo.isFetching,
    data: state.userInfo.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
