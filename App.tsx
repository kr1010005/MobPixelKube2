/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PaperProvider} from 'react-native-paper';

import {Main} from './src/lib/components';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}

export default App;
