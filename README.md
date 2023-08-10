A [**React Native**](https://reactnative.dev) project that showcases best practices, organization and process for a React Native project.

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

### image picker
ios:
   NSPhotoLibraryUsageDescription
   NSCameraUsageDescription
   NSMicrophoneUsageDescription

## State Management

## Networking
