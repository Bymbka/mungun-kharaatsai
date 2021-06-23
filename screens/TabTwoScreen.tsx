import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  Alert,
} from "react-native";
import { Text, View } from "../components/Themed";
import firebase from "./util/firebase";
import { useIsFocused } from "@react-navigation/native";
import iconSet from "@expo/vector-icons/build/Fontisto";

// interface Props {
//   navigation: any;
//   route: any;
// }

// import heart from '../assets/images/like.png';

const windowWidth = Dimensions.get("window").width;
const windowHeght = Dimensions.get("window").height;

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View
      style={{
        flexDirection: "row",
        height: 80,
      }}
    >
      <View style={{ flex: 0.2 }}>
        <Image
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            resizeMode: "cover",
            margin: 5,
          }}
          source={{
            uri: item.flagImg,
          }}
        />
      </View>
      <View style={{ flexDirection: "column", flex: 0.4, padding: 5 }}>
        <Text style={styles.title}>{item.nickname}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={{ flex: 0.3, padding: 5 }}>
        <ImageBackground
          style={{
            height: 60,
            width: 90,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          source={{
            uri: item.videoImg,
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 5,
              resizeMode: "stretch",
            }}
            source={require("../assets/images/play.png")}
          />
        </ImageBackground>
      </View>
      <TouchableOpacity
        style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{
            height: 40,
            width: 40,
            borderRadius: 35,
            resizeMode: "stretch",
          }}
          source={require("../assets/images/like.png")}
        />
        <Text style={{ fontSize: 15, fontWeight: "700", color: "#ffae68" }}>
          {item.like}
        </Text>
      </TouchableOpacity>
    </View>
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  </TouchableOpacity>
);

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [allList, setAllList] = useState();
  const [dbList, setDbList] = useState();
  const [cate1, setCate1] = useState(true);
  const [cate2, setCate2] = useState(false);
  const [cate3, setCate3] = useState(false);

  useEffect(() => {
    const dbselect = firebase.database().ref("VideoDB");
    dbselect.on("value", (snapshot) => {
      const data = snapshot.val();
      const allList = [];
      for (let i in data) {
        allList.push(data[i]);
      }
      setAllList(allList);
      setDbList(allList.filter((el) => el.category.toLowerCase().includes(1)));
      setCate1(true);
      setCate2(false);
      setCate3(false);
    });
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = "#fff";
    return (
      <Item
        item={item}
        onPress={() => videoDetail(item.videoUrl, item)}
        style={{ backgroundColor }}
      />
    );
  };

  const videoDetail = async (url: string, item: object) => {
    const { navigate } = this.props.navigation;
    //console.warn(item.videoUrl);
    navigate("TabTwoStack", {
      screen: "TabTwoVideoDetail",
    });
    // navigation.navigate("TabTwoVideoDetail");
  };

  const cateSelect = async () => {
    setDbList(allList.filter((el) => el.category.toLowerCase().includes(1)));
    setCate1(true);
    setCate2(false);
    setCate3(false);
  };
  const cateSelect1 = async () => {
    setDbList(allList.filter((el) => el.category.toLowerCase().includes(2)));
    setCate1(false);
    setCate2(true);
    setCate3(false);
  };
  const cateSelect2 = async () => {
    setDbList(allList.filter((el) => el.category.toLowerCase().includes(3)));
    setCate1(false);
    setCate2(false);
    setCate3(true);
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 30,
          width: windowWidth - 60,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={cate1 == true ? styles.selectCate : styles.cate}
          onPress={() => cateSelect()}
        >
          <Text style={styles.title}>Music</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={cate2 == true ? styles.selectCate : styles.cate}
          onPress={() => cateSelect1()}
        >
          <Text style={styles.title}>Song</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={cate3 == true ? styles.selectCate : styles.cate}
          onPress={() => cateSelect2()}
        >
          <Text style={styles.title}>Dance</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dbList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  description: {
    fontSize: 23,
    fontWeight: "normal",
  },
  separator: {
    height: 3,
    width: "80%",
    alignSelf: "flex-end",
  },
  selectCate: {
    flex: 0.3,
    backgroundColor: "#ffae68",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 30,
  },
  cate: {
    flex: 0.3,
    backgroundColor: "#fff",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    padding: 10,
  },
});
