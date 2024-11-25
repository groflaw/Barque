import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import convertBoatImage from "../../../../assets/Icons/convertBoat.png";
import asyncImage from "../../../../assets/Icons/async.png";

import { addUser } from "../../../Store/Slice";
import { setMode,setCurboat,setCurhost } from "../../../Store/Global";

const Convert = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
 
  const mode = useSelector((state) => state.Global.mode);

  const handlelogout = () => {
    dispatch(addUser({}));
    dispatch(setCurboat({}));
    dispatch(setCurhost({}));
    dispatch(setMode(false));
    navigation.navigate("Main");
  };
  
  return (
    <>
      <View style={styles.container}>
        <View className="flex flex-row items-center justify-between ">
          <View style={styles.boat} className="relative flex " >
            <Image source={convertBoatImage}></Image>
            <View className="absolute" style={styles.async}>
              <Image source={asyncImage}></Image>
            </View>
          </View>
          <View className="flex justify-around" style={{width:'72%'}}>
            <Text style={styles.head}>{mode ? "Back to Customer Mode" : "Are you a boat owner?"}</Text>
            <Text style={styles.des}>
              {mode ? "Click this button to switch to Customer mode to rent a boat." : "Click this button to switch to Host Mode and manage your boat reservations."}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex items-center">
        <TouchableOpacity
          onPress={() => {
            handlelogout();
          }}
        >
          <Text className="flex text-center" style={styles.button}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 26,
    padding: 10,
    margin: 10,
  },
  boat: {
    backgroundColor: "#17233c",
    borderRadius: 8,
    padding: 15,
    margin: 10,
    
  },
  async: {
    bottom: 8,
    right: 8,
    padding: 0,
    backgroundColor: "white",
    borderRadius: 50,
  },
  head: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 22,
  },
  des: {
    color: "#17233c",
    fontSize: 11,
    fontFamily: "Lexend Deca",
    fontWeight: "300",
    lineHeight: 16,
    flexWrap: "wrap",
  },
  button: {
    color: "#0751c1",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "600",
    lineHeight: 26,
  },
});
export default Convert;
