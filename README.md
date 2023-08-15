A [**React Native**](https://reactnative.dev) project that showcases best practices, organization and process for a React Native project.

## Command
npx react-native@latest init ProjectName
px react-native@X.XX.X init ProjectName --version X.XX.X

## Tips
Open in XCode:
    xed ios

## Forms

## New Architecture
### activate
ios: 
    bundle install && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install => initial
    RCT_NEW_ARCH_ENABLED=1 bundle exec pod install => after subsequent package installation
android:
    android/gradle.properties => newArchEnabled=true
    

### document picker
ios:
   NSDocumentPickerUsageDescription

### image picker (react-native-image-picker)
ios:
   NSPhotoLibraryUsageDescription
   NSCameraUsageDescription
   NSMicrophoneUsageDescription

## State Management

## Networking
