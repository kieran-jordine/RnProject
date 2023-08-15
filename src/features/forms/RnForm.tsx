import React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import useRnForm from './RnFormLogic';

function RnForm(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

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
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        hidden={false}
        animated
        backgroundColor={'blue'}
        showHideTransition={'slide'}
      />
      <View style={styles.container}>
        <Text style={styles.headlineText}>A form with some elements</Text>
        <TextInput
          style={styles.textInput}
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
          ListHeaderComponentStyle={styles.listHeaderFooter}
          ListFooterComponent={<Text>List Footer</Text>}
          ListFooterComponentStyle={styles.listHeaderFooter}
          // onRefresh={doLoading}
          // refreshing={loading}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={doLoading} />
          }
        />
        <Switch value={state.booleanValue} onValueChange={switchChange} />
        <Text>{state.updatedAt}</Text>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
        <Button
          onPress={() => dispatch({type: 'one', payload: textValue.current})}
          title="Form Data"
        />
        <Text>{state.textValue}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  headlineText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 8,
  },
  activityIndicator: {
    marginVertical: 8,
    display: 'none',
  },
  listHeaderFooter: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
});

export default RnForm;
