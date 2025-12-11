import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';


export default function LoginPage() {
  const navigation = useNavigation(); 

  return (
    <ImageBackground
          source={require('../images/gym.jpg')} 
          style={styles.background}
        >
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Please proceed with your registration!</Text>    
      <TextInput title="Email" placeholder="Email" placeholderTextColor="grey" style={styles.input} />
      <TextInput title="Password" placeholder="Password"  placeholderTextColor="grey" secureTextEntry={true} style={styles.input} />
      <TextInput title="Age" placeholder="Number" placeholderTextColor="grey" style={styles.input} />
      <Button title="Register" onPress={() => navigation.navigate('Home')} />
    
     
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
    marginLeft: 45,
  },
  buttonsContainer: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#FF9704', // 
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonOutlineText: {
    color: '#fff',
  },
  input:{
    height: 40,
  }
});
