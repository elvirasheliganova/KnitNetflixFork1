import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Auth } from 'aws-amplify'
import styles from './styles'

const ProfileScreen = () => {

  const onLogout = () => {
    Auth.signOut()
  }
  return (
    <>

      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={onLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>

      </View>
    </>
  )
}

export default ProfileScreen
