import React from "react";
import { View, StyleSheet, Text } from "react-native";
const Newboat = () => {
  return (
    <View style={styles.newboat}>
      <Text style={styles.newboatTitle}>New boats</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  newboat: {
    paddingTop: "3%",
  },
  newboatTitle: {
    paddingLeft: "4%",
    color: "#102a5e",
    fontSize: 17,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 26,
  },
});
export default Newboat;
