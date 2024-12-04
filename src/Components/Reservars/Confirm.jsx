import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import markImage from "../../../assets/Icons/boatallow.png";

const Confirm = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View className="flex flex-row items-center">
          <Text style={styles.title}>Booking Confirmed</Text>
          <Image source={markImage} className="ml-3"></Image>
        </View>
        <Text style={styles.des} className="mt-3">
          The user has xx hours to pay for the booking. Please keep an eye on
          the status of the booking over the next few hours.
        </Text>
        <View style={styles.btn} className="mt-3">
          <TouchableOpacity
            onPress={() => {
              nextStep();
            }}
          >
            <Text style={styles.btntext} className="text-center text-white">
              Go Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#efefef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
    padding: 16,
  },
  title: {
    color: "#030303",
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: 900,
  },
  des: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    lineHeight: 25,
  },
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 6,
    backgroundColor: "#17233c",
  },
  btntext: {
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 20,
  },
});
export default Confirm;
