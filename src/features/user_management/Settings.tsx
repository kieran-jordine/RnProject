import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import style from '../../utils/theme';

function Settings(): JSX.Element {
  return (
    <SafeAreaView style={style.flex}>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <View style={[style.container, style.center, style.flex]}>
        <Text style={style.headlineText}>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default Settings;
