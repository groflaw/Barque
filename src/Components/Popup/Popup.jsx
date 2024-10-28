import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  TextInput,
  Slider,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import RangeSlider from "react-native-range-slider-expo";

import Option from "../Basic/Option";
import Number from "../Basic/Number";

export default function Popup({ visible, transparent, dismiss, margin }) {
  const [value, setValue] = useState(60);

  const onValueChange = (value) => {
    setValue(value);
  };
  return (
    <Modal visible={visible} transparent={transparent} onRequestClose={dismiss}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <View
        style={{
          ...styles.modalContent,
          margin: margin,
        }}
      >
        <View style={styles.popupContent}>
          <View style={styles.popupTitleBox} className="flex bg-white w-80 ">
            <Text style={styles.popupTitle}>Guanta, Anzoategui</Text>
          </View>
          <View className="flex mt-3 w-72">
            <Text style={styles.sizeTitle}>Size (feet)</Text>

            <Number></Number>
          </View>
          <View className="flex mt-3 w-72 ">
            <Text style={styles.sizeTitle}>Type of Vessel</Text>
            <Option width={"100%"}></Option>
          </View>
          <View className="flex mt-3 w-72">
            <Text style={styles.sizeTitle}>Capacity (Number of people)</Text>
            <Number></Number>
          </View>
          <View className="flex mt-3 w-72">
            <View className="flex flex-row justify-between">
              <Text style={styles.sizeTitle}>Price Range</Text>
              <Text style={styles.sizeTitle}>200 - 10.000 $</Text>
            </View>

            <View style={styles.SliderContainer} className="mt-2">
              <View style={{ ...styles.slider, width: `${value}%` }} />
              <Slider
                minimumValue={1}
                maximumValue={100}
                value={value}
                onValueChange={onValueChange}
                style={styles.SliderInput}
                minimumTrackTintColor="rgba(23, 35, 60, 1)" // Line color
                thumbTintColor="rgba(23, 35, 60, 1)"
                maximumTrackTintColor="lightgray"
              />
            </View>
          </View>
          <View className="flex items-center mt-3 w-72 ">
            <TouchableOpacity>
              <Text className="p-3 text-center text-white rounded-lg w-28 bg-slate-800">
                Aplicar Filtros
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    justifyContent: "center",
    marginVertical: "100%",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  popupContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
  },
  popupTitleBox: {
    padding: 15,
    shadowColor: "#030303", // Same as rgba(3,3,3,0.1)
    shadowOffset: {
      width: 2, // Horizontal offset
      height: -2, // Vertical offset
    },
    shadowOpacity: 0.1, // Opacity of the shadow
    shadowRadius: 10, // Blur effect
    elevation: 5, // Recommended elevation for Android
  },
  popupTitle: {
    color: "#030303",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 28,
  },
  sizeTitle: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },

  SliderContainer: {
    marginTop: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: [{ translateY: -2 }],
    height: 4,
    backgroundColor: "rgba(23, 35, 60, 1)",
    borderRadius: 10,
    zIndex: 10,
  },
  SliderInput: {
    width: "100%",
    opacity: 1,
    color: "black",
  },
});
