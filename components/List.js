import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import parts from '../assets/data/courses/parts'
import { useNavigation } from '@react-navigation/native'




const List = (props) => {
  const navigation = useNavigation()
  //const onPress = (item) => {
    //navigation.navigate('Video', {id: item.id })
    
  //}
  
  const Item = ({name, desc, id}) => {
    
   const onPress = () => navigation.navigate('Video', {id: id })
   //console.log({id})
  
    return (
    <Pressable 
      onPress={onPress}
      style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
      
      
    </Pressable>
    )
  }

  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      
      return <Item name={item.name} desc={item.desc} id={item.id} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
       
      return <Item name={item.name} desc={item.desc} id={item.id}/>;
    }
    // filter of the description
    if (item.desc.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
       
      return <Item name={item.name} desc={item.desc} id={item.id}/>;
    }
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <View 
         onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
         
          data={parts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          
          
            
        />
        
      
      </View>

    </SafeAreaView>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: "85%",
    width: "100%",
    backgroundColor: 'white'
  },
  title: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    
  },
  desc: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
})