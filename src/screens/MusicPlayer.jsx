import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";

const { width } = Dimensions.get('window');

export default function MusicPlayer() {
  const navigation = useNavigation();
  const [playing, setPlaying] = useState(false);
  

  const [currentVideoId, setCurrentVideoId] = useState("jfKfPfyJRdk"); 

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      console.log("A música acabou!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ImageBackground
      source={require('../images/gym.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          
          
         <View style={styles.hiddenPlayer}>
  <YoutubePlayer
    height={1} 
    width={1}  
    play={playing}
    videoId={currentVideoId}
    onChangeState={onStateChange}
    webViewProps={{
   
      allowsInlineMediaPlayback: true,
      androidLayerType: 'software', 
    }}
  />
</View>


         
          <View style={styles.musicWidget}>
            <View style={styles.musicInfo}>
              <Text style={styles.trackTitle}>Gym Radio Mode ⚡</Text>
              <Text style={styles.statusText}>{playing ? "Playing Music..." : "Paused"}</Text>
            </View>
            
            <TouchableOpacity onPress={togglePlaying} style={styles.playButton}>
              <Text style={styles.buttonIcon}>{playing ? "⏸️" : "▶️"}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', 
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hiddenPlayer: {
    height: 0,
    width: 0,
    position: 'absolute',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  musicWidget: {
    width: width * 0.9,
    backgroundColor: '#1c1c1e',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 20,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  musicInfo: {
    flex: 1,
  },
  trackTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusText: {
    color: '#aaa',
    fontSize: 12,
  },
  playButton: {
    backgroundColor: '#333',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 20,
  }
});