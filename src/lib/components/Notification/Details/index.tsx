import {Image, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../../assets/icon';
import {Button} from 'react-native-paper';
import SharedStyle from '../../shared-style';

type NotificationDetailsProps = {
  handleClick: (flag: boolean) => void;
};

const NotificationDetails = (props: NotificationDetailsProps) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#c7cdd2',
        flexDirection: 'column',
        margin: 18,
        backgroundColor: '#ffffff',
      }}>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 24,
          borderBottomColor: '#c7cdd2',
          borderBottomWidth: 1,
        }}>
        <Image
          style={styles.mPixCardThumbImage}
          source={require('../../../../assets/Image/tile_pic_one.png')}
        />
        <Text style={styles.mPixCardTitle}>John Miller</Text>
        <Text style={styles.mPixCardSubTitle}>john.miller@gmail.com</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 24,
        }}>
        <Text style={styles.mPixCardTitle}>Meeting with John Miller</Text>
        <Text style={styles.mPixCardSubTitle}>john.miller@gmail.com</Text>
        <View style={styles.roomBookingInfo}>
          <View style={styles.calendarInfo}>
            <SvgXml xml={IconLibrary.CALENDAR} width="12px" height="12px" />
            <Text>Aug 10, 2022</Text>
          </View>
          <View style={styles.timeInfo}>
            <SvgXml xml={IconLibrary.TIMER} width="12px" height="12px" />
            <Text>10:00 AM - 1:00 AM</Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: '#E4F7FF',
            marginTop: 12,
            width: '80%',
            alignItems: 'center',
          }}>
          <Text style={styles.mPixCardSubTitleWhite}>
            Contract Renewal Meeting
          </Text>
        </View>
        <Text style={styles.mPixCardSubTitleBlue}>
          The guest is waiting at the gate
        </Text>
        <View
          style={{
            flexDirection: 'row',
            margin: 24,
            gap: 24,
          }}>
          <Button
            style={SharedStyle.mPixBtnSecondary}
            mode="contained"
            labelStyle={SharedStyle.mPixBtnSecondaryLbl}>
            Deny
          </Button>
          <Button
            style={SharedStyle.mPixBtnSecondary}
            mode="contained"
            labelStyle={SharedStyle.mPixBtnSecondaryLbl}
            onPress={() => props.handleClick(false)}>
            Approve
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mPixCardThumbImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  mPixCardTitle: {fontWeight: '600', fontSize: 16},
  mPixCardSubTitle: {fontWeight: '300', fontSize: 12, marginTop: 4},
  mPixCardSubTitleWhite: {
    fontWeight: '500',
    fontSize: 12,
    padding: 8,
  },
  mPixCardSubTitleBlue: {
    fontWeight: '500',
    marginTop: 24,
    color: '#1A8FF1',
  },
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
});

export default NotificationDetails;
