import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

const CustomTextInput = ({ placeholder }) => {
  return (
    <View style={InputStyles.container}>
      <TextInput
        style={InputStyles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

const InputStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%", // Adjust as needed
    shadowColor: "#030303", // Color for shadow
    shadowOffset: {
      width: 2, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.1, // Shadow transparency
    shadowRadius: 4, // Blur effect for the shadow
    borderRadius: 5,
    elevation: 2, // Android shadow (elevation value)
  },
  label: {
    fontSize: 16,
    color: "#333",
  },

  input: {
    height: 40, // Adjust as needed
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});

export default CustomTextInput;
