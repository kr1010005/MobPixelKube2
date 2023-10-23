import React, {useEffect, useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Text, TextInput} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {MOCK_DATA} from '../../../../mock';
import MPixButton from '../../../../shared-controls/mpix-button';
import {Navigation} from '../../../../types';
import SharedStyle from '../../../shared-style';
import InstantBookingListView from './ListView';
import InstantBookingMapView from './MapView';

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

  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [openEndDatePicker, setOpenEndDatePicker] = useState(false);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'listView', title: 'List View'},
    {key: 'mapView', title: 'Map View'},
  ]);

  const date = new Date();

  useEffect(() => {
    console.log('Navigation Switched');
  }, [nav]);

  const renderListView = () => (
    <InstantBookingListView navigation={nav.navigation} />
  );
  const renderMapView = () => <InstantBookingMapView />;

  const renderScene = SceneMap({
    listView: renderListView,
    mapView: renderMapView,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={SharedStyle.mPixThemeBgWhite}
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
            list={MOCK_DATA.meetingRoom}
          />
        )}
        <View style={[SharedStyle.inputWrapper]}>
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
            list={MOCK_DATA.floors}
          />
        )}
      </View>
      {!bottomPanel && (
        <View style={styles.btnContainer}>
          <MPixButton
            title="Find Space"
            onPress={() => setBottomPanel(true)}></MPixButton>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  containerTop: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
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
