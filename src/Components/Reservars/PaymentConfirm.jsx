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
import payconfirm from "../../../assets/Background/payconfirm.png";
import mark from "../../../assets/Icons/nav-boat.png";

const PaymentConfirm = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={payconfirm}
          style={{ width: "100%", height: 200 }}
        ></Image>
        <Image source={mark} className="absolute top-5 right-5"></Image>
      </View>
      <Text style={styles.title} className="mt-5">
        Thanks for your Payment
      </Text>
      <Text style={styles.des} className="mt-4">
        Your reservation will appear as "Confirmed" once the payment is fully
        processed.
      </Text>
      <View style={styles.card} className="mt-5">
        <Text style={styles.name}>Next Steps</Text>
        <Text style={styles.des} className="mt-4">
          -Your reservation will appear as "Confirmed" once the payment is fully
          processed.
        </Text>
        <Text style={styles.des} className="mt-4">
          - Get ready to enjoy your trip!
        </Text>
      </View>
      <View className="justify-center items-center flex mt-7">
        <TouchableOpacity
          onPress={() => {
            nextStep();
          }}
        >
          <View style={styles.btn} className="w-40 ">
            <Text style={styles.btntext} className="text-white text-center">
              Home
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
  name: {
    color: "#030303",
    fontSize: 17,
    fontFamily: "Roboto",
    fontWeight: 900,
  },
});
export default PaymentConfirm;
