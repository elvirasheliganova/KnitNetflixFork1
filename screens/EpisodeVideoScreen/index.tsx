import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Button, TouchableOpacity, ActivityIndicator} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Part } from '../../src/models'
import styles from './styles'

import { DataStore } from '@aws-amplify/datastore';



const EpisodeVideoScreen = () => {



  const route = useRoute()
  


 // const part = parts.find(part => part.id === route.params.id)

  const [part, setPart] = useState<Part|null>(null)

  const video = useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      setPart(await DataStore.query(Part, route?.params?.id))
    }

    fetchCourse()

  }, [])
  if (!part) {
    return <ActivityIndicator />
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
          <Text style={{ color: 'white' }}>{status.isPlaying ? 'Pause' : 'Play'}

          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: 'white' }}>{part.desc}</Text>
    </>

  );

}


export default EpisodeVideoScreen
