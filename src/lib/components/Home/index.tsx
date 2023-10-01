import {StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';
import {Navigation} from '../../types';
import {DashboardTiles} from './components/DashboardTiles';
import {MarketingMeeting} from './components/MarketingMeeting';

type Props = {
  navigation: Navigation;
};

export const DashboardHome = ({navigation}: Props) => {
  const doNavigation = (str: string) => {
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
          <Text style={{fontSize: 24, fontWeight: '500', color: '#2E445B'}}>
            Hi John Davis,
          </Text>
          <Text style={{fontSize: 14, color: '#2E445B'}}>
            Have a great day ahead!
          </Text>
        </View>
        <SvgXml xml={IconLibrary.SCAN} width="58" height="58" />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 12,
          width: '100%',
          marginTop: 24,
          margin: 'auto',
        }}>
        {/* <MarketingMeeting title="Marketing Meeting"></MarketingMeeting> */}
        <DashboardTiles
          title="Instant Booking"
          navUrl=""
          nav={doNavigation}
          odd={true}
          icon=""
        />
        <DashboardTiles
          title="Instant Booking"
          navUrl="InstantBooking"
          icon={IconLibrary.INSTANT_BOOKING}
          nav={doNavigation}
        />
        <DashboardTiles
          title="Book Room"
          navUrl="BookRoom"
          icon={IconLibrary.BOOK_ROOM}
          nav={doNavigation}
        />
        <DashboardTiles
          title="Book Desk"
          navUrl="BookDesk"
          icon={IconLibrary.BOOK_DESK}
          nav={doNavigation}
        />
        <DashboardTiles
          title="Book Parking"
          navUrl="BookParking"
          icon={IconLibrary.BOOK_PARKING}
          nav={doNavigation}
        />
        <DashboardTiles
          title="Book Services"
          navUrl="BookServices"
          icon={IconLibrary.BOOK_SERVICES}
          nav={doNavigation}
        />
        <DashboardTiles
          title="Find Colleague"
          navUrl="FindColleague"
          icon={IconLibrary.FIND_COLLEAGUE}
          nav={doNavigation}
        />
        <DashboardTiles
          title="Manage Visitor"
          navUrl="ManageVisitor"
          icon={IconLibrary.MANAGE_VISITOR}
          nav={doNavigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 12,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    height: '100%',
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
