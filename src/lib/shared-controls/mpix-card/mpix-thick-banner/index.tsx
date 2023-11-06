import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import SharedStyle from '../../../components/shared-style';
import {SvgXml} from 'react-native-svg';
import {IconLibrary} from '../../../../assets/icon';
import renderFacilities from '../../../services';
import {MPixThickHeaderProps} from '../../../types';

export const MPixThickHeader = (props: MPixThickHeaderProps) => {
  return (
    <View style={[SharedStyle.mPixThemeBgBlue, {padding: 12}]}>
      <View
        style={{
          position: 'absolute',
          right: 2,
        }}>
        <TouchableHighlight
          onPress={() => props.handleClick(false)}
          style={{
            height: 24,
            width: 24,
          }}>
          <SvgXml style={styles.trayPanelClose} xml={IconLibrary.CLOSE_WHITE} />
        </TouchableHighlight>
      </View>
      {props.headerPriority && (
        <>
          <View
            style={[
              {
                borderBottomColor: '#c7cdd2',
                borderBottomWidth: 1,
                marginTop: 24,
              },
            ]}>
            <Text
              style={[styles.mPixCardTitle, {color: '#ffffff', fontSize: 20}]}>
              Annual Audit Meeting xx
            </Text>
            <View
              style={[
                styles.mPixCardBlock,
                {
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                <SvgXml
                  xml={IconLibrary.CALENDAR_WHITE}
                  width="12px"
                  height="12px"
                />
                <Text
                  style={[
                    styles.mPixCardTitle,
                    {color: '#ffffff', fontSize: 14},
                  ]}>
                  Aug 10, 2022
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                <SvgXml
                  xml={IconLibrary.TIMER_WHITE}
                  width="12px"
                  height="12px"
                />
                <Text
                  style={[
                    styles.mPixCardTitle,
                    {color: '#ffffff', fontSize: 14},
                  ]}>
                  10:00 AM - 1:00 PM
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.mPixCardBlock]}>
            {props.thumbImage && (
              <Image
                style={styles.mPixCardThumbImage}
                source={props.thumbImage}
              />
            )}
            <View>
              <Text style={[styles.mPixCardTitle, {color: '#ffffff'}]}>
                {props.title}
              </Text>
              <View style={styles.badgeRow}>
                {props.facilities.map((item: string, index: number) => {
                  return (
                    <SvgXml
                      key={index}
                      xml={renderFacilities(item, 'white') ?? ''}
                      width="12px"
                      height="12px"
                    />
                  );
                })}
              </View>
            </View>
          </View>
        </>
      )}
      {!props.headerPriority && (
        <>
          <View
            style={[
              styles.mPixCardBlock,
              {
                marginTop: 20,
                borderBottomColor: '#c7cdd2',
                borderBottomWidth: 1,
              },
            ]}>
            {props.thumbImage && (
              <Image
                style={styles.mPixCardThumbImage}
                source={props.thumbImage}
              />
            )}
            <View>
              <Text style={[styles.mPixCardTitle, {color: '#ffffff'}]}>
                {props.title}
              </Text>
              <View style={styles.badgeRow}>
                {props.facilities.map((item: string, index: number) => {
                  return (
                    <SvgXml
                      key={index}
                      xml={renderFacilities(item, 'white') ?? ''}
                      width="12px"
                      height="12px"
                    />
                  );
                })}
              </View>
            </View>
          </View>

          <View
            style={[
              styles.mPixCardBlock,
              {
                borderBottomColor: '#c7cdd2',
                borderBottomWidth: 1,
                justifyContent: 'space-between',
              },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <SvgXml
                xml={IconLibrary.BLUE_LOCATION_WHITE}
                width="12px"
                height="12px"
              />
              <Text
                style={[
                  styles.mPixCardTitle,
                  {color: '#ffffff', fontSize: 14},
                ]}>
                2nd Floor, Smartcity, UK
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <SvgXml
                xml={IconLibrary.USERS_WHITE}
                width="12px"
                height="12px"
              />
              <Text
                style={[
                  styles.mPixCardTitle,
                  {color: '#ffffff', fontSize: 14},
                ]}>
                4
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.mPixCardBlock,
              {
                justifyContent: 'space-between',
              },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <SvgXml
                xml={IconLibrary.CALENDAR_WHITE}
                width="12px"
                height="12px"
              />
              <Text
                style={[
                  styles.mPixCardTitle,
                  {color: '#ffffff', fontSize: 14},
                ]}>
                Aug 10, 2022
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <SvgXml
                xml={IconLibrary.TIMER_WHITE}
                width="12px"
                height="12px"
              />
              <Text
                style={[
                  styles.mPixCardTitle,
                  {color: '#ffffff', fontSize: 14},
                ]}>
                10:00 AM - 1:00 PM
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mPixCardBlock: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
    width: '100%',
  },
  mPixCardThumbImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  mPixCardTitle: {fontWeight: '600', fontSize: 16},
  badgeRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 12,
  },
  trayPanelClose: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
});
