import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavProp} from '../NavProp';

import RnForm from '../../features/forms/RnForm';
import RnFormPickers from '../../features/forms/RnFormPickers';
import ReduxStart from '../../features/state_management/ReduxStart';
import RtkQuery from '../../features/state_management/RtkQuery';
// import Settings from '../../features/user_management/Settings';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Tab 1"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Tab 1"
        component={RnForm}
        options={{title: 'RN Form'}}
      />
      <Drawer.Screen
        name="Tab 2"
        component={RnFormPickers}
        options={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="Tab 3"
        component={StackScreen}
        options={({route}: NavProp) => ({
          title: route.params?.name,
          tabBarActiveTintColor: 'tomato',
          tabBarBadge: 'badge',
          tabBarShowLabel: true,
        })}
      />
    </Drawer.Navigator>
  );
}

// function tabBarIcon(focused: boolean, color: string, size: number) {
//   const name = focused ? 'shuffle' : 'shuffle-outline';
//   return <Ionicons name={name} color={color} size={size} />;
// }

function StackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ReduxStart"
        component={ReduxStart}
        options={({route}: NavProp) => ({
          title: route.params?.name,
        })}
      />
      <Stack.Screen
        name="RtkQuery"
        component={RtkQuery}
        initialParams={{postId: 19}}
      />
    </Stack.Navigator>
  );
}
