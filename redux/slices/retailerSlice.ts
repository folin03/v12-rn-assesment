import {createSlice} from '@reduxjs/toolkit';
import {Retailer, RetailerAction} from '../../src/types';
import {RootState} from '../store';

const initialState: Retailer = {
  id: 0,
  name: '',
  location: '',
  image: '',
};

const retailerSlice = createSlice({
  name: 'retailer',
  initialState,
  reducers: {
    setRetailer: (state: Retailer, action: RetailerAction) => {
      // console.log('state', state);
      // console.log('action', action);
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.location = action.payload.location;
      state.image = action.payload.image;
    },
  },
});

export const {setRetailer} = retailerSlice.actions;

export const selectRetailer = (state: RootState) => state.retailer;

export default retailerSlice.reducer;
