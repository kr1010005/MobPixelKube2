import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';
import {black} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import SharedStyle from '../../components/shared-style';

type SelectServiceProps = {
  handleClick: (flag: boolean) => void;
};

export const SelectServices = (props: SelectServiceProps) => {
  return (
    <View style={styles.addServices}>
      <View style={styles.trayBackDrop}></View>
      <View style={[SharedStyle.mPixThemeBgWhite, styles.trayPanel]}>
        <View>
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            <TouchableHighlight
              onPress={() => props.handleClick(false)}
              style={{
                height: 24,
                width: 24,
              }}>
              <SvgXml style={styles.trayPanelClose} xml={IconLibrary.CLOSE} />
            </TouchableHighlight>
          </View>

          <View style={{padding: 24}}>
            <Text
              style={[
                SharedStyle.grayText,
                {
                  fontSize: 18,
                  fontWeight: '600',
                },
              ]}>
              Select Services
            </Text>
            <View
              style={{
                marginTop: 24,
                gap: 18,
              }}>
              <SvgXml xml={IconLibrary.COFFE} height="24" />
              <SvgXml xml={IconLibrary.SNACK} height="24" />
              <SvgXml xml={IconLibrary.LUNCH} height="24" />
            </View>
          </View>
        </View>
        <Button
          style={[SharedStyle.mPixBtnPrimary, {margin: 12}]}
          mode="contained"
          onPress={() => props.handleClick(false)}>
          Add Services
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addServices: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: '100%',
  },
  trayBackDrop: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: '100%',
    opacity: 0.4,
    backgroundColor: '#c7cdd2',
  },
  trayPanel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  trayPanelClose: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
});
