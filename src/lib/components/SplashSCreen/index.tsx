import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';
import {Navigation} from '../../types';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';

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
      <SvgXml xml={IconLibrary.SPLASH_SCREEN_ICON} width="50%" height="50%" />
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
    backgroundColor: '#1A8EF1',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
