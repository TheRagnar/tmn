import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { BASE_STYLE, API_URL } from "../../const";
import { connect } from "react-redux";
import axios from "axios";
import { TextInputMask } from 'react-native-masked-text'
import moment from 'moment';

import { getUserInfo } from "../../store/actions/userInfo";
import style from "./style";

const ProfileChange = ({ navigation, token, isFetching, data, getUserInfoAction }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  //const [date, setDate] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    console.log(data)
    if(data.name) {
      setName(data.name)
    }
    if(data.phone) {
      setPhone(data.phone)
    }
    if(data.email) {
      setEmail(data.email)
    }
    //if(data.date_birth) {
    //  console.log(moment(data.date_birth).format('DD-MM-YYYY'))
    //  setDate(moment(data.date_birth).format('DD-MM-YYYY'))
    //}
  }, [data]);

  const fetchData = () => {
    getUserInfoAction(token);
  };

  const onChange = () => {
    let obj = {
      name: name,
      phone: `${phone}`,
      email: email,
    }
    if(email.length > 0) {
      obj.email = email
    }
    axios.patch(`${API_URL}/users/${data.id}`, obj, { headers: { Authorization: token } }).then(response => {
      console.log(response)
      navigation.goBack();
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
            {isFetching ? (
              <View style={style.clear}>
                <ActivityIndicator size="large" color="rgba(30, 66, 160, 1)" />
              </View>
            ) : (
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
                      placeholder="E-mail"
                      value={`${email}`}
                      style={BASE_STYLE.input}
                      placeholderTextColor="#A6A6AB"
                      onChangeText={(text) => {
                        setEmail(text)
                      }}
                    />
                  </View>

                  {/*<View style={style.field}>
                    <TextInputMask
                      type={'datetime'}
                      options={{
                        format: 'DD-MM-YYYY'
                      }}                
                      placeholder="Дата рождения"
                      value={date}
                      style={BASE_STYLE.input}
                      placeholderTextColor="#A6A6AB"
                      onChangeText={(text) => {
                        setDate(text)
                      }}
                    />
                  </View>*/}
                  <View style={style.field}>
                    <TouchableOpacity onPress={() => { onChange() }} style={[BASE_STYLE.button]}>
                      <Text style={BASE_STYLE.buttonText}>Сохранить</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
          </View>
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
    isFetching: state.userInfo.isFetching,
    data: state.userInfo.data,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChange);
