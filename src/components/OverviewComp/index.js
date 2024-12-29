import {
  Image,
  ImageBackground,
  PlatformColor,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Images, Icons} from '../../assets';
import PropsTypes from 'prop-types';
import Style from './styles';

export default OverviewComp = ({icon, text}) => {
  return (
    <View style={Style.bar}>
      <View style={Style.iconBar}>
        <Image source={icon} />
      </View>
      <View style={Style.textBar}>
        <Text style={Style.text}>{text}</Text>
      </View>
    </View>
  );
};

OverviewComp.PropsTypes = {
  icon:PropsTypes.object,
  text:PropsTypes.string
};
OverviewComp.defaultProp = {
  icon:Icons.clockFill,
  text:"8 hours"
};
