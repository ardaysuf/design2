import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Style from './styles';
import {Icons, Images} from '../../assets';
import {FilterComp, PlaceComp} from '../../components';
import {RoutesNames} from '../../config';
import LinearGradient from 'react-native-linear-gradient';

const Page1_3 = () => {
  return (
    <View style={Style.page}>
      <PlaceComp
        bgImage={Images.bg2}
        location="South America"
        placeName="Andes Mountain"
        icon={Icons.archive}
        number="$230"
        size={{width: 350, height: 450}}
        isBack={true}></PlaceComp>
      <View style={Style.overviewBar}>
        <View style={Style.ovTextBar}>
          <Text style={Style.ovText}>Overview</Text>
        </View>
        <View style={Style.dtTextBar}>
          <Text style={Style.dtText}>Details</Text>
        </View>
      </View>
      <View style={Style.features}>
        <OverviewComp icon={Icons.clockFill} text="8 hours" />
        <OverviewComp icon={Icons.cloud} text="16 C" />
        <OverviewComp icon={Icons.star} text="4.5" />
      </View>
      <LinearGradient
        style={Style.paragraphBar}
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}>
        <Text style={Style.paragraph}>
          This vast mountain range is renowned for its remarkable diversity in
          terms of topography and climate. It features towering peaks, active
          volcanoes, deep canyons, expansive plateaus, and lush valleys. The
          Andes are also home to...
        </Text>
      </LinearGradient>
      <TouchableOpacity style={Style.button}>
        <View>
          <Text style={Style.buttonText}>Book Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Page1_3;
