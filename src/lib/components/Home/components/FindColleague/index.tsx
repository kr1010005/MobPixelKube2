import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button, TextInput} from 'react-native-paper';
import SharedStyle from '../../../shared-style';

export const FindColleague = () => {
  const [findColleague, setFindColleague] = useState('');
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [visitorDate, setVisitorDate] = useState('');
  const date = new Date();
  return (
    <View style={[styles.findColleagueWrapper, SharedStyle.mPixThemeBgWhite]}>
      <View style={[SharedStyle.inputWrapper]}>
        <TextInput
          label="Find Colleague"
          value={findColleague}
          mode="outlined"
          onChangeText={text => setFindColleague(text)}
        />
        <TextInput
          label="Date"
          onTouchStart={() => setOpenDatePicker(true)}
          value={visitorDate}
          mode="outlined"
        />
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
          Search
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  findColleagueWrapper: {
    padding: 12,
    flex: 1,
    justifyContent: 'space-between',
  },
});
