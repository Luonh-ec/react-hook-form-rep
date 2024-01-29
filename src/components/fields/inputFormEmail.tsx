// Tên file: CustomTextInput.js
import React, {memo, useMemo} from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput} from 'react-native';

interface CustomTextInputProps {
  value?: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  placeholder: string;
}

let count = 0;
const InputFieldEmail = ({
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  placeholder,
}: CustomTextInputProps) => {
  console.log('Field email load lần thứ:', count);
  count = count + 1;

  return (
    <TextInput
      value={value}
      style={[styles.input]}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCapitalize="none"
    />
  );
};

export default InputFieldEmail;

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
