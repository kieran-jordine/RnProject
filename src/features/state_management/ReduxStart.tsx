import React, {useRef} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

import style from '../../utils/theme';

import {increment, decrement, byAmount} from './counter-slice';
import {useSelector, useDispatch} from 'react-redux';
import type {RootState} from '../../redux/store';

function ReduxStart({navigation}: {navigation: any}): JSX.Element {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const entered = useRef('');

  function onEntered() {
    const value = Number(entered.current);
    if (!Number.isNaN(value)) {
      dispatch(byAmount(value));
    }
  }

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => headerRight(() => dispatch(increment())),
    });
  }, [dispatch, navigation]);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={style.container}>
        <Text style={style.headlineText}>Redux - State Management</Text>
        <Text style={style.headlineText}>{count}</Text>
        <View style={style.row}>
          <Button title="Increment" onPress={() => dispatch(increment())} />
          <Button title="Decrement" onPress={() => dispatch(decrement())} />
          <View>
            <TextInput
              placeholder="Enter Value"
              onChangeText={text => (entered.current = text)}
              inputMode="numeric"
            />
            <Button title="By Amount" onPress={onEntered} />
          </View>
        </View>
        <View style={style.divider} />
        <Text style={style.headlineText}>Entity Adapter</Text>
        <View style={style.divider} />
        <Button onPress={() => navigation.popToTop()} title="Home" />
        <Button
          onPress={() => navigation.navigate('RtkQuery', {postId: 3})}
          title="RtkQuery"
        />
      </View>
    </SafeAreaView>
  );
}

function headerRight(onPress: () => void): JSX.Element {
  return (
    <Button
      onPress={onPress}
      title="More"
      color={Platform.OS === 'android' ? 'red' : '#fff'}
    />
  );
}

export default ReduxStart;
