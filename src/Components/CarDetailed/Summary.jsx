import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import IconStarImage from "../../../assets/Icons/Iconstar.png";
import { useEffect } from "react";

const Summary = ({location,model,review,booking}) => {
  return (
    <View style={styles.container} className="flex">
      <Text className="mt-3" style={styles.position}>
        {location}
      </Text>
      <Text style={styles.detail} className="mt-5">
        {model}
      </Text>

      <View
        style={styles.review}
        className="flex flex-row items-center mt-2 w-40 justify-center"
      >
        <Image source={IconStarImage}></Image>
        <Text style={styles.mark}>{review} / 5</Text>
        <Text style={styles.count}>({booking} bookings)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  position: {
    paddingTop: 10,
    color: "#8e9697",
    fontSize: 11,
    fontFamily: "Roboto", // Ensure this font is available
    fontWeight: "700",
  },
  detail: {
    color: "#102a5e",
    fontSize: 18,
    fontFamily: "Lexend Deca", // Ensure this font is available
    fontWeight: "700",
    lineHeight: 23,
  },
  review: {
    backgroundColor: "#072d4c",
    borderRadius: 9,
    borderWidth: 1, 
    borderColor: "#ffffff", 
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  mark: {
    color: "white",
    paddingLeft: 5,
  },
  count: {
    paddingLeft: 5,
    color: "#8e9697",
    fontSize: 12,
    fontFamily: "Roboto", // Ensure this font is loaded
    fontWeight: "700",
    lineHeight: 18,
  },
});
export default Summary;
