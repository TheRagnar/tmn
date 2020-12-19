import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { BASE_STYLE } from '../../const';
import style from './style';

import { registration } from '../../store/actions/registration';

const Register = ({ error, navigation, isFetching, registrationAction }) => {
  const [phone, setPhone] = useState('');

  return (
    <View style={BASE_STYLE.app}>
      <View style={BASE_STYLE.centerAbs}>
        <View style={style.form}>
          <Text style={[BASE_STYLE.title, style.title]}>Регистрация</Text>
          <Text style={style.text}>Введите номер телефона, затем вам придет пароль, который нужно будет использовать для входа</Text>
          <View style={style.formItem}>
            <TextInput placeholder="Телефон" onChangeText={(text) => { setPhone((text)) }} value={phone} style={BASE_STYLE.input} placeholderTextColor="#A6A6AB" keyboardType="numeric" />
          </View>
          {error.length > 0 && (
            <View style={style.error}>
              <Text style={style.errorText}>{error}</Text>
            </View>
          )}
          <View style={style.footer}>
            <View style={style.footerButton}>
              <TouchableOpacity style={BASE_STYLE.button} onPress={() => { registrationAction(phone) }}>
                <Text style={BASE_STYLE.buttonText}>Продолжить</Text>
              </TouchableOpacity>
            </View>
            <View style={style.footerButton}>
              <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen') }} style={[BASE_STYLE.button, style.footerButtonSmall]}>
                <Text style={BASE_STYLE.buttonText}>Вход</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    registrationAction: (phone) => {
      dispatch(registration(phone))
    }
  }
}

const mapStateToProps = state => {
  return {
    error: state.registration.error,
    isFetching: state.registration.isFetching
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);