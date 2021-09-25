import React from 'react'
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


interface CoursesCategoryProps {
  category: {
    id: 'string',
    title: 'string',
    courses: {
      id: 'string',
      poster: 'string'
    }[]
  }
}


const CoursesCategory = (props: CoursesCategoryProps) => {

  const navigation = useNavigation()

  const { category } = props
  const onPress = (course: { id: any; }) => {
    navigation.navigate('CourseDetails', { id: course.id })
  }
  return (
    <View>
      <Text style={styles.title} >{category.title}</Text>
      <FlatList
        data={category.courses}
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
