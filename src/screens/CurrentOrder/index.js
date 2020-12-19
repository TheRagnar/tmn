import React, {useEffect} from "react";
import { View, ScrollView, Text } from "react-native";
import style from "./style";
import { API_URL, BASE_STYLE } from "../../const";
import axios from "axios";
import { connect } from "react-redux";

const CurrentOrder = ({navigation, token}) => {


  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchData = () => {
    axios.get(`${API_URL}/orders`, { headers: { Authorization: token } }).then(resp => {
      console.log(resp)
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <View style={BASE_STYLE.main}>
      <ScrollView style={BASE_STYLE.scroll} contentContainerStyle={{
        flex: 1
      }}>
        <View style={style.clear}>
          <Text style={style.clearText}>Нет активных заказов</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps, null) (CurrentOrder);