import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Course } from '../../src/models';
import { Image, ImageBackground } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Episode from '../../components/Episode'
import styles from '../../screens/CourseDetailsScreen/styles'

import courses from '../../assets/data/courses'
import categories from '../../assets/data/categories';

const CourseHeader = (props) => {
  const { course } = props

  return (
    <View >
      <ImageBackground style={styles.image} source={{ uri: course.poster }} >
        <View style={styles.courseTitleBox}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.courseTime}>{course.time} hours - </Text>
            <Text style={styles.courseParts}>{course.numberOfParts} parts</Text>
          </View>
        </View>

      </ImageBackground>



      <View style={{ flexDirection: 'row', paddingVertical: 10, alignContent: 'center', paddingLeft: 15 }}>
        <Text style={styles.skills}>Skills needed </Text>
        <FontAwesome name="star" size={16} color='#b6b5b5' />
        <FontAwesome name="star" size={16} color='#b6b5b5' />
        <FontAwesome name="star" size={16} color='#b6b5b5' />
        <FontAwesome name="star-o" size={16} color='#b6b5b5' />
        <FontAwesome name="star-o" size={16} color='#b6b5b5' />
      </View>
      <View style={styles.courseDescriptBox}>
        <Text style={styles.courseDescript}>{course.plot}</Text>
      </View>
    </View>
  )
}

export default CourseHeader
