import 'react-native-gesture-handler';

import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {
  NavigationContainer,
  DefaultTheme as NavLightTheme,
  DarkTheme as NavDarkTheme,
} from '@react-navigation/native';
import {PaperProvider, adaptNavigationTheme} from 'react-native-paper';

import {store} from './src/redux/store';
import {lightTheme, darkTheme} from './src/utils/paper-theme';

import StackNavigation from './src/navigation/stack/StackNavigation';

// import BottomTabNavigation from './src/navigation/tab/BottomTabNavigation';
// import MaterialBottomTab from './src/navigation/react-native-paper/MaterialBottomTab';
// import MaterialBottomTabNavigation from './src/navigation/react-native-paper/MaterialBottomTabNavigation';

// import DrawerNavigation from './src/navigation/drawer/DrawerNavigation';
// import RnpDrawer from './src/navigation/react-native-paper/RnpDrawer';

// import TopTabNavigation from './src/navigation/top-tab/TopTabNavigation';
// import TopTab from './src/navigation/top-tab/TopTab';

function App(): JSX.Element {
  const scheme = useColorScheme();
  const paperTheme = scheme === 'dark' ? darkTheme : lightTheme;
  const {LightTheme, DarkTheme} = adaptNavigationTheme({
    reactNavigationLight: NavLightTheme,
    reactNavigationDark: NavDarkTheme,
  });
  const navTheme = scheme === 'dark' ? DarkTheme : LightTheme;
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={navTheme}>
          <StackNavigation />
          {/* <BottomTabNavigation /> */}
          {/* <MaterialBottomTab /> */}
          {/* <MaterialBottomTabNavigation /> */}
          {/* <DrawerNavigation /> */}
          {/* <RnpDrawer /> */}
          {/* <TopTabNavigation /> */}
          {/* <TopTab /> */}
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}

export default App;
