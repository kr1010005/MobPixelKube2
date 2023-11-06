import {TouchableHighlight, View} from 'react-native';
import {MPixCardLargeProps, Navigation} from '../../../../../types';
import {bookServicesMock} from '../../../../../mock';
import {MPixCardLarge} from '../../../../../shared-controls/mpix-card/mpix-card-large';

type Nav = {
  navigation: Navigation;
};

export const InstantBookingListView = (nav: Nav) => {
  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };
  return (
    <View style={{padding: 12, gap: 12}}>
      {bookServicesMock.map((obj: MPixCardLargeProps) => {
        return (
          <TouchableHighlight onPress={() => redirect('InstantBookingForm')}>
            <MPixCardLarge key={obj.id} {...obj} />
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

export default InstantBookingListView;
