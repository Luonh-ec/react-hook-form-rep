// Tên file: CustomTextInput.js
import React from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput} from 'react-native';

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  placeholder: string;
}

let count = 0;
const InputField: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  placeholder,
}) => {
  console.log('InputField load lần thứ:', count);
  count = count + 1;

  return (
    <TextInput
      style={[styles.input]}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCapitalize="none"
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});
