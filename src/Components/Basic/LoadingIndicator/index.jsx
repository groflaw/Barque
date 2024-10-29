import React from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "60%",
    flex: 1, // Fill the entire screen
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
});

export default LoadingIndicator;
