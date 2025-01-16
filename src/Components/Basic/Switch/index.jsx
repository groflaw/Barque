import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const CustomSwitch = ({ id, flag, onSwitchChange }) => {
  const [isOn, setIsOn] = useState(flag);

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
    backgroundColor: "#e0e0e0", 
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
    backgroundColor: "green", 
  },
  closed: {
    backgroundColor: "#fff", 
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 11,
    backgroundColor: "#fff", 
    position: "absolute",
    top: 4,
  },
  circleClosed: {
    left: 4,
    backgroundColor: "#17233c",
  },
  circleOpen: {
    right: 4, 
    backgroundColor: "#fff", 
  },
});

export default CustomSwitch;
