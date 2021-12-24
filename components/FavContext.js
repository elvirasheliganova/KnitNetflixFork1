import React, {useState, createContext} from "react";
import EpisodeVideoScreen from "../screens/EpisodeVideoScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

export const FavContext = createContext()

export const FavProvider = props => {

  const [favs, setFavs] = useState([
    {
      id: 'part21',
      name: 'what is The Magic Loop',
      number: '1',
      duration: '10:09',
      desc: '4The Magic Loop method is way of creating pieces with small circumferences (think sweater sleeves or socks) by using just one long, circular needle.',
      video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  
  
    },
    {
      id: 'part22',
      name: "how to cast on by Judy's method",
      number: '2',
      duration: '4:50',
      desc: '5There are advantages to knitting socks toe-up. You can knit both socks at the same time and stop when your yarn runs out.',
      video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    },
  
  ])
  
  return(
    <FavContext.Provider value={[favs, setFavs]}>
      {props.children}



    </FavContext.Provider>

  )
}