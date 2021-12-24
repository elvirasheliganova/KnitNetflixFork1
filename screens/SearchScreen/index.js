import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import SearchBarOne from '../../components/SearchBarOne'
import List from '../../components/List'


const SearchScreen = () => {

    const [searchPhrase, setSearchPhrase] = useState("")
    const [clicked, setClicked] = useState(false)
    console.log(searchPhrase)
  return (
    <SafeAreaView style={{marginTop: 60}}>
      
      {!clicked && <Text style={{color: 'white', fontSize: 20, marginLeft: 20}}>What are you interested in?</Text>}
      <SearchBarOne
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      
    <List
        searchPhrase={searchPhrase}
        setClicked={setClicked}
       />
    </SafeAreaView>
  )
}

export default SearchScreen
