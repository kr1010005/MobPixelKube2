import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../../../assets/icon';

type DashboardTilesProps = {
  title: string;
  navUrl: string;
  nav: (str: string) => void;
  icon: string;
  odd?: boolean;
};

export const DashboardTiles = (props: DashboardTilesProps) => {
  const doNavigationCallback = (screen: string) => {
    props.nav(screen);
  };

  return props.odd ? (
    <View style={styles.touchableContainer}>
      <View style={styles.marketMeetBlock}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '500',
            color: '#3C5774',
            marginBottom: 6,
          }}>
          Marketing Meeting
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: '#9B9B9B',
            marginBottom: 12,
          }}>
          15:00 minutes remaining
        </Text>
        <View style={styles.marketMeetActionRow}>
          <SvgXml xml={IconLibrary.STOP} width="28px" height="28px" />
          <SvgXml xml={IconLibrary.ARROW} width="28px" height="28px" />
        </View>
      </View>
    </View>
  ) : (
    <TouchableHighlight
      style={styles.touchableContainer}
      underlayColor={'COLOR'}
      onPress={() => doNavigationCallback(props.navUrl)}>
      <View style={styles.thumbBlock}>
        <SvgXml xml={props?.icon} width="40px" height="40px" />
        <Text style={styles.thumbBlockText}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    borderColor: '#dcdcdc',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    width: '48%',
    height: '24%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marketMeetActionRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
  },
  thumbBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  thumbBlockText: {
    fontSize: 12,
    color: '#3C5774',
  },
  marketMeetBlock: {
    padding: 20,
  },
});
