import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Retailer} from '../types';

export const RetailerPreViewComponent = (props: Retailer) => {
  return (
    <View style={styles.retailerViewContainer}>
      <View style={styles.retailerPicture}>
        <Image source={{uri: props.image}} style={styles.image} />
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
    marginVertical: 5,
  },

  retailerViewContainer: {
    height: 300,
    marginVertical: 20,
  },

  retailerPicture: {
    backgroundColor: 'lightblue',
    height: 215,
    width: '100%',
  },

  image: {
    height: '100%',
    resizeMode: 'contain',
  },
});
