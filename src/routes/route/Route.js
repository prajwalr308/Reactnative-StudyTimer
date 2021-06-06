import * as React from 'react'
import { View } from 'react-native'
// import BottomNavigationComp from '../../components/bottomNavigation/ButtomNavigation'


import Header from '../../components/header/Header'
import Stopwatch from '../../pages/stopwatch/Stopwatch'


import { BottomNavigation, Text } from 'react-native-paper';

const StudyRoute = () =>{return(
    <View style={{backgroundColor:"white"}}><Header />
    <Stopwatch /></View>
    )} ;

const MusicRoute = () => {return(
    <View style={{backgroundColor:"white"}}><Header />
  </View>
    )} ;



const Route = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'study', title: 'Study', icon: 'home' ,},
    { key: 'music', title: 'Music', icon: 'album', },
   
  ]);

  const renderScene = BottomNavigation.SceneMap({
    study:StudyRoute,
    music: MusicRoute,
   
    
  });

  return (
    
   <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="white"
      inactiveColor="#9fcced"

      barStyle={{ backgroundColor: '#4089ff' }}
  
     
    />
    
 
  );
};


// const Home = () => {
//     return (
//         <View>
//               <Header />
//               <Stopwatch />
//               <BottomNavigationComp />
          
//         </View>
   
//     )
// }

export default Route
