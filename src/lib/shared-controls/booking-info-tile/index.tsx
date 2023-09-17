import {Image, StyleSheet, Text, View} from 'react-native';

export const BookingInfoTile = () => {
  return (
    <View style={styles.tileBlock}>
      <Image
        style={{resizeMode: 'contain', width: 80, height: 80}}
        source={require('../../../assets/Image/tile_pic_one.png')}
      />
      <View>
        <Text style={{fontWeight: '600', fontSize: 16}}>
          Einstein - Meeting Room 1
        </Text>
        <Text style={{fontWeight: '300', fontSize: 12, marginTop: 4}}>
          2nd Floor, Smartcity, UK
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
          }}>
          <Image
            style={{resizeMode: 'contain', width: 14, height: 14}}
            source={require('../../../assets/Image/small-icons/003.png')}
          />
          <Text style={{fontWeight: '300', fontSize: 12, marginTop: 4}}>4</Text>
        </View>
        <View style={styles.badgeRow}>
          <Image
            style={{resizeMode: 'contain', width: 14, height: 14}}
            source={require('../../../assets/Image/small-icons/001.png')}
          />
          <Image
            style={{resizeMode: 'contain', width: 14, height: 14}}
            source={require('../../../assets/Image/small-icons/002.png')}
          />
          <Image
            style={{resizeMode: 'contain', width: 14, height: 14}}
            source={require('../../../assets/Image/small-icons/003.png')}
          />
          <Image
            style={{resizeMode: 'contain', width: 14, height: 14}}
            source={require('../../../assets/Image/small-icons/004.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tileBlock: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#c7cdd2',
    backgroundColor: '#ffffff',
    gap: 12,
  },
  badgeRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
});
