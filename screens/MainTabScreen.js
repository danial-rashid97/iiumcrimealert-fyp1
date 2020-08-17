import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons ,MaterialIcons} from '@expo/vector-icons'; 

import HomeScreen from './HomeScreen';
import ReportScreen from './ReportScreen';
import InfoScreen from './InfoScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import SubmitReportScreen from './SubmitReportScreen';
const HomeStack = createStackNavigator();
const ReportStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const InfoStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen =()=>(
  <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#d39e0e',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportStackScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarColor: '#d39e0e',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="report" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d39e0e',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoStackScreen}
        options={{
          tabBarLabel: 'Info',
          tabBarColor: '#d39e0e',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#d39e0e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Home',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor="#d39e0e" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
          }} />
  </HomeStack.Navigator>
);
const ReportStackScreen = ({navigation}) => (
  <ReportStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#d39e0e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ReportStack.Screen name="Report" component={ReportScreen} options={{
          title:'Report',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor="#d39e0e" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight: () => (
            <Ionicons.Button name="md-add" size={25} backgroundColor="#d39e0e" onPress={() => navigation.navigate('SubmitReport')}></Ionicons.Button>
        )
          }} />
        <ProfileStack.Screen name="SubmitReport" component={SubmitReportScreen} options={{title:'Submit Report'}} />
  </ReportStack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#d39e0e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
          title:'Profile',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor="#d39e0e" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight: () => (
          <MaterialIcons.Button name="edit" size={25} backgroundColor="#d39e0e" onPress={() => navigation.navigate('EditProfile')}></MaterialIcons.Button>
      )
          }} />
          <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{title:'Edit Profile'}} />
  </ProfileStack.Navigator>
);
const InfoStackScreen = ({navigation}) => (
  <InfoStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#d39e0e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <InfoStack.Screen name="Info" component={InfoScreen} options={{
          title:'Info',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor="#d39e0e" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight: () => (
          <Ionicons.Button name="md-share" size={25} backgroundColor="#d39e0e" onPress={() => alert('Share Location')}></Ionicons.Button>
      )
          }} />
  </InfoStack.Navigator>
);