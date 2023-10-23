import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

type MPixButtonProps = {
  title: string;
  onPress: () => void;
  variant?: string;
};

const MPixButton = (props: MPixButtonProps) => {
  return (
    <Button style={styles.btn} mode="contained" onPress={props.onPress}>
      {props.title}
    </Button>
  );
};

export default MPixButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    paddingHorizontal: 12,
    marginTop: 12,
    borderRadius: 6,
    backgroundColor: '#1A8EF1',
    padding: 4,
  },
});
