import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  name: string;
  size: number;
  color?: string;
  style?: ViewStyle;
  iconStyle?: TextStyle;
  onPress?: () => void;
}

export default function MaterialIcon(props: Props) {
  const {size} = props;
  const containerStyle: ViewStyle = {
    height: size + 12,
    width: size + 12,
    borderRadius: (size + 12) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <View style={[containerStyle, props.style]}>
      <VectorIcon
        name={props.name}
        size={size}
        color={props.color}
        style={[{width: size}, props.iconStyle]}
        onPress={props.onPress}
      />
    </View>
  );
}

MaterialIcon.defaultProps = {
  size: 24,
};
