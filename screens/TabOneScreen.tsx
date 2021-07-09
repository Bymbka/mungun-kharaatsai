import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
  Image,
  Alert,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Video, AVPlaybackStatus } from "expo-av";
import axios from "./util/axios-ordera";
import { strict } from "yargs";

const image = { uri: "https://reactjs.org/logo-og.png" };
const windowWidth = Dimensions.get("window").width;
const windowHeght = Dimensions.get("window").height;

export default function TabOneScreen(props) {
  const [liveTitle, setLiveTitle] = useState(String);
  const [liveDescriptionTitle, setLiveDescriptionTitle] = useState(String);
  const [liveDescription, setLiveDescription] = useState(String);
  const [liveBackImage, setLiveBackImage] = useState(Object);
  const [liveVideoStream, setLiveVideoStream] = useState(String);
  const image = { uri: "https://reactjs.org/logo-og.png" };
  useEffect(() => {
    axios.get("/LiveDB.json").then((response) => {
      const arr = Object.entries(response.data);
      // arr.forEach((el) => {
      //   console.log(el[1].descriptionTitle);
      // });
      const lastOrder = arr[arr.length - 1][1];
      setLiveTitle(lastOrder.title);
      setLiveDescriptionTitle(lastOrder.descriptionTitle);
      setLiveDescription(lastOrder.description);
      setLiveBackImage({ uri: lastOrder.image });
      setLiveVideoStream(lastOrder.liveUrl);
    });
  }, []);

  const liveStart = () => {
    if (liveVideoStream.length > 5) {
      const { navigate } = props.navigation;
      navigate("LivePlayer", {
        videoUrl: liveVideoStream,
      });
    } else {
      Alert.alert("LIVE олдсонгүй");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: windowWidth,
          height: 100,
          alignItems: "center",
          marginTop: 20,
          paddingLeft: 20,
        }}
      >
        <View style={{ margin: 10 }}>
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 5,
              resizeMode: "stretch",
            }}
            source={require("../assets/images/mklogo.png")}
          />
        </View>
        <View>
          <Text style={styles.title}>Mungun Kharaatsai</Text>
          <Text style={{ color: "#000" }}>
            International Children's Virtual Festival
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            marginLeft: 30,
            fontWeight: "bold",
            fontSize: 15,
            marginBottom: 10,
          }}
        >
          {liveTitle}
        </Text>
        <TouchableHighlight
          style={{
            width: windowWidth - 60,
            height: windowWidth / 2 - 20,
            marginLeft: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => liveStart()}
        >
          <ImageBackground
            style={{
              width: windowWidth - 60,
              height: windowWidth / 2 - 20,

              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
            source={liveBackImage}
          >
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 5,
                resizeMode: "stretch",
              }}
              source={require("../assets/images/play.png")}
            />
          </ImageBackground>
        </TouchableHighlight>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
          }}
        >
          {liveDescriptionTitle}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
          }}
        >
          {liveDescription}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    borderRadius: 20,
    backgroundColor: "#cecece",
    height: 150,
    width: windowWidth - 40,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    height: 150,
    width: windowWidth - 40,
    borderRadius: 20,
  },
  text: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
