import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";
import data from "../../data/data";
import { Card, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import music from '../../assets/music.jpg'

const Music = () => {
  const [sound, setSound] = React.useState();

  async function playSound(audio) {
    console.log(audio);
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
    sound.setIsLoopingAsync(true);
  }
  async function pauseSound() {
    // console.log('Loading Sound');
    // const { sound } = await Audio.Sound.createAsync(
    //    require('../../audio/eg.mp3')
    // );
    // setSound(sound);

    // console.log('Playing Sound');
    await sound.pauseAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ScrollView>
      {data.map((audio, index) => {
        return (
          <View style={{ position: "relative" }} key={index}>
            <Card style={styles.cardContainer}>
              <Text style={styles.floatingText}>{audio.name}</Text>
              <Card.Cover
                style={styles.coverImage}
                source={music}
              />

              <View style={styles.buttonView}>
                <Button
                  labelStyle={{ fontSize: 34 }}
                  color="#4089ff"
                  style={styles.PlayButton}
                  icon="play"
                  onPress={() => {
                    playSound(audio.src);
                  }}
                ></Button>
                <Button
                  labelStyle={{ fontSize: 34 }}
                  color="#4089ff"
                  style={styles.PauseButton}
                  icon="pause"
                  onPress={pauseSound}
                ></Button>
              </View>
            </Card>
          </View>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  coverImage: {
    height: 100,
    borderBottomEndRadius: 10,
  },
  cardContainer: {
    marginBottom: 10,
  },
  floatingText: {
    position: "absolute",
    zIndex: 1,
    bottom:15,
    right: 10,
    color: "black",
    fontSize: 20,
    width:"40%"
  },
  buttonView: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: -20,
  },
  PlayButton: {},
  PauseButton: {},
});

export default Music;
