import React from 'react'
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Image, ImageBackground } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Episode from '../../components/Episode'
import styles from './styles'
import movies from '../../assets/data/movie'
import items from '../../assets/data/courses';
import categories from '../../assets/data/categories';

import CourseHeader from '../../components/CourseHeader';


const CourseDetailsScreen = () => {




  const route = useRoute()

  console.log(route.params.id)


  const item = items.find(item => item.id === route.params.id)

  console.log(item.id)
  return (
    <View style={styles.container}>
      <View>
        <CourseHeader item={item} />
      </View>
      <View>
        <Episode item={item} />
      </View>

    </View>
  )
}

export default CourseDetailsScreen
