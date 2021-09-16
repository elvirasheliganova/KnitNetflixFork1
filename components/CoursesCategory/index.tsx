import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styles from './styles'


interface CoursesCategoryProps {
  category: {
    id: 'string',
    title: 'string',
    movies: {
      id: 'string',
      poster: 'string'
    }[]
  }
}


const CoursesCategory = (props: CoursesCategoryProps) => {

  const { category } = props
  return (
    <View>
      <Text style={styles.title} >{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <ImageBackground style={styles.image} source={{ uri: item.poster }} >
              <Text style={styles.courseTitle}>{item.title}</Text>
            </ImageBackground>
          </View>
        )}
        horizontal
      />
    </View>
  )
}

export default CoursesCategory
