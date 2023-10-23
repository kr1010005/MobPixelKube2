import {StyleSheet, Text, View} from 'react-native';

export const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
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
