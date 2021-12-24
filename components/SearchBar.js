import React from 'react'
import { View, Text, TextInput, Button, Keyboard, StyleSheet } from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons'



const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked 
          ? styles.searchBarUnclicked
          : styles.searchBarClicked
        }
      >
        <Feather 
          name="search" 
          size={20}  
          color={'black'} 
        />

        <TextInput
          style={styles.input} 
          placeholder='Search'
          placeholderTextColor={'darkgrey'}
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true)
          }}
        />
        
        {props.clicked && (
          <Entypo 
            name="cross" 
            size={20} 
            color={'black'}
            onPress={props.setSearchPhrase("")}
          />
        )

        }

      </View>
      {props.clicked && (
        <View>
          <Button 
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss()
              props.setClicked(false)
            }}
          ></Button>
        </View>
      )

      }
      

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },

  searchBarUnclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },

  searchBarClicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    
  }

})