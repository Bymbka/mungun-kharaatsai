/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import TabTwoVideoDetail from "../screens/TabTwoVideoDetail";
import LivePlayer from "../screens/LivePlayer";

import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const NAVIGATION_TRANSITION_EFFECT = {
  ...TransitionPresets.SlideFromRightIOS,
};

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Live"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        labelPosition: "beside-icon",
      }}
    >
      <BottomTab.Screen
        name="Live"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="flash" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Video"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="videocam" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Rank"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="stats-chart" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
      <TabTwoStack.Screen
        name="LivePlayer"
        component={LivePlayer}
        options={{ headerTitle: "Live" }}
        initialParams={{ videoUrl: "hellow world" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
      <TabTwoStack.Screen
        name="TabTwoVideoDetail"
        component={TabTwoVideoDetail}
        options={{ headerTitle: "Video player" }}
        initialParams={{ videoUrl: "hellow world" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerShown: false }}
      />
      <TabTwoStack.Screen
        name="TabTwoVideoDetail"
        component={TabTwoVideoDetail}
        options={{ headerTitle: "Video player" }}
        initialParams={{ videoUrl: "" }}
      />
    </TabThreeStack.Navigator>
  );
}
