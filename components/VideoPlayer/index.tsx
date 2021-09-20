import React from 'react'
import { View, Text } from 'react-native'

const VideoPlayer = (props) => {

  const { part } = props

  return (
    <View>
      <Text style={{ color: 'white', padding: 60 }}>{part.plot}</Text>
    </View>
  )
}

export default VideoPlayer
