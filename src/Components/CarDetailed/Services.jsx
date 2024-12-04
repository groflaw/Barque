import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import captionImage from "../../../assets/Icons/captionImage.png";
import peopleImage from "../../../assets/Icons/Iconpeopleoutline.png";
import { useState, useEffect } from "react";

import { cancelback } from "../../Utils/Constant";
const Services = ({resrate, cancellation, capacity, plans}) => {
  const [captain, setCaptain] = useState(
    plans?.type.some((plan) => plan.captain === 1)
  );
  return (
    <View
      className="flex flex-row flex-wrap justify-center mt-5"
      style={styles.container}
    >
      <View className="flex flex-row items-center justify-center">
        <View className="items-center mt-5 mb-5 w-40 ">
          <Text style={styles.rate}>{resrate}%</Text>
          <Text style={styles.rateText}>Response Rate</Text>
        </View>
        <View className="items-center mt-5 mb-5 w-40">
          <Text
            style={[
              styles.cancel,
              { backgroundColor: cancelback[cancellation - 1].color },
            ]}
          >
            {cancelback[cancellation - 1].text}
          </Text>
          <Text style={styles.cancelText}>Cancellation Policy</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-center">
        <View className="items-center mt-5 mb-5 w-40">
          <Image source={peopleImage}></Image>
          <Text style={styles.rateText}>Up to {capacity} persons</Text>
        </View>
        <View className="items-center mt-5 mb-5 w-40">
          <Image source={captionImage}></Image>
          <Text style={styles.cancelText}>{captain ? "With Captain" : "WithOut Captain" }</Text>
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
    backgroundColor: "#fefffe",
    borderRadius: 10, // No need for 'px'
    borderWidth: 1, // Specifies the width of the border
    borderColor: "#c0c0c0", // Color of the border
  },
  rate: {
    borderRadius: 11, // Use numbers, no 'px'
    backgroundColor: "#2a8500",
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#ffffff",
    fontSize: 13,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    textAlign: "center",
  },
  rateText: {
    marginTop: 7,
    color: "#17233c",
    fontSize: 13,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    lineHeight: 14,
  },
  cancel: {
    borderRadius: 12,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center", // Center content horizontally
    color: "#ffffff",
    fontSize: 13,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    textAlign: "center",
  },
  cancelText: {
    marginTop: 8,
    color: "#17233c",
    fontSize: 13,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    lineHeight: 15,
    textAlign: "center",
  },
});
export default Services;
