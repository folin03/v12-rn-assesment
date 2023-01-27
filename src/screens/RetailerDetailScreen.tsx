import React from 'react';
import {Text, View} from 'react-native';
import {HeaderComponent} from '../components/HeaderComponent';
import {RetailerPreViewComponent} from '../components/RetailerPreViewComponent';
import {styles} from '../styles';
import {Retailer} from '../types';

export const RetailerDetailScreen = (props: Retailer) => {
  return (
    <View style={styles.centre}>
      <HeaderComponent title="Retailer Detail" />
      <RetailerPreViewComponent
        id={props.id}
        name={props.name}
        location={props.location}
        image={props.image}
      />
      <Text>Some detail text about retailer</Text>
    </View>
  );
};
