import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/home";
import Map from "./pages/map";
import Charts from "./pages/charts";
const Tab = createBottomTabNavigator();

const TabsContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "sweet home" }}
      />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Chart" component={Charts} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabsContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
