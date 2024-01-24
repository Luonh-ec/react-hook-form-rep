import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

let count = 0;
const LogoHook = () => {
  console.log('Logo load lần thứ:', count);
  count++;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/logoHook.png')}
      />
    </View>
  );
};

export default LogoHook;

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
  },
});
