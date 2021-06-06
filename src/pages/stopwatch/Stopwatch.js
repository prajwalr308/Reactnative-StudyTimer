import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import CountDown from "react-native-countdown-component";
import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import water from "../../assets/water.gif";

const Stopwatch = () => {
  const [pause, setpause] = useState(false);
  const [timeState, setTimeState] = useState(0);
  const [hours, setHours] = useState(0);
  useEffect(() => {
    var time = timeState;
    var hoursduration = time * 3600;
    setHours(hoursduration);
  }, [timeState, hours]);
  return (
    <View>
      <Image style={styles.imageGIf} source={water}></Image>
      <CountDown
        running={pause}
        digitStyle={{ backgroundColor: "#ffffff" }}
        digitTxtStyle={{ color: "#4089ff" }}
        until={hours * 3600}
        onFinish={() => alert("finished")}
        size={30}
        timeToShow={["H", "M", "S"]}
      />
      {pause ? (
        <TouchableOpacity
          style={styles.buttonContainerPause}
          onPress={() => {
            setpause(!pause);
          }}
          title="pause"
        >
          <Text style={{ color: "white" }}>Pause</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonContainerPlay}
          onPress={() => {
            setpause(!pause);
          }}
          title="pause"
        >
          <Text style={{ color: "white" }}>Start</Text>
        </TouchableOpacity>
      )}
      <View>
        <Slider
          style={styles.slider}
          maximumValue={13}
          minimumValue={0}
          minimumTrackTintColor="#4089ff"
          maximumTrackTintColor="#4089ff"
          thumbTintColor="#4089ff"
          step={1}
          value={timeState}
          onValueChange={(timeState) => setTimeState(timeState)}
        />
      </View>
      <Text style={styles.centerText}>{timeState}hrs</Text>
      <TouchableOpacity
        style={styles.buttonContainerPlay}
        onPress={() => {
          setHours(timeState);
        }}
      >
        <Text style={{ color: "white" }}>set time</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainerPause: {
    width: 100,
    backgroundColor: "#fabd39",
    height: 50,
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonContainerPlay: {
    width: 100,
    backgroundColor: "#4089ff",
    height: 50,
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },

  slider: {
    marginTop: 20,
    width: 200,
    height: 50,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    alignSelf: "center",
  },
  imageGIf: {
    alignSelf: "center",
    height: 320,
  },
  centerText: {
    alignSelf: "center",
    fontSize: 40,
    color: "#4089ff",
  },
});

export default Stopwatch;
