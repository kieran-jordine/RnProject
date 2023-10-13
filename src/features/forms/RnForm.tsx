import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Modal,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import useRnForm from './RnFormLogic';
import style from '../../utils/theme';
import {NavProp} from '../../navigation/NavProp';
import MaterialIcon from '../../components/MaterialIcon';

function RnForm({navigation}: NavProp): JSX.Element {
  const {
    state,
    dispatch,
    textValue,
    loading,
    doLoading,
    showModal,
    toggleModal,
  } = useRnForm();

  function switchChange(value: boolean) {
    dispatch({type: 'two', payload: value});
  }

  function textChange(text: string): void {
    textValue.current = text;
  }

  function addToList(): void {
    const text = textValue.current;
    if (text) {
      textValue.current = '';
      dispatch({type: 'three', payload: text});
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <View style={style.container}>
        <Text style={style.headlineText}>A form with elements</Text>
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
        <ActivityIndicator style={style.mv8} />
        <Button
          onPress={() => dispatch({type: 'one', payload: textValue.current})}
          title="Form Data"
        />
        <Text>{state.textValue}</Text>

        <Button title="Modal" onPress={() => toggleModal()} />
        <Modal
          visible={showModal}
          animationType="slide"
          transparent={true}
          statusBarTranslucent={true}>
          <View style={style.modalUnderlay}>
            <View style={style.modalBody}>
              <View style={style.modalTitleRow}>
                <Text style={style.modalTitleText}>Modal Title</Text>
                <MaterialIcon
                  name="close"
                  style={style.modalCloseIcon}
                  onPress={() => toggleModal()}
                />
              </View>
              <ScrollView>
                <Text>Modal Content</Text>
                {[1, 2, 3, 4].map(i => (
                  <Text key={i}>{i.toString()}</Text>
                ))}
                <Button title="Hide Modal" onPress={() => toggleModal()} />
              </ScrollView>
            </View>
          </View>
        </Modal>

        <View style={style.divider} />
        <Button
          title="Alert"
          onPress={() => {
            Alert.alert('Alert Title', 'Alert Messge', [
              {
                text: 'Button 1',
                style: 'cancel',
              },
              {
                text: 'Button 2',
                style: 'default',
              },
              {
                text: 'Button 3',
                style: 'destructive',
              },
            ]);
          }}
        />

        <View style={style.divider} />
        <Button
          onPress={() => navigation.navigate('RnFormPickers')}
          title="Form Pickers"
        />
        <View style={style.divider} />
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="Settings"
        />
      </View>
    </SafeAreaView>
  );
}

export default RnForm;
