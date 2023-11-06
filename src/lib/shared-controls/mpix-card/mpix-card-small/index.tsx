import {Image, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../../assets/icon';
import {MPixCardLargeProps} from '../../../types';
import renderFacilities from '../../../services';

export const MPixCardSmall = (props: MPixCardLargeProps) => {
  return (
    <View style={styles.mPixCardBlock}>
      <View style={styles.mPixCardBlockLeft}>
        <Image style={styles.mPixCardThumbImage} source={props.thumbImage} />
      </View>
      <View>
        <Text style={styles.mPixCardTitle}>{props.title}</Text>
        <Text style={styles.mPixCardSubTitle}>{props.subTitle}</Text>
        <View style={styles.roomBookingInfo}>
          <View style={styles.calendarInfo}>
            <SvgXml xml={IconLibrary.CALENDAR} width="12px" height="12px" />
            <Text>{props.date}</Text>
          </View>
          <View style={styles.timeInfo}>
            <SvgXml xml={IconLibrary.TIMER} width="12px" height="12px" />
            <Text>{props.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mPixCardBlock: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#c7cdd2',
    backgroundColor: '#ffffff',
  },
  mPixCardBlockLeft: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  mPixCardThumbImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  mPixCardTitle: {fontWeight: '600', fontSize: 16},
  mPixCardSubTitle: {fontWeight: '300', fontSize: 12, marginTop: 4},
  roomBookingInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 12,
    width: '75%',
    justifyContent: 'space-between',
  },
  calendarInfo: {flexDirection: 'row', alignItems: 'center', gap: 6},
  timeInfo: {flexDirection: 'row', alignItems: 'center', gap: 6},
  badgeRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 12,
  },
});
