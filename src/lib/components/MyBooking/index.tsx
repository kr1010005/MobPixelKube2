import {StyleSheet, Text, View} from 'react-native';

export const MyBooking = () => {
  return (
    <View style={styles.container}>
      <Text>My Booking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
