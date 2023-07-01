import {Image, StyleSheet, Text, View} from 'react-native';
import {MarketingMeeting} from './components/MarketingMeeting';
import {DashboardTiles} from './components/DashboardTiles';
import {Navigation} from '../../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BookDesk} from './components/BookDesk';
import {BookRoom} from './components/BookRoom';
import {InstantBooking} from './components/InstantBooking';

type Props = {
  navigation: Navigation;
};

export const DashboardHome = ({navigation}: Props) => {
  const doNavigation = (str: string) => {
    console.log('SHASHI', str);
    navigation.navigate(str);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{gap: 4}}>
          <Text style={{fontSize: 24, fontWeight: '500'}}>Hi John Davis,</Text>
          <Text>Have a great day ahead!</Text>
        </View>
        <Image
          source={require('../../../assets/Image/scan.png')}
          style={{width: 50}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 6,
          width: '100%',
          marginTop: 24,
        }}>
        <MarketingMeeting title="Marketing Meeting"></MarketingMeeting>
        <DashboardTiles
          title="Instant Booking"
          navUrl="InstantBooking"
          nav={doNavigation}
        />
        <DashboardTiles
          title="Book Room"
          navUrl="BookRoom"
          nav={doNavigation}
        />
        <DashboardTiles
          title="Book Desk"
          navUrl="BookDesk"
          nav={doNavigation}
        />
        <DashboardTiles
          title="Book Parking"
          navUrl="BookParking"
          nav={doNavigation}
        />
        <DashboardTiles
          title="Book Services"
          navUrl="BookServices"
          nav={doNavigation}
        />
        <DashboardTiles
          title="Find Colleague"
          navUrl="FindColleague"
          nav={doNavigation}
        />
        <DashboardTiles
          title="Manage Visitor"
          navUrl="ManageVisitor"
          nav={doNavigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
