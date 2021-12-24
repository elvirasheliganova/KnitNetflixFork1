import React from 'react'
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import FavoriteScreen from '../screens/FavoriteScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { FavProvider } from './FavContext';
import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <FavProvider>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme].tint,
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomeNavigator}
          options={({ navigation }) => ({
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={20} style={{ marginBottom: -20 }} />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          })}
        />
        <BottomTab.Screen
          name="Favs"
          component={FavoriteScreen}
          options={{
            title: 'Favourites',
            tabBarIcon: ({ color }) => <FontAwesome name="heart-o" color={color} size={20} style={{ marginBottom: -20 }} />,
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <Ionicons name="search" color={color} size={20} style={{ marginBottom: -20 }} />,
          }}
        />
        {/*<BottomTab.Screen
          name="Download"
          component={TabTwoScreen}
          options={{
            title: 'Download',
            tabBarIcon: ({ color }) => <AntDesign name="download" color={color} size={20} style={{ marginBottom: -20 }} />,
          }}
        />*/}
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} style={{ marginBottom: -20 }} />,
          }}
        />
      </BottomTab.Navigator>
    </FavProvider>
  )
}

export default BottomTabNavigator
