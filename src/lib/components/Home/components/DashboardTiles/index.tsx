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
    <View style={styles.tileWrapper}>
      <View style={{padding: 20}}>
        <Text style={styles.marketMeetHeader}>Marketing Meeting</Text>
        <Text style={styles.marketMeetCaption}>15:00 minutes remaining</Text>
        <View style={styles.marketMeetActionRow}>
          <SvgXml xml={IconLibrary.STOP} width="28px" height="28px" />
          <SvgXml xml={IconLibrary.ARROW} width="28px" height="28px" />
        </View>
      </View>
    </View>
  ) : (
    <TouchableHighlight
      style={styles.tileWrapper}
      underlayColor={'COLOR'}
      onPress={() => doNavigationCallback(props.navUrl)}>
      <View style={styles.tileBlock}>
        <SvgXml xml={props?.icon} width="40px" height="40px" />
        <Text style={styles.tileBlockText}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tileWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    width: '48%',
    height: '24%',
    borderColor: '#dcdcdc',
  },
  marketMeetHeader: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 6,
    color: '#3C5774',
  },
  marketMeetCaption: {fontSize: 10, marginBottom: 12, color: '#9B9B9B'},
  marketMeetActionRow: {
    flexDirection: 'row',
    gap: 18,
  },
  tileBlock: {
    alignItems: 'center',
    gap: 6,
  },
  tileBlockText: {
    fontSize: 12,
    color: '#3C5774',
  },
});
