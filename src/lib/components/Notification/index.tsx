import {useState} from 'react';
import {TouchableHighlight, View} from 'react-native';
import {bookServicesMock} from '../../mock';
import {MPixCardSmall} from '../../shared-controls/mpix-card/mpix-card-small';
import {MPixCardLargeProps, Navigation} from '../../types';
import NotificationDetails from './Details';

type Nav = {
  navigation: Navigation;
};

export const Notification = (nav: Nav) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };
  const openPopup = () => {
    setPopupVisible(true);
  };
  const onButtonClick = () => {
    console.log('SHASHI');
    setPopupVisible(false);
  };
  return (
    <>
      {!isPopupVisible && (
        <View style={{padding: 12, gap: 12}}>
          {bookServicesMock.map((obj: MPixCardLargeProps, index: number) => {
            return (
              <TouchableHighlight onPress={() => openPopup()} key={index}>
                <MPixCardSmall key={obj.id} {...obj} />
              </TouchableHighlight>
            );
          })}
        </View>
      )}
      {isPopupVisible && (
        <NotificationDetails handleClick={onButtonClick}></NotificationDetails>
      )}
    </>
  );
};
