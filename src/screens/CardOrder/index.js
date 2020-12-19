import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { BASE_STYLE, API_URL } from "../../const";
import { connect } from "react-redux";
import axios from "axios";
import { TextInputMask } from 'react-native-masked-text'
import style from "./style";

const CardOrder = ({ navigation, token }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  const onChange = () => {
    let obj = {
      name: name,
      phone: `${phone}`,
      address: address,
    }
    if (comment.length > 0) {
      obj.comment = comment
    }
    axios.post(`${API_URL}/orders`, obj, { headers: { Authorization: token } }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
      alert(error)
    })
  }

  return (
    <View style={BASE_STYLE.main}>
      <ScrollView style={BASE_STYLE.scroll}>
        <View style={style.content}>
          <View style={[style.wrapper, style.wrapperSmall]}>
            <View style={[style.avatar, style.avatarSmall]}>
              <Ionicons name="ios-person-add" size={80} color="#E31E24" />
            </View>
            <View style={style.fields}>
              <View style={style.field}>
                <TextInput
                  placeholder="Имя"
                  value={name}
                  style={BASE_STYLE.input}
                  placeholderTextColor="#A6A6AB"
                  onChangeText={(text) => {
                    setName(text)
                  }}
                />
              </View>
              <View style={style.field}>
                <TextInput
                  placeholder="Телефон"
                  value={`${phone}`}
                  style={BASE_STYLE.input}
                  placeholderTextColor="#A6A6AB"
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    setPhone(text)
                  }}
                />
              </View>

              <View style={style.field}>
                <TextInput
                  placeholder="Адрес"
                  value={address}
                  style={BASE_STYLE.input}
                  placeholderTextColor="#A6A6AB"
                  onChangeText={(text) => {
                    setAddress(text)
                  }}
                />
              </View>

              <View style={style.field}>
                <TextInput
                  placeholder="Комментарий"
                  value={comment}
                  style={BASE_STYLE.input}
                  placeholderTextColor="#A6A6AB"
                  onChangeText={(text) => {
                    setComment(text)
                  }}
                />
              </View>

              <View style={style.field}>

                <TouchableOpacity onPress={() => { onChange() }} style={[BASE_STYLE.button]}>
                  <Text style={BASE_STYLE.buttonText}>Далее</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardOrder);
