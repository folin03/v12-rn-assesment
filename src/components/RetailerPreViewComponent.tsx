import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Retailer} from '../types';

export const RetailerPreViewComponent = (props: Retailer) => {
  return (
    <View style={styles.retailerViewContainer}>
      <View style={styles.retailerPicture}>
        <Text>{props.image}</Text>
      </View>
      <Text style={styles.normalText}>{props.name}</Text>
      <Text style={styles.normalText}>{props.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  normalText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },

  retailerViewContainer: {
    width: '90%',
    height: 300,
  },

  retailerPicture: {
    backgroundColor: 'lightblue',
    height: 200,
  },
});
