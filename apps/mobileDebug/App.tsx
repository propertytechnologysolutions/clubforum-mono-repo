import React from 'react';

import {UIButton} from '@ui/native';

import {NativeContainer, NativeNavigation} from '@core/navigation';
import {navigationRoutes} from './src/routes';

const App = () => {
  return (
    <NativeContainer>
      <NativeNavigation routes={navigationRoutes} />
      <UIButton onPress={() => console.log('object')} />
    </NativeContainer>
  );
};

export default App;
