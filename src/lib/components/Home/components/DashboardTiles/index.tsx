import {Text, TouchableHighlight, View} from 'react-native';
import {Navigation} from '../../../../types';

type DashboardTilesProps = {
  title: string;
  navUrl: string;
  nav: (str: string) => void;
  icon?: string;
};

export const DashboardTiles = (props: DashboardTilesProps) => {
  const doNavigationCallback = (screen: string) => {
    props.nav(screen);
  };

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
      onPress={() => doNavigationCallback(props.navUrl)}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};
