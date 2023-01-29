import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

interface TextButton {
  text: string;
  onPress: () => void;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * Press on text component using TouchableOpacity and text components.
 * @param props TextButton
 * @returns function component
 */
export const TextButton = (props: TextButton) => {
  return (
    // <View style={styles.retailerViewContainer}>
    <TouchableOpacity style={props.viewStyle} onPress={props.onPress}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};
