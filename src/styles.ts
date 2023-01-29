import {StyleSheet} from 'react-native';
import {COLOURS} from '../constants';

export const styles = StyleSheet.create({
  centre: {
    alignItems: 'center',
    marginHorizontal: 20,
  },

  normalText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLOURS.BLACK,
    marginTop: 20,
  },

  retailerPicture: {
    height: 200,
  },

  bodyContainer: {
    width: '100%',
  },

  listFooter: {
    height: 150,
  },

  goBackButton: {
    marginVertical: 16,
    alignSelf: 'flex-start',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLOURS.BLUE,
  },
});
