import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogoImage from '../../components/LogoImage';

const Login = () => {
    return (
        <>
            <View style={styles.container}>
                <LogoImage />
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