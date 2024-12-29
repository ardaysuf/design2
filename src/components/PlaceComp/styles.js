import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  frame: {
    overflow: 'hidden',
    borderRadius: 25,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  heartIconBar: {
    margin: 15,
    width: '80%',
    width: 30,
    height: 30,
    backgroundColor: 'gray',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    height: 14,
    width: 15,
  },
  locationBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 17,
    width: '80%',
    margin: 20,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  score: {
    flexDirection: 'row',
    margin: 10,
  },
  topTextBar: {
    width: '100%',
    flexDirection: 'row',
    margin: 10,
  },
  mfText: {
    color: 'white',
  },
});
