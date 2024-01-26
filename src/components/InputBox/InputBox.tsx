import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

interface InputBoxCustomProps {
    nativeID: string,
    value: string,
    onChangeText: (text: string) => void,
    onBlur: (text: any) => void,
    keyboardType?: KeyboardTypeOptions,
    secureTextEntry?: boolean,
    placeholder: any,
}

const InputBox: React.FC<InputBoxCustomProps> = ({
    nativeID,
    value,
    onChangeText,
    onBlur,
    keyboardType,
    secureTextEntry,
    placeholder
}) => {
    return (
        <TextInput
            nativeID={nativeID}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    }
})

export default InputBox;