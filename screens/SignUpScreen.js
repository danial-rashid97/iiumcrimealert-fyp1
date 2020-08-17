import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, Alert,
  Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
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
 
const SignUpScreen = ({navigation}) => { 
  // const auth=React.useContext(AuthContext);
  
  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
    <View style={{flex:.9, alignItems: 'center', }} >
             <Image source ={require("../assets/icon.png")  } />
      </View>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.signContainer}>
            <View style={styles.signForm}>
              <TextInput placeholder="Email" style={styles.signFormTextInput} />
              <TextInput placeholder="Password" style={styles.signFormTextInput}/>
              <TextInput placeholder="Name" style={styles.signFormTextInput} />
              <TextInput placeholder="Matric no." style={styles.signFormTextInput}/>
              <Button
                style={styles.signButton}
                onPress={() => alert("Signed Up")}
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
export default SignUpScreen;


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
    height: 40,
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


