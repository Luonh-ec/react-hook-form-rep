import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

interface InputBoxCustomProps {
    nativeID: string,
    value: string,
    onChangeText: (text: string) => void,
    // onBlur: (text: any) => void,
    placeholder: any,
}

const InputBox: React.FC<InputBoxCustomProps> = ({
    nativeID,
    value,
    onChangeText,
    // onBlur,
    placeholder
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                nativeID={nativeID}
                value={value}
                onChangeText={onChangeText}
                // onBlur={onBlur}
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
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