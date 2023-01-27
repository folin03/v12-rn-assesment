import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, VirtualizedList} from 'react-native';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {HeaderComponent} from '../components/HeaderComponent';
import {RetailerPreViewComponent} from '../components/RetailerPreViewComponent';
import {styles} from '../styles';
import {CONSTANTS} from '../../constants';

export const RetailersListScreen = () => {
  const [retailersList, setRetailersList] = useState<any>();

  const getRetailers = async () => {
    const url = CONSTANTS.SERVER_URL + '/api/retailers';
    const headers = {
      'Content-Type': 'application/json',
    };

    const retailers = await axios({
      method: 'get',
      url: url,
      headers: headers,
    })
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        console.error('[ sendNotification ] error:', err);
      });
    if (retailers) {
      setRetailersList(retailers);
    }
  };

  useEffect(() => {
    getRetailers();
  }, []);

  console.log('retailersList:', retailersList);
  return (
    <View style={styles.centre}>
      <HeaderComponent title="Our Retailers" />
      <View style={styles.bodyContainer}>
        <FlatList
          data={retailersList}
          renderItem={({item}) => (
            <RetailerPreViewComponent
              id={item.id}
              name={item.name}
              location={item.location}
              image={item.image}
            />
          )}
          ListFooterComponent={<View style={styles.listFooter} />}
        />
      </View>
    </View>
  );
};
