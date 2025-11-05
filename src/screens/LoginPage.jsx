import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';


export default function LoginPage() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, por favor efetua o login.</Text>    
      <TextInput title="Email" placeholder="Email" placeholderTextColor="white" style={styles.textInput} />
      <TextInput title="Password" placeholder="Password"  placeholderTextColor="grey" secureTextEntry={true} style={styles.textInput} />
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  textInput: {
    borderColor: 'white',
  },
});

