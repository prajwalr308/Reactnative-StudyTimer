import React, { useState } from 'react'
import { View, Text, Button,TouchableOpacity } from 'react-native'
import CountDown from 'react-native-countdown-component';
import { StyleSheet} from 'react-native';
var Slider = require('react-native-slider');


const Stopwatch = () => {
    const [pause, setpause] = useState(true)
    return (
        <View>
             <CountDown
        running={pause}
        digitStyle={{backgroundColor: '#ffffff'}}
        digitTxtStyle={{color: '#4089ff'}}
        until={1000}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        size={30}
        timeToShow={[ 'H', 'M', 'S']}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
          setpause(!pause);
      }} title="pause"><Text style={{color:"white"}}>pause</Text></TouchableOpacity>
      <View>
      
      </View>
     
        </View>
       
    )
}

const styles = StyleSheet.create({
   buttonContainer: {
     width:100,
     backgroundColor:"#4089ff",
    height:50,
    paddingTop:15,
    paddingLeft:25,
    marginTop:20,
    marginLeft:"35%",
    borderRadius:10


    },
  });
  

export default Stopwatch
