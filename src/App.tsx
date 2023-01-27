/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useAppSelector} from '../redux/hooks';
import {RootState} from '../redux/store';
import {RetailerDetailScreen} from './screens/RetailerDetailScreen';
import {RetailersListScreen} from './screens/RetailersListScreen';

const App = () => {
  const retailerDetails = useAppSelector((state: RootState) => state.retailer);

  return (
    <SafeAreaView>
      <StatusBar />
      {retailerDetails.id === 0 ? (
        <RetailersListScreen />
      ) : (
        <RetailerDetailScreen
          id={retailerDetails.id}
          name={retailerDetails.name}
          location={retailerDetails.location}
          image={retailerDetails.image}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
