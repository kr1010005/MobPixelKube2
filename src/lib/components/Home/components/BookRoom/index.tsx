import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import {MOCK_DATA} from '../../../../mock';
import SharedStyle from '../../../shared-style';

export const BookRoom = () => {
  const [checked, setChecked] = useState(true);
  const [showSpaceDropDown, setShowSpaceDropDown] = useState(false);
  const [room, setRoom] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [openEndDatePicker, setOpenEndDatePicker] = useState(false);
  const date = new Date();

  return (
    <View style={[SharedStyle.mPixThemeBgWhite, {height: '100%'}]}>
      <View style={{padding: 12, flex: 1}}>
        <View style={[SharedStyle.rowCenterSpaceBetween, {gap: 36}]}>
          <View style={[SharedStyle.rowCenterSpaceBetween, {gap: 12}]}>
            <View style={SharedStyle.mPixCheckBoxWrapper}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <Text>All Day</Text>
          </View>
          <View style={{flex: 1}}>
            <DropDown
              label="Doesn't Repeat"
              mode={'outlined'}
              visible={showSpaceDropDown}
              showDropDown={() => setShowSpaceDropDown(true)}
              onDismiss={() => setShowSpaceDropDown(false)}
              value={room}
              setValue={setRoom}
              list={MOCK_DATA.repeatOptions}
            />
          </View>
        </View>
        <View style={[SharedStyle.inputWrapper, {marginTop: 12}]}>
          <TextInput
            label="Start Date & Start Time"
            onTouchStart={() => setOpenStartDatePicker(true)}
            value={startDateTime}
            mode="outlined"
          />
          <TextInput
            label="End Date & End Time"
            onTouchStart={() => setOpenEndDatePicker(true)}
            value={endDateTime}
            mode="outlined"
          />
        </View>
        <DatePicker
          modal
          open={openStartDatePicker}
          date={date}
          onConfirm={date => {
            setOpenStartDatePicker(false);
            setStartDateTime(date.toString());
          }}
          onCancel={() => {
            setOpenStartDatePicker(false);
          }}
        />
        <DatePicker
          modal
          open={openEndDatePicker}
          date={date}
          onConfirm={date => {
            setOpenEndDatePicker(false);
            setEndDateTime(date.toString());
          }}
          onCancel={() => {
            setOpenEndDatePicker(false);
          }}
        />
        <View style={{gap: 12, marginTop: 12}}>
          <DropDown
            label="Location"
            mode={'outlined'}
            visible={showSpaceDropDown}
            showDropDown={() => setShowSpaceDropDown(true)}
            onDismiss={() => setShowSpaceDropDown(false)}
            value={room}
            setValue={setRoom}
            list={MOCK_DATA.repeatOptions}
          />
          <DropDown
            label="Building"
            mode={'outlined'}
            visible={showSpaceDropDown}
            showDropDown={() => setShowSpaceDropDown(true)}
            onDismiss={() => setShowSpaceDropDown(false)}
            value={room}
            setValue={setRoom}
            list={MOCK_DATA.repeatOptions}
          />
          <DropDown
            label="Floor"
            mode={'outlined'}
            visible={showSpaceDropDown}
            showDropDown={() => setShowSpaceDropDown(true)}
            onDismiss={() => setShowSpaceDropDown(false)}
            value={room}
            setValue={setRoom}
            list={MOCK_DATA.repeatOptions}
          />
          <DropDown
            label="No. of attendees"
            mode={'outlined'}
            visible={showSpaceDropDown}
            showDropDown={() => setShowSpaceDropDown(true)}
            onDismiss={() => setShowSpaceDropDown(false)}
            value={room}
            setValue={setRoom}
            list={MOCK_DATA.repeatOptions}
          />
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
    </View>
  );
};
