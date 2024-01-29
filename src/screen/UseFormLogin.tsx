import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm } from '../hooks/useForm';
import LogoImage from '../components/LogoImage';
import { validateEmail, validatePassword } from '../helpers/validationChecks';

interface Login {
    email: string,
    password: string
}

const UseFormLogin: React.FC<Login> = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    }

    const validationRules = {
        email: validateEmail,
        password: validatePassword,
    }

    const onSubmit = (values: { [key: string]: string }) => {
        console.log('Form submitted with values: ', values)
    }

    const { values, errors, handleChange, handleSubmit } = useForm({
        initialValues,
        onSubmit,
        validationRules,
    });

    return (
        <View style={styles.container}>
            <LogoImage />
            <TextInput
                autoCapitalize='none'
                placeholder="Email"
                value={values.email}
                onChangeText={(text) => handleChange('email', text)}
                style={styles.input}
            />
            {
                errors.email &&
                <Text style={{ color: 'red' }}>{errors.email}</Text>
            }
            <TextInput
                autoCapitalize='none'
                secureTextEntry
                placeholder='Password'
                value={values.password}
                onChangeText={(text) => handleChange('password', text)}
                style={styles.input}
            />
            {
                errors.password &&
                <Text style={{ color: 'red' }}>{errors.password}</Text>
            }
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