/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';

import style from '../../utils/theme';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const renderScene = BottomNavigation.SceneMap({
  music: MusicRoute,
  albums: AlbumsRoute,
  recents: RecentsRoute,
  notifications: NotificationsRoute,
});

function MaterialBottomTab(): JSX.Element {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'music',
      title: 'Favorites',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {key: 'albums', title: 'Albums', focusedIcon: 'album'},
    {key: 'recents', title: 'Recents', focusedIcon: 'history'},
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  return (
    <SafeAreaView
      style={[style.flex, {marginBottom: Platform.OS === 'ios' ? -35 : 0}]}>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaView>
  );
}

export default MaterialBottomTab;
