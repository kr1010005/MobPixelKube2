import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  useWindowDimensions,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button, Text, TextInput} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {BookingInfoTile} from '../../../../shared-controls/booking-info-tile';
import {Navigation} from '../../../../types';

type Nav = {
  navigation: Navigation;
};

export const InstantBooking = (nav: Nav) => {
  const [showSpaceDropDown, setShowSpaceDropDown] = useState(false);
  const [showFloorDropDown, setShowFloorDropDown] = useState(false);
  const [room, setRoom] = useState('');
  const [floor, setFloor] = useState('');

  const [bottomPanel, setBottomPanel] = useState(false);
  const layout = useWindowDimensions();

  const [date, setDate] = useState(new Date());
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [openEndDatePicker, setOpenEndDatePicker] = useState(false);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'List View'},
    {key: 'second', title: 'Map View'},
  ]);

  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };

  useEffect(() => {
    // do something
    console.log('Test');
  }, [nav]);

  const meetingRoom = [
    {
      label: 'Einstein - Meeting Room',
      value: '001',
    },
    {
      label: 'Einstein - Conference Room',
      value: '002',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ];

  const floors = [
    {
      label: '1',
      value: '001',
    },
    {
      label: '2',
      value: '002',
    },
    {
      label: '3',
      value: '003',
    },
  ];

  const FirstRoute = () => (
    <View style={{padding: 12, display: 'flex', gap: 12}}>
      <TouchableHighlight onPress={() => redirect('InstantBookingForm')}>
        <BookingInfoTile />
      </TouchableHighlight>
      <BookingInfoTile />
    </View>
  );
  const SecondRoute = () => (
    <View>
      <Image
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: 1,
          alignSelf: 'center',
        }}
        resizeMode="contain"
        source={require('../../../../../assets/Image/ein_map.png')}
      />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={{backgroundColor: 'white'}}
      renderLabel={({focused, route}) => {
        return (
          <View>
            <Text style={focused ? styles.activeTabColor : null}>
              {route.title}
            </Text>
          </View>
        );
      }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        {!bottomPanel && (
          <DropDown
            label="Select Space"
            mode={'outlined'}
            visible={showSpaceDropDown}
            showDropDown={() => setShowSpaceDropDown(true)}
            onDismiss={() => setShowSpaceDropDown(false)}
            value={room}
            setValue={setRoom}
            list={meetingRoom}
          />
        )}
        <View style={styles.inputWrapper}>
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
        {bottomPanel && (
          <DropDown
            label={'Floor'}
            mode={'outlined'}
            visible={showFloorDropDown}
            showDropDown={() => setShowFloorDropDown(true)}
            onDismiss={() => setShowFloorDropDown(false)}
            value={floor}
            setValue={setFloor}
            list={floors}
          />
        )}
      </View>
      {!bottomPanel && (
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => setBottomPanel(true)}>
            Find Space
          </Button>
        </View>
      )}
      {bottomPanel && (
        <View style={styles.bottomPanelStyle}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
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
    height: '100%',
  },
  containerTop: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
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
  btn: {
    width: '100%',
    paddingHorizontal: 12,
    marginTop: 12,
    borderRadius: 6,
    backgroundColor: '#2C95EE',
    padding: 4,
  },
  btnContainer: {
    padding: 12,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomPanelStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60%',
  },
  tabBarLabel: {
    color: 'black',
  },
  indicatorStyle: {
    backgroundColor: '#2b9cd8',
  },
  activeTabColor: {
    color: '#0272b6',
  },
});
