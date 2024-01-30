import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm} from '../hooks/useForm';
import LogoImage from '../components/LogoImage';
import {validateEmail, validatePassword} from '../helpers/validationChecks';
import Validation from '../utils/validation';
import * as yup from 'yup';

let i = 0;
const UseFormLogin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  console.log('Login load lần thứ: ', i);
  i++;

  // const schema = yup.object().shape({
  //   email: Validation.validPassword(),
  //   password: Validation.validRePassword('password'),
  // });

  const validationRules = {
    email: validateEmail,
    password: validatePassword,
  };

  const onSubmit = (values: {[key: string]: string}) => {
    console.log('Form submitted with values: ', values);
  };

  const {values, errors, handleChange, handleBlur, handleSubmit} = useForm({
    initialValues,
    onSubmit,
    // validationSchema: schema,
    validationRules,
  });

  return (
    <View style={styles.container}>
      <LogoImage />
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={text => handleChange('email', text)}
        onBlur={() => handleBlur('email')}
        style={styles.input}
      />
      {errors['email'] && <Text style={{color: 'red'}}>{errors['email']}</Text>}
      <TextInput
        autoCapitalize="none"
        secureTextEntry
        placeholder="Password"
        onChangeText={text => handleChange('password', text)}
        onBlur={() => handleBlur('password')}
        style={styles.input}
      />
      {errors['password'] && (
        <Text style={{color: 'red'}}>{errors['password']}</Text>
      )}
      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },

  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UseFormLogin;
