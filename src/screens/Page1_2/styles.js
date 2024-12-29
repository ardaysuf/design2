import {StyleSheet, TextInput} from 'react-native';
import {SearchBar} from 'react-native-screens';
export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:'white'
  },
  popularPlacesBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom:30
  },
  searchBar: {
    borderWidth: 1,
    width: '90%',
    flexDirection: 'row',
    height: 45,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom:22,
    marginTop:20
  },
  textInput: {
    fontSize: 12,
  },
  categoryIcon: {
    borderLeftWidth: 1,
    height: 28,
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  topContainer: {
    width:'90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pPhoto:{
    borderRadius:24,
    overflow:'hidden'
  },
});
