import {NavigationProp, RouteProp} from '@react-navigation/native';

export interface NavProp {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
