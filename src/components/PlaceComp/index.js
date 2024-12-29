import {
  Image,
  ImageBackground,
  PlatformColor,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React,{useState} from 'react';
import {Images, Icons} from '../../assets';
import PropsTypes from 'prop-types';
import Style from './styles';
import {RoutesNames} from '../../config';
import { useNavigation } from '@react-navigation/native';

export default PlaceComp = ({
  bgImage,
  location,
  placeName,
  icon,
  number,
  size,
  isBack,
}) => {
  const navigation=useNavigation();
  return (
    <ImageBackground source={bgImage} style={[Style.frame, size]}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          {isBack && (
            <TouchableOpacity
              style={Style.heartIconBar}
              onPress={() => {
                navigation.navigate(RoutesNames.PAGE1_2);
              }}>
              <Image source={Icons.leftArrow} style={Style.heartIcon} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={Style.heartIconBar}>
          <Image source={icon} style={Style.heartIcon}/>
        </TouchableOpacity>
      </View>
      <View style={Style.locationBar}>
        <View style={Style.topTextBar}>
          <Text style={Style.mfText}>{placeName}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={Style.location}>
            <Image source={Icons.location} />
            <Text style={{marginLeft: 5, color: 'white'}}>{location}</Text>
          </View>
          <View style={Style.score}>
            <Text style={{color: 'white'}}>{number}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

PlaceComp.PropsTypes = {
  bgImage: PropsTypes.object,
  location: PropsTypes.string,
  placeName: PropsTypes.string,
  price: PropsTypes.string,
  number: PropsTypes.string,
  icon: PropsTypes.object,
  size: PropsTypes.object,
  isBack: PropsTypes.bool,
};
PlaceComp.defaultProp = {
  bgImage: Images.bg1,
  location: '',
  placeName: '',
  price: '',
  number: '',
  size: {width: 250, height: 400},
  isBack:false,
};
