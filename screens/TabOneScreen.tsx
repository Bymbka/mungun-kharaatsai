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
      <Text style={styles.title}>Tab One</Text>

      <TouchableHighlight style={styles.banner}>
        <View>
          <ImageBackground
            style={styles.image}
            source={require("../assets/images/AppIcons/live.jpg")}
          >
            <Image
              style={styles.image}
              source={require("../assets/images/AppIcons/live.jpg")}
            />
          </ImageBackground>
        </View>
      </TouchableHighlight>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
