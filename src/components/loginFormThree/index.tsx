import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputField from '../fields/inputField';
import useFormSec from '../../hooks/useFormSecond';
import * as yup from 'yup';
import Validation from '../../utils/validation';
import useController from '../../hooks/useController';

let count = 0;

const LoginForm = ({onSubmit}) => {
  console.log('Login comp load lần thứ: ', count);
  count++;

  const schema = yup.object().shape({
    password: Validation.validPassword(),
    rePassword: Validation.validRePassword('password'),
  });

  const methods = useController();

  const {valueInput, handleChange} = methods;

  const handleLogin = () => {
    // Kiểm tra điều kiện để kích hoạt nút "Login"
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <InputField
        name="email"
        value={valueInput}
        placeholder="Email"
        onChangeText={text => handleChange(text)}
        keyboardType="email-address"
      />

      <InputField
        name="password"
        value={valueInput}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => text}
      />

      <TouchableOpacity
        style={[styles.loginButton, styles.loginButtonEnabled]}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },

  loginButtonEnabled: {
    backgroundColor: 'blue',
  },
  loginButtonDisabled: {
    backgroundColor: 'gray',
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
