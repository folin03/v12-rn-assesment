import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../../redux/hooks';
import {setRetailer} from '../../redux/slices/retailerSlice';
import {RetPreViewProps} from '../types';

export const RetailerPreViewComponent = (props: RetPreViewProps) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.retailerViewContainer}>
      <TouchableOpacity
        disabled={props.onPressDisabled}
        onPress={() =>
          dispatch(
            setRetailer({
              id: props.id,
              name: props.name,
              location: props.location,
              image: props.image,
            }),
          )
        }>
        <View style={styles.retailerPicture}>
          <Image source={{uri: props.image}} style={styles.image} />
        </View>
      </TouchableOpacity>
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
