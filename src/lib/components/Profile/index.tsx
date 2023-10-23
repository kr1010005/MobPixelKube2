import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Navigation} from '../../types';
import SharedStyle from '../shared-style';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';

type Nav = {
  navigation: Navigation;
};

export const Profile = (nav: Nav) => {
  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };

  const [meetingTitle, setMeetingTitle] = useState('');
  const [participants, setParticipants] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={[SharedStyle.mPixThemeBgWhite, {height: '100%'}]}>
      <View
        style={[
          styles.bluePanel,
          {
            alignItems: 'center',
            justifyContent: 'center',
            height: '45%',
            gap: 4,
          },
        ]}>
        <View
          style={{
            position: 'absolute',
            right: 18,
            top: 42,
          }}>
          <TouchableHighlight
            onPress={() => redirect('EditProfile')}
            style={{
              height: 24,
              width: 24,
            }}>
            <SvgXml xml={IconLibrary.WHITE_EDIT} />
          </TouchableHighlight>
        </View>
        <Image
          style={{resizeMode: 'contain', width: '40%', height: '40%'}}
          source={require('../../../assets/Image/avatar.png')}
        />
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            fontWeight: '600',
            marginTop: 18,
          }}>
          Allen Fullerstein
        </Text>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 14,
            marginTop: 6,
            fontWeight: '500',
          }}>
          Senior Manager
        </Text>
      </View>
      <View style={{gap: 16, padding: 36}}>
        <View
          style={{
            gap: 24,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SvgXml xml={IconLibrary.BLUE_EMAIL} />
          <View style={{gap: 6}}>
            <Text style={{fontSize: 14, color: '#9ba4aa'}}>Email</Text>
            <Text
              style={[SharedStyle.grayText, {fontSize: 16, fontWeight: '500'}]}>
              alenf@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            gap: 24,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SvgXml xml={IconLibrary.BLUE_CALL} />
          <View style={{gap: 6}}>
            <Text style={{fontSize: 14, color: '#9ba4aa'}}>Phone</Text>
            <Text
              style={[SharedStyle.grayText, {fontSize: 16, fontWeight: '500'}]}>
              +44 2547 25789
            </Text>
          </View>
        </View>
        <View
          style={{
            gap: 24,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SvgXml xml={IconLibrary.BLUE_LOCATION} />
          <View style={{gap: 6}}>
            <Text style={{fontSize: 14, color: '#9ba4aa'}}>
              Current Location
            </Text>
            <Text
              style={[SharedStyle.grayText, {fontSize: 16, fontWeight: '500'}]}>
              Brooklyn, UK
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bluePanel: {
    backgroundColor: '#1a8ff1',
  },
  trayPanelClose: {
    position: 'absolute',
    right: 0,
    top: 12,
  },
});
