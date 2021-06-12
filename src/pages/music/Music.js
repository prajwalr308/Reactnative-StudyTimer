import React, { useState } from 'react'
import { ScrollView,View, Text, TouchableOpacity, Image ,Button} from 'react-native'
import { Audio } from 'expo-av';
import data from '../../data/data'

const Music = () => {
  const [sound, setSound] = React.useState();

  async function playSound(audio) {
    

    console.log(audio);
    const { sound } = await Audio.Sound.createAsync(
     audio
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }
  async function pauseSound() {
    // console.log('Loading Sound');
    // const { sound } = await Audio.Sound.createAsync(
    //    require('../../audio/eg.mp3')
    // );
    // setSound(sound);

    // console.log('Playing Sound');
    await sound.pauseAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

    return (
      <ScrollView>
{data.map((audio,index)=>{
  return (
    <View key={index}>
      <Button title="Play Sound" onPress={()=>{playSound(audio.src)}}  />
 <Button title="pauuse Sound" onPress={pauseSound}  />
    </View>
  )
}) }
      </ScrollView>
    
        

    )
}


export default Music
