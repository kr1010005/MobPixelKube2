import {Image, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../assets/icon';

export const MeetingDetailCard = () => {
  return (
    <View style={styles.tileBlock}>
      <Image
        style={{resizeMode: 'contain', width: 80, height: 80}}
        source={require('../../../assets/Image/tile_pic_one.png')}
      />
      <View>
        <Text style={{fontWeight: '600', fontSize: 16}}>
          Annual Audit Meeting
        </Text>
        <Text style={{fontWeight: '300', fontSize: 12, marginTop: 4}}>
          EInstein - Meeting Room
        </Text>
        <View style={styles.roomBookingInfo}>
          <View>
            <View style={styles.calendarInfo}>
              <SvgXml xml={IconLibrary.CALENDAR} width="12px" height="12px" />
              <Text>Aug 10, 2022</Text>
            </View>
            <View style={styles.timeInfo}>
              <SvgXml xml={IconLibrary.TIMER} width="12px" height="12px" />
              <Text>10:00 AM - 11:00 AM</Text>
            </View>
          </View>
          <View>
            <SvgXml xml={IconLibrary.USERS} width="12px" height="12px" />
            <Text>4</Text>
          </View>
        </View>
        <View style={styles.badgeRow}>
          <SvgXml xml={IconLibrary.AIRCONDITIONER} width="12px" height="12px" />
          <SvgXml xml={IconLibrary.TV} width="12px" height="12px" />
          <SvgXml xml={IconLibrary.WHITEBOARD} width="12px" height="12px" />
          <SvgXml xml={IconLibrary.PROJECTOR} width="12px" height="12px" />
          <SvgXml xml={IconLibrary.VIDEOCALL} width="12px" height="12px" />
          <SvgXml xml={IconLibrary.FAXMACHINE} width="12px" height="12px" />
          <SvgXml xml={IconLibrary.WIFIROUTER} width="12px" height="12px" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  roomBookingInfo: {display: 'flex', flexDirection: 'row'},
  calendarInfo: {display: 'flex', flexDirection: 'row'},
  timeInfo: {display: 'flex', flexDirection: 'row'},
  tileBlock: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#c7cdd2',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  badgeRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
});
