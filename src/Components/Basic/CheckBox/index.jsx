import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CheckBox = ({ onValueChange, value }) => {
  const toggleCheckbox = () => {
    onValueChange(!value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleCheckbox}
        style={[
          styles.checkbox,
          value ? styles.checkboxChecked : styles.checkboxUnchecked,
        ]}
      >
        {value && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "rgba(49, 100, 244, 1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    borderRadius: 1,
  },
  checkboxChecked: {
    backgroundColor: "none",
  },
  checkboxUnchecked: {
    backgroundColor: "#fff",
  },
  checkmark: {
    color: "rgba(49, 100, 244, 1)",
    fontSize: 12,
  },
});

export default CheckBox;
