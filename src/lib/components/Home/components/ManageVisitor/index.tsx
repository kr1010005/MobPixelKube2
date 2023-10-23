import React, {useEffect, useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button, TextInput} from 'react-native-paper';
import {SelectServices} from '../../../../shared-controls/select-services';
import {Navigation} from '../../../../types';
import SharedStyle from '../../../shared-style';

type Nav = {
  navigation: Navigation;
};

export const ManageVisitor = (nav: Nav) => {
  const [toMeet, setToMeet] = useState('');
  const [location, setLocation] = useState('');
  const [visitPurpose, setVisitPurpose] = useState('');
  const layout = useWindowDimensions();

  const [selectServices, setSelectServices] = useState(false);

  const onButtonClick = (flag: boolean) => {
    setSelectServices(flag);
  };

  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [visitorDate, setVisitorDate] = useState('');
  const [openStartTimePicker, setOpenStartTimePicker] = useState(false);
  const [visitorStartTime, setVisitorStartTime] = useState('');
  const [openEndTimePicker, setOpenEndTimePicker] = useState(false);
  const [visitorEndTime, setVisitorEndTime] = useState('');
  const date = new Date();

  useEffect(() => {
    console.log('Test');
  }, [nav]);

  return (
    <View style={styles.manageVisitorWrapper}>
      <View style={{flexDirection: 'column', padding: 12, gap: 12}}>
        <TextInput
          label="Location"
          value={location}
          mode="outlined"
          onChangeText={text => setLocation(text)}
        />
        <TextInput
          label="Date"
          onTouchStart={() => setOpenDatePicker(true)}
          value={visitorDate}
          mode="outlined"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: 16,
          }}>
          <TextInput
            style={styles.inputTimeField}
            label="Start Time"
            onTouchStart={() => setOpenStartTimePicker(true)}
            value={visitorStartTime}
            mode="outlined"
          />
          <TextInput
            style={styles.inputTimeField}
            label="End Time"
            onTouchStart={() => setOpenEndTimePicker(true)}
            value={visitorEndTime}
            mode="outlined"
          />
        </View>
        <DatePicker
          modal
          open={openDatePicker}
          mode="date"
          date={date}
          onConfirm={date => {
            setOpenDatePicker(false);
            setVisitorDate(date.toString());
          }}
          onCancel={() => {
            setOpenDatePicker(false);
          }}
        />
        <DatePicker
          modal
          open={openStartTimePicker}
          mode="time"
          date={date}
          onConfirm={date => {
            setOpenStartTimePicker(false);
            setVisitorStartTime(date.toString());
          }}
          onCancel={() => {
            setOpenStartTimePicker(false);
          }}
        />
        <DatePicker
          modal
          open={openEndTimePicker}
          mode="time"
          date={date}
          onConfirm={date => {
            setOpenEndTimePicker(false);
            setVisitorEndTime(date.toString());
          }}
          onCancel={() => {
            setOpenEndTimePicker(false);
          }}
        />
        <TextInput
          label="Whom to meet"
          value={toMeet}
          mode="outlined"
          onChangeText={text => setToMeet(text)}
        />
        <TextInput
          multiline
          style={{height: 80}}
          label="Purpose of visit"
          value={visitPurpose}
          mode="outlined"
          onChangeText={text => setVisitPurpose(text)}
        />
        <View style={SharedStyle.bottomPairBtnHolder}>
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
            labelStyle={SharedStyle.mPixBtnSecondaryLbl}>
            Book Parking
          </Button>
        </View>
      </View>
      <View style={SharedStyle.bottomPairBtnHolder}>
        <Button
          style={SharedStyle.mPixBtnSecondary}
          mode="contained"
          labelStyle={SharedStyle.mPixBtnSecondaryLbl}>
          Clear
        </Button>
        <Button
          style={SharedStyle.mPixBtnSecondary}
          mode="contained"
          labelStyle={SharedStyle.mPixBtnSecondaryLbl}>
          Submit
        </Button>
      </View>
      {selectServices && (
        <SelectServices handleClick={onButtonClick}></SelectServices>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  manageVisitorWrapper: {
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  inputTimeField: {
    width: '48%',
  },
});
