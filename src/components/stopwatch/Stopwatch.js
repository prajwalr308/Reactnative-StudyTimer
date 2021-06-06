import React, { useEffect, useState } from 'react'
import { View, Text, Button,TouchableOpacity } from 'react-native'
import CountDown from 'react-native-countdown-component';
import { StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';


const Stopwatch = () => {
    const [pause, setpause] = useState(true);
    const [timeState, setTimeState] = useState(0);
    const [hours, setHours] = useState(0)
    useEffect(() => {
      var time=timeState;
      var hours=timeState*3600;
     setHours(hours)
      
    }, [timeState])
    return (
        <View>
             <CountDown
        running={pause}
        digitStyle={{backgroundColor: '#ffffff'}}
        digitTxtStyle={{color: '#4089ff'}}
        until={hours}
        onFinish={() => alert('finished')}
    
        size={30}
        timeToShow={[ 'H', 'M', 'S']}
      />
    {pause?  <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
          setpause(!pause);
      }} title="pause"><Text style={{color:"white"}}>pause</Text></TouchableOpacity>:<TouchableOpacity style={styles.buttonContainer} onPress={()=>{
        setpause(!pause);
    }} title="pause"><Text style={{color:"white"}}>Resume</Text></TouchableOpacity>}
      <View>
      <Slider
      style={styles.slider}
        maximumValue={10}
        minimumValue={0}
        minimumTrackTintColor="#4089ff"
        maximumTrackTintColor="#4089ff"
        thumbTintColor="#4089ff"
          step={1}
         
        
          value={timeState}
          onValueChange={(timeState)=>setTimeState(timeState) }
        />
      </View>
      <Text>{timeState}</Text>
     
        </View>
       
    )
}

const styles = StyleSheet.create({
   buttonContainer: {
     width:100,
     backgroundColor:"#4089ff",
    height:50,
    alignItems:"center",
    marginTop:20,
  alignSelf:'center',
    borderRadius:10,
   justifyContent: "center",


    },
    slider:{
      marginTop:20,
      width: 200, 
      height:50,
      transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
      alignSelf:'center',
    }
  });
  

export default Stopwatch
