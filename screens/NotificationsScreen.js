import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView,Button} from 'react-native';
import Swiper from 'react-native-swiper';
import {createStackNavigator} from '@react-navigation/stack';

const NotificationsScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.backbutton} >
          <Button color="#d39e0e" padding='1' title="Return to Previous Screen"
            onPress={() => navigation.goBack()}
          />
      </View>
      <View style={styles.text}>
          <Text>Notifications Screen </Text>
        </View>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backbutton: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: 'bold'
  },
});

