import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  page: {
    margin: 25,
    flex: 1,
    alignItems: 'center',
  },
  overviewBar: {
    margin: 25,
    width: '85%',
    flexDirection: 'row',
  },
  ovTextBar: {
    marginRight: 25,
  },
  ovText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  dtTextBar: {
    justifyContent: 'flex-end',
  },
  dtText: {
    fontSize: 12,
  },
  features: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
  },
  paragraphBar: {
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    opacity: 0.5,
  },
  paragraph: {
    letterSpacing: 1,
    lineHeight: 25,
  },
  button: {
    width: '80%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 17,
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});
