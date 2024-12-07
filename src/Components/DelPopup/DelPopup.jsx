import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DelPopup({ visible, transparent, dismiss, margin,delBoat }) {
  const navigation = useNavigation();
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
          <Text style={styles.title}>
            Are you sure want to delete this boat?
          </Text>
          <View className="flex flex-row justify-around gap-10">
            <View style={[styles.btn, { backgroundColor: "#ff3b30" }]}>
              <TouchableOpacity style={{ width: "100%" }} onPress={delBoat}>
                <Text style={styles.btntext} className="text-center">
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.btn, { backgroundColor: "#2a8500" }]}>
              <TouchableOpacity style={{ width: "100%" }} onPress={dismiss}>
                <Text style={styles.btntext} className="text-center">
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    top: "25%",
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
    height: 150,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,
    gap: 20,
  },
  title: {
    color: "#030303",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 28,
  },
  btn: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    width: "25%",
  },
  btntext: {
    color: "#f0f1ff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 20,
  },
});
