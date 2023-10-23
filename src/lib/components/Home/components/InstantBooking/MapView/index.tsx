import {Image, View} from 'react-native';

export const InstantBookingMapView = () => {
  return (
    <View>
      <Image
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: 1,
          alignSelf: 'center',
        }}
        resizeMode="contain"
        source={require('../../../../../../assets/Image/ein_map.png')}
      />
    </View>
  );
};

export default InstantBookingMapView;
