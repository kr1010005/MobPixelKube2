import {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import {Navigation} from '../../types';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';
import SharedStyle from '../shared-style';

type Props = {
  navigation: Navigation;
};

export const Login = ({navigation}: Props) => {
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [checked, setChecked] = useState(true);
  return (
    <View style={[styles.loginWrapper, SharedStyle.mPixThemeBgWhite]}>
      <SvgXml xml={IconLibrary.LOGIN_SCREEN_ICON} width="50%" height="50%" />
      <View style={[SharedStyle.inputWrapper]}>
        <TextInput
          label="Username"
          value={userName}
          mode="outlined"
          onChangeText={text => setUserName(text)}
        />
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          onChangeText={text => setpassword(text)}
        />
      </View>
      <View style={[SharedStyle.rowCenterSpaceBetween, {width: '100%'}]}>
        <View style={[SharedStyle.rowCenterSpaceBetween, {marginTop: 12}]}>
          <View style={SharedStyle.mPixCheckBoxWrapper}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <Text style={{marginLeft: 6}}>Remember Me</Text>
        </View>
        <Button mode="text" onPress={() => console.log('Forgot Password?')}>
          Forgot Password?
        </Button>
      </View>
      <Button
        style={[SharedStyle.mPixBtnPrimary, styles.loginBtn]}
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  loginBtn: {
    width: '100%',
    paddingHorizontal: 12,
    marginTop: 12,
  },
});
