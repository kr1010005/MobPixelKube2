import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';
import {Navigation} from '../../types';

type Props = {
  navigation: Navigation;
};

const SplashScreen = ({navigation}: Props) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate('Login');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Image/diamond.png')}
        style={{width: '80%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2b9cd8',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
