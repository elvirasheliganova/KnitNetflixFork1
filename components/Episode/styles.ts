
import { StyleSheet } from 'react-native'

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

export default styles