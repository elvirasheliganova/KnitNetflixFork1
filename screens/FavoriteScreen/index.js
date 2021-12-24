import React, {useContext} from 'react'
import { View, Text, FlatList } from 'react-native'
import { FavContext } from '../../components/FavContext'
import Episode from '../../components/Episode'
import { StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import courses from '../../assets/data/courses'

const FavoriteScreen = () => {

  const [favs, setFavs] = useContext(FavContext)

  


  //const { item } = props
  const navigation = useNavigation()

  //const onEpisodePress = (favs) => {
    //navigation.navigate('Video', { id: part.id })
    //console.log(item.id)
  //}

  const onEpisodePress = (item) => {
    navigation.navigate('Video', { id: item.id })
    //console.log(id)
  }

  
  return (
    <View>
      <FlatList
      data={favs}
      renderItem={({item}) => (
        <Pressable style={styles.container} onPress={() => onEpisodePress(item)}>
          <View style={styles.numberBox}>
            <Text style={styles.number}>{item.number}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.textDescript}>{item.desc}</Text>
          </View>

          <View style={styles.timeBox}>
            <Text style={styles.time}>{item.duration}</Text>
          </View>
        </Pressable>
      )}

      
      />
      
    </View>
  )
}



const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    backgroundColor: "#6176734d",
    paddingLeft: 10,
    paddingVertical: 15,
    alignItems: 'flex-start',
    borderRadius: 10,
    margin: 10





  },
  numberBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#6176734d',
    justifyContent: 'center',
    alignItems: 'center'

  },
  number: {
    color: 'white',
    fontSize: 12
  },
  textBox: {
    width: '75%',

    paddingLeft: 15,

  },


  text: {

    fontSize: 18,
    fontWeight: 'bold',
    color: '#b6b5b5',
  },
  textDescript: {
    paddingTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: '#b6b5b5',

  },
  timeBox: {
    backgroundColor: '#4b77714a',
    padding: 5,
    borderRadius: 10
  },
  time: {
    color: '#b6b5b5',
    fontSize: 18,


  }
})



export default FavoriteScreen
