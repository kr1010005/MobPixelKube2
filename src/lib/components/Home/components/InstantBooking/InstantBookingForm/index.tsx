import {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SelectServices} from '../../../../../shared-controls/select-services';
import {Navigation} from '../../../../../types';
import SharedStyle from '../../../../shared-style';
import {MPixThickHeader} from '../../../../../shared-controls/mpix-card/mpix-thick-banner';
import {mockDataOne, mockDataThree} from '../../../../../mock';

type Nav = {
  navigation: Navigation;
};

export const InstantBookingForm = (nav: Nav) => {
  const [selectServices, setSelectServices] = useState(false);

  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };

  const onButtonClick = (flag: boolean) => {
    setSelectServices(flag);
  };

  const doSomething = () => {
    redirect('InstantBooking');
  };

  const [meetingTitle, setMeetingTitle] = useState('');
  const [participants, setParticipants] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <MPixThickHeader
          {...mockDataThree}
          handleClick={() => doSomething()}
          headerPriority={false}
        />
        <View style={styles.formPanel}>
          <TextInput
            label="Meeting Title"
            value={meetingTitle}
            mode="outlined"
            onChangeText={text => setMeetingTitle(text)}
          />
          <TextInput
            multiline
            style={{height: 80}}
            label="participants"
            value={participants}
            mode="outlined"
            onChangeText={text => setParticipants(text)}
          />
          <TextInput
            multiline
            label="Notes"
            value={notes}
            mode="outlined"
            onChangeText={text => setNotes(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 24,
              marginHorizontal: 6,
              gap: 16,
            }}>
            <Button
              style={SharedStyle.mPixBtnSecondary}
              mode="contained"
              labelStyle={SharedStyle.mPixBtnSecondaryLbl}
              onPress={() => setSelectServices(true)}>
              Add Services
            </Button>
            <Button
              style={SharedStyle.mPixBtnSecondary}
              mode="contained"
              labelStyle={SharedStyle.mPixBtnSecondaryLbl}
              onPress={() => redirect('InstantBooking')}>
              Add parking
            </Button>
          </View>
        </View>
      </View>
      <Button
        style={[SharedStyle.mPixBtnPrimary, {margin: 12}]}
        mode="contained"
        onPress={() => redirect('InstantBooking')}>
        Book Meeting
      </Button>
      {selectServices && (
        <SelectServices handleClick={onButtonClick}></SelectServices>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 40,
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
