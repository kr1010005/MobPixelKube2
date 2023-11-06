import React from 'react';
import {View} from 'react-native';
import {bookServicesMock} from '../../../../mock';
import {MPixCardLarge} from '../../../../shared-controls/mpix-card/mpix-card-large';
import {MPixCardLargeProps} from '../../../../types';
import SharedStyle from '../../../shared-style';

export const BookServices = () => {
  return (
    <View
      style={[
        SharedStyle.mPixThemeBgWhite,
        {gap: 10, padding: 28, height: '100%'},
      ]}>
      {bookServicesMock.map((obj: MPixCardLargeProps) => {
        return <MPixCardLarge key={obj.id} {...obj} />;
      })}
    </View>
  );
};
