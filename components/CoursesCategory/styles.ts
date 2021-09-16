import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {


  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40
  },
  imageContainer: {
    width: 220,
    aspectRatio: 5 / 6,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'red',
    marginRight: 35,
    marginBottom: 15,
    marginTop: 25,
  },
  image: {
    width: 220,
    aspectRatio: 5 / 6,
    resizeMode: 'cover',



    justifyContent: 'center'
    //opacity: 0.7

  },
  courseTitle: {

    color: 'white',
    fontSize: 20,

    backgroundColor: "#617673a0",
    marginBottom: 40,
    padding: 10
  }
})

export default styles