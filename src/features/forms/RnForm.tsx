import React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import useRnForm from './RnFormLogic';
import style from '../../utils/theme';
import {NavProp} from '../../navigation/NavProp';

function RnForm({navigation}: NavProp): JSX.Element {
  const {state, dispatch, textValue, loading, doLoading} = useRnForm();

  function switchChange(value: boolean) {
    dispatch({type: 'two', payload: value});
  }

  function textChange(text: string): void {
    textValue.current = text;
  }

  function addToList(): void {
    const text = textValue.current;
    if (text) {
      dispatch({type: 'three', payload: text});
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <View style={style.container}>
        <Text style={style.headlineText}>A form with some elements</Text>
        <TextInput
          style={style.textInput}
          placeholder="Placeholder"
          onChangeText={textChange}
          onSubmitEditing={addToList}
        />
        <FlatList
          data={state.listValue}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item, index) => `${item}${index}`}
          ListEmptyComponent={<Text>Empty List</Text>}
          ListHeaderComponent={<Text>List Header</Text>}
          ListHeaderComponentStyle={style.listHeaderFooter}
          ListFooterComponent={<Text>List Footer</Text>}
          ListFooterComponentStyle={style.listHeaderFooter}
          // onRefresh={doLoading}
          // refreshing={loading}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={doLoading} />
          }
        />
        <Switch value={state.booleanValue} onValueChange={switchChange} />
        <Text>{state.updatedAt}</Text>
        <ActivityIndicator size="large" style={style.activityIndicator} />
        <Button
          onPress={() => dispatch({type: 'one', payload: textValue.current})}
          title="Form Data"
        />
        <Text>{state.textValue}</Text>
        <Button
          onPress={() => navigation.navigate('RnFormPickers')}
          title="Form Pickers"
        />
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="Settings"
        />
      </View>
    </SafeAreaView>
  );
}

export default RnForm;
