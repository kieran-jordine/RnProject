declare module 'react-native-config' {
  export interface NativeConfig {
    HOSTNAME?: string;
    REACT_APP_URL?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
