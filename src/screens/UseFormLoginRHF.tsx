// LoginFormTwo.js
import React from 'react';
import {useForm, Controller, Resolver} from 'react-hook-form';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as yup from 'yup';
import Validation from '../utils/validation';
import {yupResolver} from '@hookform/resolvers/yup';
import InputBox from '../components/InputBox';

let i = 0;

const schema = yup.object().shape({
  email: Validation.validEmail(),
  password: Validation.validPassword(),
  rePassword: Validation.validRePassword('password'),
});

const LoginFormTwo = () => {
  console.log('reload lần thứ:', i);
  i++;

  const onSubmit = (data: any) => console.log(data);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    delayError: 5000,
    resolver: yupResolver(schema),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Controller for email field */}
      <Controller
        name="email"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            style={styles.input}
          />
        )}
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      {/* Controller for password field */}
      <Controller
        name="password"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            autoCapitalize="none"
            placeholder="Password"
            value={value}
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            style={styles.input}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default LoginFormTwo;
