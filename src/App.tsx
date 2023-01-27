/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {RetailerDetailScreen} from './screens/RetailerDetailScreen';
import {RetailersListScreen} from './screens/RetailersListScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <RetailersListScreen />
      {/* <RetailerDetailScreen
          id={0}
          name={'name'}
          location={'location'}
          image={'imageUrl'}
        /> */}
    </SafeAreaView>
  );
};

export default App;
