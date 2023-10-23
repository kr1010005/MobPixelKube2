import {StyleSheet, Text, View} from 'react-native';
import {MeetingDetailCard} from '../../../../shared-controls/meeting-detail-card';
import SharedStyle from '../../../shared-style';

export const BookServices = () => {
  return (
    <View
      style={[
        SharedStyle.mPixThemeBgWhite,
        {gap: 16, padding: 12, height: '100%'},
      ]}>
      <MeetingDetailCard />
      <MeetingDetailCard />
    </View>
  );
};
