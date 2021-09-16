import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styles from './styles'
import categories from '../../assets/data/categories'
import CoursesCategory from '../../components/CoursesCategory'

const CoursesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) =>
          <CoursesCategory category={item} />
        } />

    </View>
  )
}

export default CoursesScreen
