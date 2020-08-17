import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';

export default class InfoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
          region={{latitude: 3.248056,
                  longitude: 101.737268,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
            }} 
            >

            <MapView.Marker
                coordinate={{
                  latitude: 3.2396022,
                  longitude: 101.7409951
              }}title='Mahallah Faruq' description='This is the nearest safe space'>
              <Image source={require('../assets/map-marker.png')} style={{ width: 40, height: 60 }} />
            </MapView.Marker>
            <MapView.Marker
                coordinate={{
                  latitude: 3.255655,
                  longitude: 101.732642
              }}title='Mahallah Aminah' description='This is the nearest safe space'>
              <Image source={require('../assets/map-marker.png')} style={{ width: 40, height: 60 }} />
            </MapView.Marker>
            
            <MapView.Marker
                coordinate={{
                  latitude: 3.254522,
                  longitude: 101.738287
              }}title='Mahallah Sumayyah' description='This is the nearest safe space'>
              <Image source={require('../assets/map-marker.png')} style={{ width: 40, height: 60 }} />
            </MapView.Marker>
    
            <MapView.Marker
                coordinate={{
                  latitude:3.261640,
                  longitude:  101.733157
              }}title='Mahallah Ruqayyah' description='This is the nearest safe space'>
              <Image source={require('../assets/map-marker.png')} style={{ width: 40, height: 60 }} 
              />
            </MapView.Marker>
            <MapView.Marker
                coordinate={{  
                  latitude:3.255959,
                  longitude: 101.733538
              }}title='Mahallah Hafsah' description='This is the nearest safe space'>
              <Image source={require('../assets/map-marker.png')} style={{ width: 50, height: 50 }} 
              />
            </MapView.Marker>
            <MapView.Marker
                coordinate={{
                  latitude:3.248495,
                  longitude: 101.737143
              }}title='Mahallah Ali' description='This is the nearest safe space'>
              <Image source={require('../assets/map-marker.png')} style={{ width: 50, height: 50 }} 
              />
            </MapView.Marker>
            <MapView.Marker
                coordinate={{  
                  latitude: 3.248066, 
                  longitude:  101.739031
              }}title='Mahallah Siddiq' description='This is the nearest safe space'>
              <Image source={require('../assets/map-marker.png')} style={{ width: 50, height: 50 }} 
              />
            </MapView.Marker>
            </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});