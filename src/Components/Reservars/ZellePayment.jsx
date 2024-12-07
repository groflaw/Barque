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

import CustomTextInput from "../Basic/Input";
import zelle from "../../../assets/Icons/zelle.png";

const ZellePayment = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("PaymentConfirm");
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View className="flex flex-row gap-4">
          <Text style={styles.title}>Zelle Payment</Text>
          <Image source={zelle}></Image>
        </View>
        <Text style={styles.des} className="mt-4">
          Thank you for choosing Barquea for your adventure! Please complete
          your payment via Zelle using our registered
        </Text>
        <Text style={[styles.des, { fontWeight: 700 }]}>
          email: pagos@barquea.com{" "}
        </Text>
        <View style={styles.hr}></View>
        <Text style={styles.des} className="mt-3 mb-3">
          Once your payment is processed, input your Zelle confirmation number
          below to finalize your booking.
        </Text>
      </View>
      <Text style={styles.title} className="mt-4">
        Amount: $500
      </Text>
      <Text style={[styles.des, { fontWeight: 700 }]} className="mt-4">
        Enter your Zelle Confirmation Number:
      </Text>
      <CustomTextInput></CustomTextInput>
      <View style={styles.btn} className="mt-3">
        <TouchableOpacity
          onPress={() => {
            nextStep();
          }}
        >
          <Text style={styles.btntext} className="text-center text-white">
            Submit Confirmation Number
          </Text>
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
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: 900,
  },
  des: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    lineHeight: 22,
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
  hr: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
export default ZellePayment;
