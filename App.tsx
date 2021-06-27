import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import firebase from "./screens/util/firebase";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  const addtodata = firebase.database().ref("LiveDB");
  const addtodataVideo = firebase.database().ref("VideoDB");
  const mungunkharaatsai = {
    id: 1,
    descriptionTitle: "Lorem ipsum",
    description: "Test etst teste teste tetstetet stet stet",
    title: "Live Broadcast",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwxl2r_4q6MW_iJYCX4RIYGZkQLLoPpG-mg&usqp=CAU",
    liveUrl:
      "https://video.fuln11-1.fna.fbcdn.net/hvideo-ftw-ldc/_nc_cat-110/v/rZJzT5JbPKpk9v5Meqd06/_nc_ohc-PLt05MJsoPYAX-i3v0L/live-dash/ID/dash-lp-ld-a/3021610664738656_0-2263.m4a?ms=m_C&ccb=2-4&_nc_sc=1",
  };
  const videoAll = {
    id: 1,
    flagImg: "https://pbs.twimg.com/media/CJgpPSHUsAAQt6S.png",
    country: "Mongolia",
    nickname: "Bat",
    description: "creation 1",
    videoUrl:
      "https://raw.githubusercontent.com/Bymbka/Nairamdal/main/record4.mov",
    videoImg: "https://pbs.twimg.com/media/CJgpPSHUsAAQt6S.png",
    like: "12",
    category: {
      dff: "",
    },
  };
  //addtodata.push(mungunkharaatsai);
  // addtodataVideo.push(videoAll);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
