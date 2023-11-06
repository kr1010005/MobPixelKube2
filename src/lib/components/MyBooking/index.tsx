import {useState} from 'react';
import {TouchableHighlight, View} from 'react-native';
import {bookServicesMock, mockDataOne} from '../../mock';
import {MPixCardLarge} from '../../shared-controls/mpix-card/mpix-card-large';
import {MPixThickHeader} from '../../shared-controls/mpix-card/mpix-thick-banner';
import {MPixCardLargeProps, Navigation} from '../../types';

type Nav = {
  navigation: Navigation;
};

export const MyBooking = (nav: Nav) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const redirect = (str: string) => {
    nav?.navigation?.navigate(str);
  };
  const openPopup = () => {
    setPopupVisible(true);
  };
  const doSomething = () => {
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
                <MPixCardLarge key={obj.id} {...obj} />
              </TouchableHighlight>
            );
          })}
        </View>
      )}
      {isPopupVisible && (
        <View>
          <MPixThickHeader
            {...mockDataOne}
            handleClick={() => doSomething()}
            headerPriority={true}
          />
        </View>
      )}
    </>
  );
};
