import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import SideProfile from '../components/sideprofile';


export default function ProfilePage() {
  const navigation = useNavigation(); 

  return (
     <ImageBackground
              source={require('../images/gym.jpg')} 
              style={styles.background}
              >
    <View style={styles.container}>
      <Text style={styles.Titletext}>Bem-vindo ao seu perfil.</Text>    
      <Text style={styles.paragraphtext}>Queres consultar o teu IMC?</Text>
     
    
     
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  Titletext: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    top: 50,
      },
     paragraphtext: {
    fontSize: 10,
    color: 'white',
      },
});

