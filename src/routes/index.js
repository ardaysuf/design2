import * as React from 'react';
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import StackRoutes from './StackRoutes';
import TabRoutes from './TabRoutes';

const App = () => {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
};

export default App;
