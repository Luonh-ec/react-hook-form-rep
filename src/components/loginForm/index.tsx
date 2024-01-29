import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputField from '../fields/inputField';

const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  const isValidEmail = (inputEmail: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const isValidPassword = (inputPassword: string): boolean => {
    return (
      inputPassword.length >= 8 &&
      inputPassword.charAt(0) === inputPassword.charAt(0).toUpperCase()
    );
  };

  const isTextFieldEmpty = (inputText: string): boolean => {
    return inputText.trim() === '';
  };

  const handleEmail = (text: string) => {
    setEmail(text);

    // Reset email error khi người dùng bắt đầu nhập

    // Kiểm tra sau 3 giây
    setTimeout(() => {
      if (isTextFieldEmpty(text)) {
        setEmailError('Email is required');
      } else if (!isValidEmail(text)) {
        setEmailError('Invalid email address');
      }
    }, 1000);
  };

  const handlePass = (text: string) => {
    setPassword(text);

    // Reset password error khi người dùng bắt đầu nhập

    setTimeout(() => {
      if (isTextFieldEmpty(text)) {
        setPasswordError('Password is required');
      } else if (!isValidPassword(text)) {
        setPasswordError(
          'Password must be at least 8 characters and start with an uppercase letter',
        );
      }
    }, 1000);
  };

  const handleLogin = () => {
    onSubmit({email, password});
    // Kiểm tra điều kiện để kích hoạt nút "Login"
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputField
        placeholder="Email"
        onChangeText={text => handleEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <InputField
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => handlePass(text)}
        value={password}
      />
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}

      <TouchableOpacity
        style={[
          styles.loginButton,
          isButtonEnabled
            ? styles.loginButtonEnabled
            : styles.loginButtonDisabled,
        ]}
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
