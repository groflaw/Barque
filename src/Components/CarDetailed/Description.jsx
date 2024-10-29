import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
const Description = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionContent} className="mt-4">
        WE HAVE 3 DOUBLE DECK TRITOONS , MESSAGE US INCASE THE TIME FRAME YOU
        WANT IS BOOKED . !!!!! PLEASE MESSAGE BEFORE INSTANT B ...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  descriptionTitle: {
    color: "#072d4c",
    fontSize: 20,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    lineHeight: 26,
  },
  descriptionContent: {
    color: "#102a5e",
    fontSize: 15,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    lineHeight: 22,
  },
});
export default Description;
