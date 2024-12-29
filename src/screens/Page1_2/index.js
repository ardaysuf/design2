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
import {FilterComp, PlaceComp, BottomComp} from '../../components';
import {RoutesNames} from '../../config';

const Page1_2 = ({navigation}) => {
  return (
    <View style={Style.page}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
        <View style={Style.topContainer}>
          <View>
            <Text
              onPress={() => {
                navigation.navigate(RoutesNames.PAGE1_1);
              }}
              style={{fontWeight: 'bold', fontSize: 25}}>
              Hi, David 👋
            </Text>
            <View>
              <Text>Explore the world</Text>
            </View>
          </View>
          <TouchableOpacity style={Style.pPhoto}>
            <Image source={Icons.pPhoto} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={Style.searchBar}>
          <View>
            <TextInput
              style={Style.textInput}
              placeholder="Search places"></TextInput>
          </View>
          <TouchableOpacity style={Style.categoryIcon}>
            <Image source={Icons.settings} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Style.popularPlacesBar}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Popular places</Text>
        <TouchableOpacity>
          <Text>View all</Text>
        </TouchableOpacity>
      </View>
      <FilterComp
        text1="Most Viewed"
        text2="Nearby"
        text3="Latest"
        text4="Best"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={Style.placesBar}>
        <TouchableOpacity>
          <PlaceComp
            bgImage={Images.bg1}
            location="Tokyo, Japan"
            placeName="Mount Fuji, Tokyo"
            icon={Icons.heart}
            number="4.8"
            size={{width: 250, height: 400}}
            isBack={false}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(RoutesNames.PAGE1_3);
          }}>
          <PlaceComp
            bgImage={Images.bg2}
            location="South America"
            placeName="Andes Mountain"
            icon={Icons.archive}
            number="$230"
            size={{width: 250, height: 400}}
            isBack={false}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Page1_2;
