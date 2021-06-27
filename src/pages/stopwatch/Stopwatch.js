import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import CountDown from "react-native-countdown-component";
import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import water from "../../assets/water.gif";

const Stopwatch = () => {
  const [pause, setpause] = useState(false);
  const [timeState, setTimeState] = useState(0);
  const [hours, setHours] = useState(0);
  const [clockWidth, setClockWidth] = useState(20);
  useEffect(() => {
    var time = timeState;
    var hoursduration = time * 3600;
    setHours(hoursduration);
    var clock = Dimensions.get("window").width / 13;
    setClockWidth(clock);
    console.log(Dimensions.get("window").height);
  }, [timeState, hours]);
  return (
    <View style={styles.viewTag}>
      <Image style={styles.imageGif} source={water}></Image>
      <View style={styles.container}>
        <CountDown
          running={pause}
          digitStyle={{ backgroundColor: "#ffffff" }}
          digitTxtStyle={{ color: "#4089ff" }}
          until={hours * 3600}
          onFinish={() => alert("finished")}
          size={clockWidth}
          timeToShow={["H", "M", "S"]}
        />
      </View>
      <View style={styles.buttonView}>
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
      </View>
      <View style={styles.sliderView}>
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
      <View style={styles.bottomView}>
        <Text style={styles.centerText}>{timeState}hrs</Text>

        <TouchableOpacity
          style={styles.buttonContainerTime}
          onPress={() => {
            setHours(timeState);
          }}
        >
          <Text style={{ color: "white" }}>set time</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTag: {
    flex: 1,
    // borderWidth:6,
    // borderColor:"red",

    width: "100%",
    height: "100%",
  },
  buttonView: {
    flex: 0.1,
    // borderWidth:6,
    // borderColor:"red"
  },
  sliderView: {
    flex: 0.1,
    //   borderWidth:6,
    // borderColor:"red"
  },
  bottomView: {
    flex: 0.2,
    // borderWidth:6,
    // borderColor:"red"
  },
  container: {
    flex: 0.2,
    // position:"absolute",
    // top:"26%",
    alignSelf: "center",
    //   borderWidth:6,
    // borderColor:"red"
  },
  buttonContainerPause: {
    marginTop: "5%",
    width: "40%",
    backgroundColor: "#fabd39",
    height: "60%",
    alignItems: "center",

    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonContainerPlay: {
    marginTop: "5%",
    width: "40%",
    backgroundColor: "#4089ff",
    height: "60%",
    alignItems: "center",

    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonContainerTime: {
    // flex:0.1,

    width: "30%",
    backgroundColor: "#4089ff",
    height: "40%",
    alignItems: "center",

    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  slider: {
    marginTop: "10%",
    width: "50%",

    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    alignSelf: "center",
  },

  imageGif: {
    //  position:"absolute",
    alignSelf: "center",
    // top:"-25%",
    flex: 0.4,
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  centerText: {
    marginTop: "4%",
    alignSelf: "center",
    fontSize: 25,
    color: "#4089ff",
  },
});

export default Stopwatch;
