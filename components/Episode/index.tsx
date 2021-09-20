import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styles from './styles'

import { useNavigation } from '@react-navigation/native'
import courses from '../../assets/data/courses'

interface EpisodeProps {
  item: {
    id: 'string',
    title: 'string',
    skills: 'string',
    numberOfParts: 'string',
    time: 'string',
    plot: 'string',
    poster: 'string',

    parts: {
      id: 'string',
      name: 'string',
      number: 'string',
      duration: 'string',
      desc: 'string',
      video: 'string',
    }[]
  }
}


const Episode = (props: EpisodeProps) => {

  const { item } = props
  const navigation = useNavigation()

  const onEpisodePress = (part) => {
    navigation.navigate('Video', { id: part.id })
    console.log(item.id)
  }

  return (



    <FlatList
      data={item.parts}
      renderItem={({ item }) =>

        <Pressable style={styles.container} onPress={() => onEpisodePress(item)}>
          <View style={styles.numberBox}>
            <Text style={styles.number}>{item.number}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.textDescript}>{item.desc}</Text>
          </View>

          <View style={styles.timeBox}>
            <Text style={styles.time}>{item.duration}</Text>
          </View>
        </Pressable>
      }

    />





  )
}

export default Episode
