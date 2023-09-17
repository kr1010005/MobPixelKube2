import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Navigation} from '../../../../types';
import {BookingInfoTile} from '../../../../shared-controls/booking-info-tile';
import {useState} from 'react';

type Nav = {
  navigation: Navigation;
};

export const InstantBookingForm = (nav: Nav) => {
  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };

  const [meetingTitle, setMeetingTitle] = useState('');
  const [participants, setParticipants] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.bluePanel}>
          <View style={styles.tileBlock}>
            <Image
              style={{resizeMode: 'contain', width: 80, height: 80}}
              source={require('../../../../../assets/Image/tile_pic_one.png')}
            />
            <View>
              <Text style={{fontWeight: '600', fontSize: 16, color: '#ffffff'}}>
                Einstein - Meeting Room 1
              </Text>
              <View style={styles.badgeRow}>
                <Image
                  style={{resizeMode: 'contain', width: 14, height: 14}}
                  source={require('../../../../../assets/Image/small-icons/001.png')}
                />
                <Image
                  style={{resizeMode: 'contain', width: 14, height: 14}}
                  source={require('../../../../../assets/Image/small-icons/002.png')}
                />
                <Image
                  style={{resizeMode: 'contain', width: 14, height: 14}}
                  source={require('../../../../../assets/Image/small-icons/003.png')}
                />
                <Image
                  style={{resizeMode: 'contain', width: 14, height: 14}}
                  source={require('../../../../../assets/Image/small-icons/004.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              borderTopColor: '#c7cdd2',
              borderTopWidth: 1,
              marginHorizontal: 16,
              paddingVertical: 8,
            }}>
            <Text
              style={{
                fontWeight: '300',
                fontSize: 12,
                marginTop: 4,
                color: '#ffffff',
              }}>
              2nd Floor, Smartcity, UK
            </Text>
          </View>
          <View
            style={{
              borderTopColor: '#c7cdd2',
              borderTopWidth: 1,
              marginHorizontal: 16,
              paddingVertical: 8,
            }}>
            <Text
              style={{
                fontWeight: '300',
                fontSize: 12,
                marginTop: 4,
                color: '#ffffff',
              }}>
              2nd Floor, Smartcity, UK
            </Text>
          </View>
        </View>
        <View style={styles.formPanel}>
          <TextInput
            label="Meeting Title"
            value={meetingTitle}
            mode="outlined"
            onChangeText={text => setMeetingTitle(text)}
          />
          <TextInput
            style={{height: 80}}
            label="participants"
            value={participants}
            mode="outlined"
            onChangeText={text => setParticipants(text)}
          />
          <TextInput
            label="Notes"
            value={notes}
            mode="outlined"
            onChangeText={text => setNotes(text)}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 24,
              gap: 16,
            }}>
            <Button
              style={{width: '50%'}}
              mode="contained"
              onPress={() => redirect('InstantBooking')}>
              Add Services
            </Button>
            <Button
              style={{width: '50%'}}
              mode="contained"
              onPress={() => redirect('InstantBooking')}>
              Add parking
            </Button>
          </View>
        </View>
      </View>
      <Button
        style={{marginHorizontal: 12}}
        mode="contained"
        onPress={() => redirect('InstantBooking')}>
        Book Meeting
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 24,
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
  bluePanel: {
    backgroundColor: '#1a8ff1',
  },
  tileBlock: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    gap: 12,
    marginBottom: 12,
  },
  badgeRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#9ba4aa',
    borderRadius: 4,
  },
  formPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 12,
  },
});
