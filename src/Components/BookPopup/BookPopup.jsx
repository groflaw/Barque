import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import closeImg from "../../../assets/Icons/close.png";
import congruImg from "../../../assets/Icons/congratulatoin.png";

export default function BookPopup({
  visible,
  transparent,
  dismiss,
  margin,
  mode,
}) {
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("Reservas");
  };
  return (
    <Modal visible={visible} transparent={transparent} onRequestClose={dismiss}>
      
      <View
        style={{
          ...styles.modalContent,
          margin: margin,
        }}
      >
        <View style={styles.popupContent}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={dismiss}>
              <Image source={closeImg}></Image>
            </TouchableWithoutFeedback>
          </View>

          <View className="flex justify-center items-center pt-9 pb-6 ">
            <Image source={congruImg}></Image>
            <Text style={styles.text} className="mt-4">
              {mode
                ? "You have a pending Booking to confirm!"
                : "Your Booking is ready!"}
            </Text>
            <Text style={styles.text} className="mt-4">
              {mode
                ? "Please proceed with confirmation."
                : "Please proceed with your payment"}
            </Text>
            <View className="mt-4" style={styles.btn}>
              <TouchableWithoutFeedback onPress={() => nextStep()}>
                <Text style={styles.btntext}>
                  {mode ? "Check Detail" : "Pay Now!"}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    justifyContent: "center",
    top: "20%",
  },
  modalOverlay: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  popupContent: {
    height: 300,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#030303",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 5,
    elevation: 2,
  },
  text: {
    color: "#0a252f",
    fontSize: 19,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    textAlign: "center",
    maxWidth: "65%",
    lineHeight: 27,
  },
  btn: {
    padding: 10,
    border: 0,
    borderRadius: 6,
    backgroundColor: "#2a8500",
  },
  btntext: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },
});
