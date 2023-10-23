import {TouchableHighlight, View} from 'react-native';
import {BookingInfoTile} from '../../../../../shared-controls/booking-info-tile';
import {Navigation} from '../../../../../types';

type Nav = {
  navigation: Navigation;
};

export const InstantBookingListView = (nav: Nav) => {
  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };
  return (
    <View style={{padding: 12, display: 'flex', gap: 12}}>
      <TouchableHighlight onPress={() => redirect('InstantBookingForm')}>
        <BookingInfoTile />
      </TouchableHighlight>
      <BookingInfoTile />
    </View>
  );
};

export default InstantBookingListView;
