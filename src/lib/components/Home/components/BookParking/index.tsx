import {StyleSheet, View} from 'react-native';
import {bookServicesMock} from '../../../../mock';
import {MPixCardLarge} from '../../../../shared-controls/mpix-card/mpix-card-large';
import {MPixCardLargeProps} from '../../../../types';
import SharedStyle from '../../../shared-style';

export const BookParking = () => {
  return (
    <View style={[SharedStyle.mPixThemeBgWhite, styles.bookParkingWrapper]}>
      {bookServicesMock.map((obj: MPixCardLargeProps) => {
        return <MPixCardLarge key={obj.id} {...obj} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bookParkingWrapper: {
    gap: 16,
    padding: 12,
    height: '100%',
  },
});
