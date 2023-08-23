import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavProp} from '../NavProp';

import RnForm from '../../features/forms/RnForm';
import RnFormPickers from '../../features/forms/RnFormPickers';
import ReduxStart from '../../features/state_management/ReduxStart';
import RtkQuery from '../../features/state_management/RtkQuery';
// import Settings from '../../features/user_management/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Tab 1"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Tab 1"
        component={RnForm}
        options={{title: 'RN Form'}}
      />
      <Tab.Screen
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
      <Tab.Screen
        name="Tab 3"
        component={StackScreen}
        options={({route}: NavProp) => ({
          title: route.params?.name,
          tabBarIcon: ({focused, color, size}) =>
            tabBarIcon(focused, color, size),
          tabBarActiveTintColor: 'tomato',
          tabBarBadge: 'badge',
          tabBarShowLabel: true,
        })}
      />
    </Tab.Navigator>
  );
}

function tabBarIcon(focused: boolean, color: string, size: number) {
  const name = focused ? 'shuffle' : 'shuffle-outline';
  return <Ionicons name={name} color={color} size={size} />;
}

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
