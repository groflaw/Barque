import {
  StatusBar,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import backImage from "../../assets/Icons/headerback.png";
import markImage from "../../assets/Icons/headermark.png";

import HomeBody from "../Components/HomeBody/HomeBody";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const HomeScreen = () => {
  const Stack = createNativeStackNavigator(); //Navigator Screen

  const { user } = useSelector((state) => state.Slice);

  const HomeHeaderRight = () => {
    return (
      <View
        className="p-5 mt-2 bg-white"
        style={{
          marginTop: StatusBar.currentHeight,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View className="relative flex flex-row items-center justify-center space-x-3">
          <TouchableOpacity style={styles.headerback}>
            <Image source={backImage}></Image>
          </TouchableOpacity>
          <Image source={markImage}></Image>
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator initialRouteName="HomeScreenBody">
      <Stack.Screen
        name="HomeScreenBody"
        component={HomeBody}
        options={{ header: () => <HomeHeaderRight /> }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerback: {
    position: "absolute",
    left: 0,
  },
});
export default HomeScreen;
