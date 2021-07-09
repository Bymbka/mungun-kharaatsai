import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App(props) {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        uri: props.route.params.videoUrl,
      }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
