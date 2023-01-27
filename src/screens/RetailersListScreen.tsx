import React from 'react';
import {View} from 'react-native';
import {HeaderComponent} from '../components/HeaderComponent';
import {RetailerPreViewComponent} from '../components/RetailerPreViewComponent';
import {styles} from '../styles';

export const RetailersListScreen = () => {
  return (
    <View style={styles.centre}>
      <HeaderComponent title="Our Retailers" />
      <RetailerPreViewComponent
        id={0}
        name={'name'}
        location={'location'}
        image={'imageUrl'}
      />
    </View>
  );
};
