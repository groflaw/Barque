import { View, StyleSheet, Text, Image } from "react-native";

import shipRoundImage from "../../../assets/Icons/shipround.png";

import fullTickImage from "../../../assets/Icons/fulltick.png";
import { useEffect } from "react";
const Plans = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Planes a elegir</Text>
      <View style={styles.content} className="mt-9">
        <View style={styles.open}>
          <View className="flex flex-row justify-between">
            <Text style={styles.head}> Plan 1</Text>
            <View className="flex flex-row items-center">
              <Text style={styles.price}>$221</Text>
              <Image source={fullTickImage} style={styles.reverimage}></Image>
            </View>
          </View>
          <Text style={styles.description} className="mt-5">
            Viajes a playa el faro, puinare y saco. Incluye hielo y agua
          </Text>
          <View className="flex flex-row items-center mt-3">
            <Image source={shipRoundImage}></Image>
            <Text style={styles.driver}> Con Capitan</Text>
          </View>
        </View>
        <View
          className="flex flex-row justify-between mt-4"
          style={styles.close}
        >
          <Text style={styles.head}> Plan 2</Text>
          <View className="flex flex-row items-center">
            <Text style={styles.price}>$478</Text>
            <Image source={fullTickImage}></Image>
          </View>
        </View>
        <View
          className="flex flex-row justify-between mt-4"
          style={styles.close}
        >
          <Text style={styles.head}> Plan 3</Text>
          <View className="flex flex-row items-center">
            <Text style={styles.price}>$583</Text>
            <Image source={fullTickImage}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  content: {
    backgroundColor: "#fefffe",
    borderRadius: 10, // No need for 'px'
    borderWidth: 1, // Specifies the width of the border
    borderColor: "#c0c0c0", // Color of the border
    padding: 15,
  },
  Title: {
    color: "#102a5e",
    fontSize: 20, // Numeric value, converted from '20px'
    fontFamily: "Lexend Deca",
    fontWeight: "700", // Bold font weight
    lineHeight: 30, // Numeric value, converted from '30px'
  },
  open: {
    backgroundColor: "#f0f1ff", // Background color
    borderRadius: 10, // Border radius
    borderWidth: 1, // Border width
    borderColor: "#ecedf0", // Border color
    padding: 10, // Optional padding inside the box
    marginBottom: 10,
    maringTop: 10,
  },
  close: {
    padding: 15,
  },
  head: {
    color: "#17233c",
    fontSize: 18, // Numeric value, without 'px'
    fontFamily: "Lexend Deca",
    fontWeight: "500", // Medium font weight
    lineHeight: 22, // Numeric value, without 'px'
  },
  price: {
    color: "#0751c1", // Text color
    fontSize: 15, // Numeric value, no 'px'
    fontFamily: "Lexend Deca", // Ensure the font is correctly loaded
    fontWeight: "500", // Medium font weight
    lineHeight: 18, // Numeric value, no 'px'
    marginRight: 15,
  },
  reverimage: {
    transform: [{ rotate: "180deg" }],
  },
  description: {
    color: "#000000", // Text color
    fontSize: 15, // Numeric value, no 'px'
    fontFamily: "Lexend Deca",
    lineHeight: 16,
  },
  driver: {
    marginLeft: 4,
    color: "#004eff", // Text color
    fontSize: 14, // Numeric value; no 'px'
    fontFamily: "Lexend Deca",
    fontWeight: "700", // Bold font weight
    lineHeight: 16,
  },
});
export default Plans;
