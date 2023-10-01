import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Navigation} from '../../../../types';
import {BookingInfoTile} from '../../../../shared-controls/booking-info-tile';
import {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../../../assets/icon';

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
  const [selectServices, setSelectServices] = useState(false);

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
              marginHorizontal: 6,
              gap: 16,
            }}>
            <Button
              style={styles.outlinrBtn}
              mode="contained"
              labelStyle={{color: '#1A8EF1', fontSize: 12}}
              onPress={() => setSelectServices(true)}>
              Add Services
            </Button>
            <Button
              style={styles.outlinrBtn}
              mode="contained"
              labelStyle={{color: '#1A8EF1', fontSize: 12}}
              onPress={() => redirect('InstantBooking')}>
              Add parking
            </Button>
          </View>
        </View>
      </View>
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => redirect('InstantBooking')}>
        Book Meeting
      </Button>
      {selectServices && (
        <View style={styles.addServices}>
          <View style={styles.backDrop}></View>
          <View style={styles.bottomOverlay}>
            <TouchableHighlight onPress={() => setSelectServices(false)}>
              <View style={{display: 'flex'}}>
                <SvgXml
                  onPress={() => setSelectServices(false)}
                  style={styles.bottomOverlayClose}
                  xml={IconLibrary.CLOSE}
                  height="14"
                  width="14"
                />
              </View>
            </TouchableHighlight>
            <View style={styles.bottomOverlayContent}>
              <Text
                style={{
                  color: '#3C5774',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Select Services
              </Text>
              <View
                style={{
                  marginTop: 24,
                  gap: 18,
                }}>
                <SvgXml xml={IconLibrary.COFFE} height="24" />
                <SvgXml xml={IconLibrary.SNACK} height="24" />
                <SvgXml xml={IconLibrary.LUNCH} height="24" />
              </View>
              <Button
                style={styles.btn}
                mode="contained"
                onPress={() => setSelectServices(false)}>
                Find Space
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 24,
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
  outlinrBtn: {
    borderRadius: 6,
    backgroundColor: '#ffffff',
    color: 'red',
    borderColor: '#1A8EF1',
    borderWidth: 1,
    width: '50%',
  },
  btn: {
    margin: 12,
    borderRadius: 6,
    backgroundColor: '#1A8EF1',
    padding: 4,
  },
  backDrop: {
    position: 'absolute',
    backgroundColor: '#c7cdd2',
    opacity: 0.4,
    bottom: 0,
    top: 0,
    width: '100%',
  },
  bottomOverlay: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: '56%',
    bottom: 0,
    width: '100%',
    padding: 12,
  },
  bottomOverlayContent: {
    padding: 24,
  },
  addServices: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: '100%',
  },
  bottomOverlayClose: {
    position: 'absolute',
    right: 12,
    top: 12,
    display: 'flex',
  },
});
