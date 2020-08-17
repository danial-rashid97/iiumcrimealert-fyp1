import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, Alert,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
import{AuthContext} from'./context';
import { TextInput,Button,DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000',
    accent: '#d39e0e',
  }
};
const SignInScreen = ({navigation}) => { 
  const {signIn}=React.useContext(AuthContext);
  //const auth=React.useContext(AuthContext);
  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
    <View style={{flex:.9, flex: 1, alignItems: 'center', justifyContent: 'center'}} >
             <Image source ={require("../assets/icon.png")  } />
      </View>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.signContainer}>
            <View style={styles.signForm}>
              <TextInput placeholder="Email"  
                  style={styles.signFormTextInput} />

              <TextInput placeholder="Password" 
               style={styles.signFormTextInput}/>

              <Button
                style={styles.signButton}
                onPress={() => signIn()}
              >
              <Text style={{fontSize:22,color:'#000000'}}>
                    Login
                  </Text>
              </Button> 
              <Button
                style={styles.signButton}
                onPress={() => navigation.navigate("Sign Up")}
              >
              <Text style={{fontSize:22,color:'#000000'}}>
                    Sign Up
                  </Text>
              </Button> 
            </View>
          </View>
        </KeyboardAvoidingView>
        </View>
        </PaperProvider>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-start',
  },
  signContainer: {
    flex: 1,
  },
  signForm: {
    flex: 1
  },
  signFormTextInput: {
    height: 45,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginHorizontal:15,
    marginVertical: 5
  },
  signButton: {
    height: 55,
    justifyContent:'center',
    backgroundColor:'#d39e0e',
    borderRadius:5,
    borderWidth: 3,
    borderColor: '#000000',
    marginBottom: 5,
    marginTop:5,
    marginHorizontal: 15
  },
});

