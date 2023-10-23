import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../../assets/icon';
import {Navigation} from '../../../types';
import SharedStyle from '../../shared-style';
import {Button, TextInput} from 'react-native-paper';

type Nav = {
  navigation: Navigation;
};

type profileDetailsProps = {
  name: string;
  email: string;
  designation: string;
  phone: string;
};

export const EditProfile = (nav: Nav) => {
  const initialState: profileDetailsProps = {
    name: 'Alen Fullerestein',
    email: 'alenf@gmail.com',
    designation: 'Senior manager',
    phone: '+44 2547 25789',
  };
  const [profileDetails, setProfileDetails] =
    useState<profileDetailsProps>(initialState);
  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };

  return (
    <View
      style={[
        SharedStyle.mPixThemeBgWhite,
        {
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingTop: 24,
        },
      ]}>
      <View style={{padding: 24}}>
        <Text style={[SharedStyle.grayText, {fontSize: 24, fontWeight: '600'}]}>
          Profile
        </Text>
        <TouchableHighlight
          onPress={() => redirect('EditProfile')}
          style={{
            height: 72,
            width: 72,
            marginTop: 36,
          }}>
          <View>
            <Image
              style={{resizeMode: 'contain', width: '100%', height: '100%'}}
              source={require('../../../../assets/Image/avatar.png')}
            />
            <SvgXml
              xml={IconLibrary.BLUE_WHITE_EDIT}
              style={{
                position: 'absolute',
                right: -5,
                top: -5,
                width: '100%',
                height: '100%',
              }}
            />
          </View>
        </TouchableHighlight>
        <View style={{gap: 12, marginTop: 24}}>
          <TextInput
            label="Name"
            value={profileDetails.name}
            mode="outlined"
            onChangeText={text =>
              setProfileDetails({...profileDetails, name: text})
            }
          />
          <TextInput
            label="Email"
            value={profileDetails.email}
            mode="outlined"
            onChangeText={text =>
              setProfileDetails({...profileDetails, email: text})
            }
          />
          <TextInput
            label="Designation"
            value={profileDetails.designation}
            mode="outlined"
            onChangeText={text =>
              setProfileDetails({...profileDetails, designation: text})
            }
          />
          <TextInput
            label="Phone"
            value={profileDetails.phone}
            mode="outlined"
            onChangeText={text =>
              setProfileDetails({...profileDetails, phone: text})
            }
          />
        </View>
      </View>
      <Button
        style={[SharedStyle.mPixBtnPrimary, {margin: 12}]}
        mode="contained"
        onPress={() => redirect('Profile')}>
        Update
      </Button>
    </View>
  );
};
