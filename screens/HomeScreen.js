import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MaterialCommunityIcons,MaterialIcons} from 'react-native-vector-icons';

const HomeScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          vertical={false}
          height={200}
          activeDotColor="#d39e0e">
          <View style={styles.slide}>
            <Image
              source = {{uri:'https://www.iium.edu.my/imagecache/original/56047/Masthead%20Besar-100.jpg'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source = {{uri:'https://www.iium.edu.my/imagecache/original/57596/Welcome%20CFS%20Students_Masthead%20Besar-100.jpg'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source = {{uri:'https://www.iium.edu.my/imagecache/original/55580/guideline%20MCO%20050620.png'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source = {require('../assets/iium.jpg')} 
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source = {require('../assets/iiummap.jpg')} 
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>

        </Swiper>
      </View>


      <View style={styles.cardsBox}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Gallery
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
          <Image
              source = {{uri:'https://www.iium.edu.my/imagecache/large/57758/Screenshot_76.jpg'}}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source = {{uri:'https://www.iium.edu.my/imagecache/large/57717/Capture%20nst.PNG'}}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source = {{uri:'https://www.iium.edu.my/imagecache/large/57517/Screenshot_73.jpg'}}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source = {{uri:'https://photos.iium.edu.my/json/img_flagship/flagship.jpg'}}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source = {{uri:'https://photos.iium.edu.my/json/img_flagship/stay_home.jpg'}}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source = {{uri:'https://photos.iium.edu.my/json/img_flagship/together_stronger.jpg'}}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  cardsBox: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgBox: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});