import {StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';
import {Navigation} from '../../types';
import {DashboardTiles} from './components/DashboardTiles';
import SharedStyle from '../shared-style';

type Props = {
  navigation: Navigation;
};

export const DashboardHome = ({navigation}: Props) => {
  const doNavigation = (str: string) => {
    navigation.navigate(str);
  };
  return (
    <View style={[styles.dashboardWrapper, SharedStyle.mPixThemeBgWhite]}>
      <View style={SharedStyle.rowCenterSpaceBetween}>
        <View style={{gap: 4}}>
          <Text
            style={[{fontSize: 24, fontWeight: '500'}, SharedStyle.grayText]}>
            Hi John Davis,
          </Text>
          <Text style={[{fontSize: 14}, SharedStyle.grayText]}>
            Have a great day ahead!
          </Text>
        </View>
        <SvgXml xml={IconLibrary.SCAN} width="58" height="58" />
      </View>
      <View style={styles.dashboardTimesWrapper}>
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
  dashboardWrapper: {
    paddingTop: 50,
    paddingHorizontal: 12,
    height: '100%',
  },
  dashboardTimesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
});
