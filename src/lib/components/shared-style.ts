import {StyleSheet} from 'react-native';
const SharedStyle = StyleSheet.create({
  inputWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 12,
  },
  grayText: {
    color: '#2E445B',
  },
  mPixThemeBgBlue: {
    backgroundColor: '#1A8EF1',
  },
  mPixThemeBgWhite: {
    backgroundColor: '#FFFFFF',
  },
  rowCenterSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mPixCheckBoxWrapper: {
    borderWidth: 1,
    width: 36,
    height: 36,
    borderColor: '#c7cdd2',
  },
  mPixRadioBoxWrapper: {
    borderWidth: 1,
    width: 36,
    height: 36,
    borderRadius: 30,
    borderColor: '#44484c',
  },
  mPixBtnPrimary: {
    borderRadius: 6,
    padding: 4,
    backgroundColor: '#1A8EF1',
  },
  mPixBtnSecondary: {
    borderWidth: 1,
    borderRadius: 6,
    width: '50%',
    backgroundColor: '#ffffff',
    borderColor: '#1A8EF1',
  },
  mPixBtnSecondaryLbl: {
    color: '#1A8EF1',
    fontSize: 12,
  },
  bottomPairBtnHolder: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 18,
    gap: 16,
  },
});

export default SharedStyle;
