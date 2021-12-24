import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CoursesScreen from '../screens/CoursesScreen'
import CourseDetailsScreen from '../screens/CourseDetailsScreen'
import EpisodeVideoScreen from '../screens/EpisodeVideoScreen'

const HomeStack = createNativeStackNavigator()

const HomeNavigator = () => {
  return (
    


    <HomeStack.Navigator>
      <HomeStack.Screen name='Courses' component={CoursesScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name='CourseDetails' component={CourseDetailsScreen} options={{
        title: '',
      }} />
      <HomeStack.Screen name='Video' component={EpisodeVideoScreen} options={{ headerShown: true }} />


    </HomeStack.Navigator>
  );
}
  


export default HomeNavigator
