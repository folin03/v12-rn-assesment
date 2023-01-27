import React from 'react';
import {StyleSheet, Text} from 'react-native';
// import {styles} from '../styles';

interface HeaderProps {
  title: string;
}

export const HeaderComponent = (props: HeaderProps) => {
  return <Text style={styles.title}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginVertical: 10,
  },
});
