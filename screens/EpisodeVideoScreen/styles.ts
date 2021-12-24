import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  video: {
    width: '100%',
    height: 200,
    marginTop: 60, 
    borderRadius: 10,
  },
  buttons: {


  },
  textBox: {
    flex: 1,
    borderRadius: 10,
    
    backgroundColor: "#6176734d",
    margin: 5,

    padding: 15,

  },
  textDescript: {
    
    fontSize: 14,
    lineHeight: 20,
    color: '#b6b5b5',

  },
  like: {
    margin: 15,
    alignSelf: 'flex-end'
  }
})

export default styles