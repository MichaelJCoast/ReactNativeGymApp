import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer';


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.text}>Bem-vindo amigo, estás no sítio certo!</Text>
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </View>
     
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});
