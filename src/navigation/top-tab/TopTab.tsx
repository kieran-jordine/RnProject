/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  useWindowDimensions,
} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';

import style from '../../utils/theme';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function TopTab(): JSX.Element {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'First', focusedIcon: 'bell'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <SafeAreaView style={[style.flex]}>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        tabBarPosition="top"
      />
    </SafeAreaView>
  );
}

export default TopTab;
