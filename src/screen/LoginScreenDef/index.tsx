import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LoginForm from '../../components/loginForm';

const handleLoginSubmit = (data: any) => {
  console.log(data);
};

const LoginScreenDef = () => {
  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleLoginSubmit} />
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

export default LoginScreenDef;
