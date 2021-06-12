import React, { useState } from 'react'
import { ScrollView,View, Text, TouchableOpacity, Image ,Button} from 'react-native'
import { Audio } from 'expo-av';


const Music = () => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../../audio/eg.mp3')
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
 <Button title="Play Sound" onPress={playSound} />
 <Button title="pauuse Sound" onPress={pauseSound} />
      </ScrollView>
    
        

    )
}


export default Music
