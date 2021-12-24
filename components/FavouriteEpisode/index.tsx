import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

import { useNavigation } from '@react-navigation/native'

const FavoriteEpisode = (props) => {

  const { item } = props
  const navigation = useNavigation()

  const onEpisodePress = (part) => {
    navigation.navigate('Video', { id: part.id })
    console.log(id)
  }

  return (
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
  )
}

export default FavoriteEpisode
