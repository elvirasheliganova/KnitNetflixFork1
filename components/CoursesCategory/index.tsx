import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { DataStore } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import { Category } from '../../src/models';
import { Course } from '../../src/models';



interface CoursesCategoryProps {
  category: Category,
  course: Course

}


const CoursesCategory = (props: CoursesCategoryProps) => {

  const navigation = useNavigation()

  const { category } = props

  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await (await DataStore.query(Course))
        .filter((course) => course.categoryID === category.id)
      setCourses(result)
    }
    fetchCourses()
  }, [])


  const onPress = (course: Course) => {
    navigation.navigate('CourseDetails', { id: course.id })
  }
  return (
    <View>
      <Text style={styles.title} >{category.title}</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <Pressable style={styles.imageContainer} onPress={() => onPress(item)} >
            <ImageBackground style={styles.image} source={{ uri: item.poster }} >
              <Text style={styles.courseTitle}>{item.title}</Text>
            </ImageBackground>
          </Pressable>
        )}
        horizontal
      />
    </View>
  )
}

export default CoursesCategory
