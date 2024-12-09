import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const CustomSwitch = ({ id, flag, onSwitchChange }) => {
  const [isOn, setIsOn] = useState(flag); // Initialize with the flag value

  const toggleSwitch = () => {
    setIsOn((previousState) => {
      const newState = !previousState;
      onSwitchChange(id, newState);
      return newState;
    });
  };

  return (
    <TouchableOpacity
      style={[styles.switch, isOn && styles.open]}
      onPress={toggleSwitch}
    >
      <View style={[styles.circle, isOn && styles.circleOpen]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  switch: {
    width: 60,
    height: 28,
    borderRadius: 15,

    justifyContent: "center",
    backgroundColor: "#e0e0e0", // Grey background for closed state
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  open: {
    backgroundColor: "green", // Green background for open state
  },
  closed: {
    backgroundColor: "#fff", // White background for closed state
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 11,
    backgroundColor: "#fff", // White circle
    position: "absolute",
    top: 4,
  },
  circleClosed: {
    left: 4, // Position circle to the left when closed
    backgroundColor: "#17233c", // Dark color for the circle when closed
  },
  circleOpen: {
    right: 4, // Position circle to the right when open
    backgroundColor: "#fff", // White color for the circle when open
  },
});

export default CustomSwitch;
