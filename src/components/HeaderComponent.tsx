import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOURS} from '../../constants';

interface HeaderProps {
  title: string;
}

/**
 * Header component
 * @param props object {title}
 * @returns function component.
 */
export const HeaderComponent = (props: HeaderProps) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: COLOURS.BLACK,
    marginVertical: 10,
  },
});
