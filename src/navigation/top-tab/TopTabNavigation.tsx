import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import RnForm from '../../features/forms/RnForm';
import RnFormPickers from '../../features/forms/RnFormPickers';
import ReduxStart from '../../features/state_management/ReduxStart';
// import RtkQuery from '../../features/state_management/RtkQuery';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Tab 1"
      screenOptions={{tabBarInactiveTintColor: 'tomato'}}>
      <Tab.Screen
        name="Tab 1"
        component={RnForm}
        options={{title: 'RN Form'}}
      />
      <Tab.Screen name="Tab 2" component={RnFormPickers} options={{}} />
      <Tab.Screen name="Tab 3" component={ReduxStart} options={{}} />
      {/* <Tab.Screen name="Tab 4" component={RtkQuery} options={{}} /> */}
    </Tab.Navigator>
  );
}
