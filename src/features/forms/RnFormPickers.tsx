import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import style from '../../utils/theme';

function RnFormPickers(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

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
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
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
            console.log(item.code);
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
      </View>
    </SafeAreaView>
  );
}

export default RnFormPickers;
