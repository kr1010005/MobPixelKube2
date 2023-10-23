import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';
import {Navigation} from '../../types';
import SharedStyle from '../shared-style';

type Props = {
  navigation: Navigation;
};

const SplashScreen = ({navigation}: Props) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate('Login');
    }, 500);
  }, []);

  return (
    <View style={[styles.splashSCreen, SharedStyle.mPixThemeBgBlue]}>
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
  splashSCreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
