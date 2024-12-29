import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import PropsTypes from 'prop-types';
import Style from './styles';

export default FilterComp = ({text1, text2, text3, text4}) => {
  const [selectedButton, setSelectedButton] = useState(text1);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={Style.filtersBar}>
      <TouchableOpacity
        style={[
          Style.box,
          {
            backgroundColor: selectedButton === text1 ? 'black' : 'white',
          },
        ]}
        onPress={() => setSelectedButton(text1)}>
        <Text style={[Style.text,{color: selectedButton === text1 ? 'white' : 'gray'}]}>{text1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          Style.box,
          {
            backgroundColor: selectedButton === text2 ? 'black' : 'white',
            color: selectedButton === text2 ? 'white' : 'gray',
          },
        ]}
        onPress={() => setSelectedButton(text2)}>
        <Text style={[Style.text,{color: selectedButton === text2 ? 'white' : 'gray'}]}>{text2}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          Style.box,
          {
            backgroundColor: selectedButton === text3 ? 'black' : 'white',
            color: selectedButton === text3 ? 'white' : 'gray',
          },
        ]}
        onPress={() => setSelectedButton(text3)}>
        <Text style={[Style.text,{color: selectedButton === text3 ? 'white' : 'gray'}]}>{text3}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          Style.box,
          {
            backgroundColor: selectedButton === text4 ? 'black' : 'white',
            color: selectedButton === text4 ? 'white' : 'gray',
          },
        ]}
        onPress={() => setSelectedButton(text4)}>
        <Text style={[Style.text,{color: selectedButton === text4 ? 'white' : 'gray'}]}>{text4}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

FilterComp.PropsTypes = {
  text1: PropsTypes.string,
  text2: PropsTypes.string,
  text3: PropsTypes.string,
  text4: PropsTypes.string,
};
FilterComp.defaultProp = {
  text1: 'Most Viewed',
  text2: 'Nearby',
  text3: 'Latest',
  text4: 'Best',
};
