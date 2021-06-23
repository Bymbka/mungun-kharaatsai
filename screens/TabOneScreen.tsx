import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
  Image,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Video, AVPlaybackStatus } from "expo-av";

const image = { uri: "https://reactjs.org/logo-og.png" };
const windowWidth = Dimensions.get("window").width;
const windowHeght = Dimensions.get("window").height;

export default function TabOneScreen() {
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
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          Live broadcast
        </Text>
        <ImageBackground
          style={{
            width: windowWidth - 60,
            height: windowWidth / 2 - 20,
            marginLeft: 30,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwxl2r_4q6MW_iJYCX4RIYGZkQLLoPpG-mg&usqp=CAU",
          }}
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
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
