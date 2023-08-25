/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {Drawer} from 'react-native-paper';

import style from '../../utils/theme';

// const MusicRoute = () => <Text>Music</Text>;

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;

// const NotificationsRoute = () => <Text>Notifications</Text>;

function RnpDrawer(): JSX.Element {
  const [active, setActive] = React.useState('');
  return (
    <SafeAreaView
      style={[style.flex, {marginBottom: Platform.OS === 'ios' ? -35 : 0}]}>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <Drawer.CollapsedItem
        focusedIcon="inbox"
        unfocusedIcon="inbox-outline"
        label="Inbox"
        onPress={() =>
          setActive(prev => (prev === 'first' ? 'second' : 'first'))
        }
      />
      <Drawer.Item
        style={{backgroundColor: '#64ffda'}}
        icon="star"
        label="First Item"
      />
      <Drawer.Section title="Section title">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
}

export default RnpDrawer;
