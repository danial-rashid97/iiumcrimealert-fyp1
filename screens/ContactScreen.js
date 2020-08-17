import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView,Button} from 'react-native';
import Swiper from 'react-native-swiper';
import {createStackNavigator} from '@react-navigation/stack';

const ContactStack=createStackNavigator();
const  ContactStackScreen=()=>(
  <ContactStack.Navigator>
  <ContactStack.Screen name='Contact Us' component={ContactScreen}/>
  </ContactStack.Navigator>

);
const ContactScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backbutton} >
          <Button color="#d39e0e" padding='1' title="BACK"
            onPress={() => navigation.goBack()}
          />
      </View>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#d39e0e">
          <View style={styles.slide}>
            <Image
              source={require('../assets/iium.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/iiummap.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{
          uri: 'https://photos.iium.edu.my/img/bg_image/thumb_image_generic.jpg',
        }}
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
          Contact OSeM (IIUM)
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source={{
          uri:
            'https://iium.edu.my/media/52165/facebook%2005022020.jpg',
        }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source={{
          uri: 'https://iium.edu.my/media/44525/hotline%20poster%2005082019%20E2.jpg',
        }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardsBox}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Contact Us
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source={{
          uri:
            'https://iium.edu.my/media/52165/facebook%2005022020.jpg',
        }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgBox}>
            <Image
              source={{
          uri: 'https://iium.edu.my/media/44525/hotline%20poster%2005082019%20E2.jpg',
        }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backbutton: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: 'bold'
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
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 5,
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