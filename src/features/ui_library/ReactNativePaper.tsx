/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  Dialog,
  Divider,
  IconButton,
  MD2Colors,
  MD3Colors,
  Portal,
  ProgressBar,
  RadioButton,
  SegmentedButtons,
  Switch,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';

import style from '../../utils/theme';

function ReactNativePaper(): JSX.Element {
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [text, setText] = React.useState('');
  const theme = useTheme();

  return (
    <SafeAreaView style={[style.flex]}>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <Appbar.Header style={{backgroundColor: theme.colors.secondary}}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView>
        <View style={style.row}>
          <ActivityIndicator />
          <ActivityIndicator color={MD2Colors.cyan800} size={36} />
        </View>
        <Divider />
        <View style={style.row}>
          <Avatar.Icon size={36} icon="folder" />
          <Avatar.Text size={48} label="KJ" />
          <Badge>7</Badge>
          <Chip icon="information">Info</Chip>
        </View>
        <Divider />
        <View style={style.row}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Press me
          </Button>
          <Button
            icon="camera"
            mode="contained-tonal"
            onPress={() => console.log('Pressed')}
            loading>
            Press me
          </Button>
          <Button
            icon="account"
            mode="elevated"
            onPress={() => console.log('Pressed')}
            contentStyle={{flexDirection: 'row-reverse'}}>
            Press me
          </Button>
        </View>
        <Divider />
        <View style={style.row}>
          <Checkbox status={'checked'} onPress={() => {}} />
          <Checkbox.Item
            label="Item"
            status="checked"
            labelVariant="headlineSmall"
          />
          <Checkbox.Android status="checked" />
          <Checkbox.IOS status="checked" />
        </View>
        <Divider bold />
        <View style={style.row}>
          <RadioButton
            value="first"
            status={'checked'}
            // onPress={() => setChecked('first')}
          />
          <RadioButton
            value="second"
            status={'checked'}
            // onPress={() => setChecked('second')}
          />
        </View>
        <View>
          <Button onPress={() => setDialogVisible(prev => !prev)}>
            Show Dialog
          </Button>
          <Portal>
            <Dialog
              visible={dialogVisible}
              onDismiss={() => setDialogVisible(prev => !prev)}>
              <Dialog.Icon icon="alert" />
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">This is simple dialog</Text>
              </Dialog.Content>
              <Dialog.ScrollArea>
                <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
                  <Text>This is a scrollable area</Text>
                </ScrollView>
              </Dialog.ScrollArea>
              <Dialog.Actions>
                <Button onPress={() => setDialogVisible(prev => !prev)}>
                  Ok
                </Button>
                <Button onPress={() => setDialogVisible(prev => !prev)}>
                  Cancel
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
        <Divider />
        <ProgressBar progress={0.5} color={MD3Colors.error50} />
        <Divider />
        <Switch value={isSwitchOn} onValueChange={v => setIsSwitchOn(v)} />
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {value: 'walk', label: 'Walking', showSelectedCheck: true},
            {value: 'train', label: 'Transit', showSelectedCheck: true},
            {value: 'drive', label: 'Driving', showSelectedCheck: true},
          ]}
        />
        <TextInput
          mode="flat"
          label="Email"
          value={text}
          onChangeText={txt => setText(txt)}
          style={{marginVertical: 5}}
          dense
        />
        <Text variant="displayMedium">Display Medium</Text>
        <Text variant="headlineMedium">Headline Medium</Text>
        <Text variant="titleMedium">Title Medium</Text>
        <Text variant="bodyMedium">Body Medium</Text>
        <Text variant="labelMedium">Label Medium</Text>
        <Divider bold />
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
            right={props => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
          <Card.Content>
            <Text variant="titleLarge">Card Content</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ReactNativePaper;
