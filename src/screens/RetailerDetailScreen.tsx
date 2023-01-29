import React from 'react';
import {Text, View} from 'react-native';
import {useAppDispatch} from '../../redux/hooks';
import {setDefaultRetailer} from '../../redux/slices/retailerSlice';
import {RetailerPreViewComponent} from '../components/RetailerPreViewComponent';
import {TextButton} from '../components/TextButton';
import {styles} from '../styles';
import {Retailer} from '../types';

/**
 * Display Retailer details screen
 * @param props retailer details {id, name, image, location}
 * @returns function component
 */
export const RetailerDetailScreen = (props: Retailer) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.centre}>
      <TextButton
        text="Go back"
        onPress={() => dispatch(setDefaultRetailer())}
        viewStyle={styles.goBackButton}
        textStyle={styles.buttonText}
      />
      <View style={styles.bodyContainer}>
        <RetailerPreViewComponent
          id={props.id}
          name={props.name}
          location={props.location}
          image={props.image}
          onPressDisabled={true}
        />
        <Text>Some detail text about retailer</Text>
      </View>
    </View>
  );
};
