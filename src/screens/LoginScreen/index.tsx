import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LoginForm from '../../components/loginForm';
import LogoHook from '../../components/logoHook';
import LoginFormTwo from '../../components/loginFormTwo';
import LoginFormThree from '../../components/loginFormThree';

const handleLoginSubmit = (data: any) => {
  console.log(data);
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LogoHook />
      <LoginFormThree onSubmit={handleLoginSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
