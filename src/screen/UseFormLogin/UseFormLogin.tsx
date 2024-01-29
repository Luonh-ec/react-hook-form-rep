import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useForm } from '../../hooks/useForm';
import LogoImage from '../../components/LogoImage';

interface Login {
    email: string,
    password: string
}

const UseFormLogin: React.FC<Login> = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values: { [key: string]: string }) => {
        console.log('Form submitted with values: ', values)
    }

    const { values, handleChange, handleSubmit } = useForm({ initialValues, onSubmit })

    return (
        <View style={styles.container}>
            <LogoImage />
            <TextInput
                placeholder="email"
                value={values.email}
                onChangeText={(text) => handleChange('email', text)}
                style={styles.input}
            />
            <TextInput
                placeholder='password'
                value={values.password}
                onChangeText={(text) => handleChange('password', text)}
                style={styles.input}
            />
            <Button
                title="Submit"
                onPress={handleSubmit}
            />
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
})

export default UseFormLogin;