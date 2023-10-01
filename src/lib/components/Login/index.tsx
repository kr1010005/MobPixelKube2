import {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import {Navigation} from '../../types';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';

type Props = {
  navigation: Navigation;
};

export const Login = ({navigation}: Props) => {
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [checked, setChecked] = useState(true);
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../../assets/Image/diamond.png')}
        style={{width: '40%', resizeMode: 'contain', margin: 30}}
      /> */}
      <SvgXml xml={IconLibrary.LOGIN_SCREEN_ICON} width="50%" height="50%" />
      <View style={styles.inputWrapper}>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{fontWeight: 'normal'}}>Remember Me</Text>
        </View>
        <Button mode="text" onPress={() => console.log('Pressed')}>
          Forgot Password?
        </Button>
      </View>
      <Button
        style={{
          width: '100%',
          paddingHorizontal: 12,
          marginTop: 12,
          borderRadius: 6,
          backgroundColor: '#1A8EF1',
          padding: 4,
        }}
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  inputWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 12,
  },
});
