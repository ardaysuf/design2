import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextComp} from '../../components';
import Style from './styles';
import Icons from '../../assets/icons';
import { Image } from 'react-native';
import { RoutesNames } from '../../config';
import LinearGradient from 'react-native-linear-gradient';

const Page1_1 = ({navigation}) => {
  return (
    <LinearGradient start={{x:0,y:0}} end={{x:0,y:1}} colors={['#0172B2', '#001645']} style={Style.page}>
      <View style={Style.logoBar}>
        <View>
          <Text style={Style.travelText}>Travel</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate(RoutesNames.PAGE1_2)}}>
          <Image source={Icons.globeIcon}/>
        </TouchableOpacity>
      </View>
      <View style={Style.textBar}>
        <Text style={Style.textStyle}>Find Your Dream Destination With Us</Text>
      </View>
    </LinearGradient>
  );
};

export default Page1_1;
