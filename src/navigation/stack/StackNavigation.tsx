import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavProp} from '../NavProp';

import RnForm from '../../features/forms/RnForm';
import RnFormPickers from '../../features/forms/RnFormPickers';
import ReduxStart from '../../features/state_management/ReduxStart';
import RtkQuery from '../../features/state_management/RtkQuery';
import Settings from '../../features/user_management/Settings';
import ReactNativePaper from '../../features/ui_library/ReactNativePaper';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="RNP"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        // headerShown: false,
      }}>
      <Stack.Screen
        name="RNP"
        component={ReactNativePaper}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RnForm"
        component={RnForm}
        options={{title: 'RN Form'}}
      />
      <Stack.Screen
        name="RnFormPickers"
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
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
