import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { DataStore } from 'aws-amplify';
import styles from './styles'
//import categories from '../../assets/data/categories'
import CoursesCategory from '../../components/CoursesCategory'
import { Category } from '../../src/models'


const CoursesScreen = () => {

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await DataStore.query(Category))

    }
    fetchCategories()
  }, [])

  return (

    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) =>
          <CoursesCategory category={item} />
        } />

    </View>
  )
}

export default CoursesScreen
