import React, { ChangeEvent, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LogoImage from '../../components/LogoImage';
import InputBox from '../../components/InputBox';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
    })


    const onChangeInput = (e: any) => {
        const formField = e.target.name
        const updateFormData = {
            ...formData,
            [formField]: e.target.value
        }
        setFormData(updateFormData)
    }

    return (
        <>
            <View style={styles.container}>
                <LogoImage />
                <InputBox
                    nativeID='username'
                    value={formData.username}
                    placeholder="username"
                    onChangeText={onChangeInput}
                />
                <InputBox
                    nativeID='email'
                    value={formData.email}
                    placeholder="email"
                    onChangeText={onChangeInput}
                />
                <InputBox
                    nativeID='password'
                    value={formData.password}
                    placeholder="password"
                    onChangeText={onChangeInput}
                />
                <InputBox
                    nativeID='confirmpassword'
                    value={formData.confirmpassword}
                    placeholder="confirmpassword"
                    onChangeText={onChangeInput}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})

export default Login;