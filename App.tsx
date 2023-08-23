import 'react-native-gesture-handler';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/redux/store';

import StackNavigation from './src/navigation/stack/StackNavigation';
// import BottomTabNavigation from './src/navigation/tab/BottomTabNavigation';
// import DrawerNavigation from './src/navigation/drawer/DrawerNavigation';
// import TopTabNavigation from './src/navigation/top-tab/TopTabNavigation';

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StackNavigation />
        {/* <BottomTabNavigation /> */}
        {/* <DrawerNavigation /> */}
        {/* <TopTabNavigation /> */}
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default App;
