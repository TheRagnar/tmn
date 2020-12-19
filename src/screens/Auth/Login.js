import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { BASE_STYLE } from '../../const';
import style from './style';

import { authIn } from '../../store/actions/auth';

const Login = ({ error, navigation, isFetching, authInAction, afterRegister }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={BASE_STYLE.app}>
      <View style={BASE_STYLE.centerAbs}>
        <View style={style.form}>
          <Text style={[BASE_STYLE.title, style.title]}>Авторизация</Text>
          {afterRegister && (<Text style={style.text}>Вы успешно зарегистрировались. Для продолжения введите код из СМС в поле Пароль</Text>)}
          <View style={style.formItem}>
            <TextInput placeholder="Телефон" onChangeText={(text) => { setPhone((text)) }} value={phone} style={BASE_STYLE.input} placeholderTextColor="#A6A6AB" keyboardType="numeric" />
          </View>
          <View style={style.formItem}>
            <TextInput placeholder="Пароль" onChangeText={(text) => { setPassword((text)) }} value={password} style={BASE_STYLE.input} placeholderTextColor="#A6A6AB" secureTextEntry={true} />
          </View>
          {error.length > 0 && (
            <View style={style.error}>
              <Text style={style.errorText}>{error}</Text>
            </View>
          )}
          <View style={style.footer}>
            <View style={style.footerButton}>
              <TouchableOpacity style={BASE_STYLE.button} onPress={() => { authInAction(phone, password) }}>
                <Text style={BASE_STYLE.buttonText}>Войти</Text>
              </TouchableOpacity>
            </View>
            {!afterRegister && (
              <View style={style.footerButton}>
                <TouchableOpacity onPress={() => { navigation.navigate('RegisterScreen') }} style={[BASE_STYLE.button, style.footerButtonSmall]}>
                  <Text style={BASE_STYLE.buttonText}>Регистрация</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    authInAction: (phone, password) => {
      dispatch(authIn(phone, password))
    },
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    isFetching: state.auth.isFetching,
    afterRegister: state.registration.isSucces
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);