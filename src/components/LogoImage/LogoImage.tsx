import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const LogoImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/images/logoHook.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        margin: 50,
        width: 100,
        height: 100,
    }
})

export default LogoImage;