import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";
import data from "../../data/data";
import { Card, Button } from "react-native-paper";
import { StyleSheet } from "react-native";

const Music = () => {
  const [sound, setSound] = React.useState();

  async function playSound(audio) {
    console.log(audio);
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
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
                source={{ uri: "https://picsum.photos/700" }}
              />

              <View style={styles.buttonView}>
                <Button
                  labelStyle={{ fontSize: 34 }}
                  color="white"
                  style={styles.PlayButton}
                  icon="play"
                  onPress={() => {
                    playSound(audio.src);
                  }}
                ></Button>
                <Button
                  labelStyle={{ fontSize: 34 }}
                  color="white"
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
    top: 50,
    left: 20,
    color: "white",
    fontSize: 20,
  },
  buttonView: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: -10,
  },
  PlayButton: {},
  PauseButton: {},
});

export default Music;
