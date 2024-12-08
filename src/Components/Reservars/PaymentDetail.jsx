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

const PaymentDetail = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("SelectPayment");
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Payment Details</Text>
        <View className="flex flex-row justify-between mt-3">
          <Text style={styles.item}>Plane Price</Text>
          <Text style={styles.item}>$450</Text>
        </View>
        <View className="flex flex-row justify-between mt-3">
          <Text style={styles.item}>Service Fee</Text>
          <Text style={styles.item}>$45</Text>
        </View>
        <View style={styles.hr} />
        <View className="flex flex-row justify-between mt-3">
          <Text style={styles.total}>Total Amount</Text>
          <Text style={styles.total}>$500</Text>
        </View>
      </View>
        <View style={styles.btn} className="mt-3">
          <TouchableOpacity
            onPress={() => {
              nextStep();
            }}
          >
            <Text style={styles.btntext} className="text-center text-white">
              Proceed with Payment
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
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: 900,
  },
  item: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
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
  total: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 24,
  },
});
export default PaymentDetail;