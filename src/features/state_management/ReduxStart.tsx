import React, {useRef, useState} from 'react';
import {
  Button,
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

import {useGetPostQuery} from './api-service';

function Redux(): JSX.Element {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const entered = useRef('');

  const postId = useRef('');
  const [postID, setPostId] = useState(1);
  const {data, error, isLoading} = useGetPostQuery(postID);

  function onEntered() {
    const value = Number(entered.current);
    if (!Number.isNaN(value)) {
      dispatch(byAmount(value));
    }
  }

  function onGetPost() {
    setPostId(Number(postId.current));
  }

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
        <Text>RTK Query</Text>
        <TextInput
          placeholder="Post Id"
          onChangeText={text => (postId.current = text)}
          inputMode="numeric"
        />
        <Button title="Get Post" onPress={onGetPost} />
        {isLoading && <Text>Loading ..</Text>}
        {error && <Text>{error.toString()}</Text>}
        {data && <Text>{`${data.id}, ${data.title}`}</Text>}
      </View>
    </SafeAreaView>
  );
}

export default Redux;
