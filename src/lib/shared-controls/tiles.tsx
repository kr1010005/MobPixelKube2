import {Text, View} from 'react-native';

type TileButtonProps = {
  title: string;
  icon?: string;
};

export const TileButton = (props: TileButtonProps) => {
  return (
    <View
      style={{
        borderColor: '#c7cdd2',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6,
      }}>
      <Text>{}</Text>
    </View>
  );
};
