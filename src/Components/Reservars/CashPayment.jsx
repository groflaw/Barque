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

const CashPayment = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("SelectPayment");
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cash Payments</Text>
        <Text style={styles.des} className="mt-2">
          In order to confirm your booking you will need to pay 10% of the
          amount with an online method
        </Text>
        <View style={styles.hr} />
        <Text style={styles.des} className="mt-2">
          The remaining amount should be paid in cash directly to your host!
        </Text>
      </View>
      <View style={styles.btn} className="mt-3">
          <TouchableOpacity
            onPress={() => {
              nextStep();
            }}
          >
            <Text style={styles.btntext} className="text-center text-white">
              Select your Online Payment
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
export default CashPayment;
