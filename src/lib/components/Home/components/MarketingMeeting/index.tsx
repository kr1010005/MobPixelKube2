import {TouchableHighlight} from 'react-native';
import {Text, View} from 'react-native';

type MarketingMeetingProps = {
  title: string;
};

export const MarketingMeeting = (props: MarketingMeetingProps) => {
  return (
    <TouchableHighlight
      style={{
        borderColor: '#c7cdd2',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6,
        width: '48%',
        minWidth: '48%',
        height: 70,
        alignItems: 'center',
      }}
      underlayColor={'COLOR'}
      onPress={() => console.log('Market Meeting')}>
      <View>
        <Text>{props.title}</Text>
        <Text>Minutes Remaining</Text>
      </View>
    </TouchableHighlight>
  );
};
