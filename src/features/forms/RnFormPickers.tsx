import React, {useState} from 'react';
import {Button, Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import style from '../../utils/theme';

// import {StackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../../../App';

// type ScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'RnFormPickers'
// >;

// type Props = {
//   navigation: ScreenNavigationProp;
// };

function RnFormPickers({navigation}: {navigation: any}): JSX.Element {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  const [imagePickerResult, setImagePickerResult] = useState('');
  const [imageSource, setImageSource] = useState<string | undefined>();

  async function onCamera(): Promise<void> {
    try {
      const cameraOptions: CameraOptions = {
        mediaType: 'photo',
        saveToPhotos: false,
        includeBase64: true,
      };
      const result: ImagePickerResponse = await launchCamera(cameraOptions);
      if (result.errorCode) {
        setImagePickerResult(result.errorCode ?? 'Unknown error');
        return;
      }
      console.log(result);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log(err);
      }
    }
  }

  async function onGallery(): Promise<void> {
    try {
      const imageLibraryOptions: ImageLibraryOptions = {
        mediaType: 'photo',
        includeBase64: true,
      };
      const result: ImagePickerResponse = await launchImageLibrary(
        imageLibraryOptions,
      );
      if (result.assets && result.assets.length >= 1) {
        const asset = result.assets[0];
        console.log(asset.fileName, asset.fileSize);
        if (!asset.fileName || !asset.fileSize) {
          throw Error('Attribute missing');
        }
        setImageSource(`data:${asset.type};base64, ${asset.base64}`);
        console.log(`data:${asset.type};base64, `);
        const formData = new FormData();
        formData.append('file', {
          uri: asset.uri,
          type: asset.type,
          name: asset.fileName,
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log(err);
      }
    }
  }

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        hidden={false}
        animated
        backgroundColor={'blue'}
        showHideTransition={'slide'}
      />
      <View style={style.container}>
        <Text style={style.headlineText}>A form with some pickers</Text>
        <Button onPress={() => setShow(true)} title="Select Country" />
        <CountryPicker
          show={show}
          pickerButtonOnPress={item => {
            setCountryCode(`${item.code}, ${item.dial_code}, ${item.name.en}`);
            setShow(false);
          }}
          lang="en"
          style={{modal: {height: 600}}}
          onBackdropPress={() => setShow(false)}
        />
        <Text>{`Selected Country: ${countryCode}`}</Text>
        <View style={style.divider} />
        <Text>Image Picker</Text>
        <View style={style.row}>
          <Button title="Camera" onPress={onCamera} />
          <Button title="Gallery" onPress={onGallery} />
        </View>
        <Text>{imagePickerResult}</Text>
        {imageSource && (
          <Image source={{uri: imageSource, width: 200, height: 200}} />
        )}
        <Button
          onPress={() => navigation.push('ReduxStart')}
          title="Redux Start"
        />
      </View>
    </SafeAreaView>
  );
}

export default RnFormPickers;
