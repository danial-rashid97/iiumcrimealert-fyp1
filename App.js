import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';

import SplashScreen from './screens/SplashScreen'; 
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ContactScreen from './screens/ContactScreen';  

import NotificationsScreen from './screens/NotificationsScreen'; 

import { AuthContext } from './screens/context';

const RootStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Drawer = createDrawerNavigator();

console.disableYellowBox = true; //get rid of yellowbox

export default ()=>{
  const[isLoading, setIsLoading]= React.useState(true);
  const[userToken, setUserToken]=React.useState(null);
  const authContext=React.useMemo(()=>{
        return{
          signIn:()=>{
            setIsLoading(false);
            setUserToken('qwerty');
          },
          signUp:()=>{
            setIsLoading(false);
            setUserToken('qwerty');
          },
          signOut:()=>{
            setIsLoading(false);
            setUserToken(null);},
        }
  },[])
  React.useEffect(()=>{ //LOADING SCREEN, 2 SECONDS OF SPLASH THEN GO TO LOGIN/REGISTER
    setTimeout(()=> {
      setIsLoading(false);
    },1000);
  },[]);

  if(isLoading){
    return <SplashScreen/>;
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { userToken? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />               
          <Drawer.Screen name="Contact Us" component={ContactScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      ) //IF USER HAS TOKEN (= LOGIN=SIGNED UP) => THEN CAN ENTER THE MAIN PAGE
    :
    <RootStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#d39e0e',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
      <RootStack.Screen name='Sign In' component={SignInScreen} options={{ title:'Login'}} />
      <RootStack.Screen name='Sign Up' component={SignUpScreen}/>
    </RootStack.Navigator> //IF USER DOEST HAVE TOKEN => THEN USER TO SIGN/LOGIN PAGE
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}