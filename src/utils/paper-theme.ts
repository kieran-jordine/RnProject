import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // primary: 'tomato',
    // onPrimary: 'teal',
    // secondary: 'green',
    // onSecondary: 'teal',
  },
  fonts: {
    ...MD3LightTheme.fonts,
    bodyMedium: {
      ...MD3LightTheme.fonts.bodyMedium,
      fontFamily: 'sans-serif',
      fontSize: 14,
      // fontWeight: '400',
      letterSpacing: 0.25,
      lineHeight: 20,
    },
    mode: 'adaptive',
  },
  customProp: 'custom-value',
};

export const darkTheme = {
  ...MD3DarkTheme,
};
