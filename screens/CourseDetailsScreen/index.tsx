import React from 'react'
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Image, ImageBackground, ActivityIndicator } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { DataStore } from 'aws-amplify';
import Episode from '../../components/Episode'
import styles from './styles'
import { Course } from '../../src/models'
import movies from '../../assets/data/movie'
import items from '../../assets/data/courses';
import categories from '../../assets/data/categories';

import CourseHeader from '../../components/CourseHeader';


const CourseDetailsScreen = () => {

  const [course, setCourse] = useState<Course | null>(null)


  const route = useRoute()




  //const item = items.find(item => item.id === route.params.id)

  useEffect(() => {
    const fetchCourse = async () => {
      setCourse(await DataStore.query(Course, route?.params?.id))
    }

    fetchCourse()

  }, [])
  if (!course) {
    return <ActivityIndicator />
  }

  console.log(course)
  //console.log(course)
  //console.log(item.id)
  return (
    <View style={styles.container}>


      <View>
        <CourseHeader course={course} />
      </View>
      <View>
        <Episode course={course} />
      </View>

    </View>
  )
}

export default CourseDetailsScreen
