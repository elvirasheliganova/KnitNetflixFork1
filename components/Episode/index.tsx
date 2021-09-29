import React, { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { DataStore } from 'aws-amplify';
import styles from './styles'
import { Course, Part } from '../../src/models'
import { useNavigation } from '@react-navigation/native'
import courses from '../../assets/data/courses'

interface EpisodeProps {
  course: Course,
  part: Part []
  }



const Episode = (props: EpisodeProps) => {

  const { course} = props
  const navigation = useNavigation()
  const [parts, setParts] = useState<Part[]>([])

  useEffect(() => {
    const fetchPart = async () => {
      const result = await (await DataStore.query(Part))
        .filter((part) => part.courseID === course.id)
      setParts(result)
    }
    fetchPart()
  })

  const onEpisodePress = (part) => {
    navigation.navigate('Video', { id: part.id })
    
  }

  return (
    <FlatList
      data={parts}
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
