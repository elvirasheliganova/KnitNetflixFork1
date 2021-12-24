import React, { useRef, useState, useContext } from 'react'
import { FavContext } from '../../components/FavContext'
import { View, Text, Button, TouchableOpacity, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';
import styles from './styles'
import parts from '../../assets/data/courses/parts'
import VideoPlayer from '../../components/VideoPlayer';
import { FontAwesome } from '@expo/vector-icons';
import { isTemplateElement } from '@babel/types';
import { color } from 'react-native-reanimated';
import { TouchableHighlight } from 'react-native-gesture-handler';

const EpisodeVideoScreen = () => {



  const route = useRoute()


  const part = parts.find(part => part.id === route.params.id)

//console.log(part)

  const video = useRef(null);
  const [status, setStatus] = React.useState({});

  const [favs, setFavs] = useContext(FavContext)
  const [isFavorite, setIsFavorite] = useState(false)

  const updateFavs = () => {

    //console.log('pressed')
    setIsFavorite(!isFavorite)

    const index = favs.findIndex(f => f.id === part.id)

    if (index === -1){
      setFavs(prevFavs => [...prevFavs, part])
      
    } else {
      setFavs(prevFavs => [prevFavs.splice(index, 1)])
      
    }
   
   
    //console.log(part)
  }

  return (
    <>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: part.video
        }}
        useNativeControls
        resizeMode="contain"

        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }>
          <Text style={{ color: '#black' }}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textDescript}>{part.desc}</Text>
      </View>
      
      <Pressable
      style={styles.like}
      onPress={updateFavs}
      
      //style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1,
      //})}
      >
        <FontAwesome name = {!isFavorite ? 'heart-o' : 'heart'} size={20} 
        color={!isFavorite ? 'white' : 'red'}
        />
      </Pressable>
    </>

  );

}


export default EpisodeVideoScreen
