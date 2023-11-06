import {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

const MPixCounter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const doCount = (flag: boolean) => {
    flag
      ? setCounterValue(counterValue + 1)
      : setCounterValue(counterValue - 1);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableHighlight onPress={() => doCount(false)}>
        <View
          style={{
            borderColor: '#c7cdd2',
            borderWidth: 1,
            paddingVertical: 4,
            paddingHorizontal: 8,
          }}>
          <Text>-</Text>
        </View>
      </TouchableHighlight>
      <View
        style={{
          borderColor: '#c7cdd2',
          borderWidth: 1,
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}>
        <Text>{counterValue}</Text>
      </View>
      <TouchableHighlight onPress={() => doCount(true)}>
        <View
          style={{
            borderColor: '#c7cdd2',
            borderWidth: 1,
            paddingVertical: 4,
            paddingHorizontal: 6,
          }}>
          <Text>+</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default MPixCounter;
