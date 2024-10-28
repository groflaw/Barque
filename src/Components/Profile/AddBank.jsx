import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import CustomTextInput from "../Basic/Input";

const AddBank = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} className="mt-5">
          Añadir cuenta bancaria
        </Text>
        <View className="mt-5">
          <Text>Nombre y Apellido del Titular de la cuenta</Text>
          <CustomTextInput></CustomTextInput>
        </View>
        <View className="mt-5">
          <Text>Nombre del Banco</Text>
          <CustomTextInput></CustomTextInput>
        </View>
        <View className="mt-5">
          <Text>Número de cuenta</Text>
          <CustomTextInput></CustomTextInput>
        </View>
        <View className="mt-5">
          <Text>Codigo BIC/SWIFT</Text>
          <CustomTextInput></CustomTextInput>
        </View>
        <View className="flex flex-row justify-around mt-8">
          <TouchableOpacity>
            <Text
              style={[styles.button, { backgroundColor: "#2A8500" }]}
              className="px-10 py-3"
            >
              Guardar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[styles.button, { backgroundColor: "#072d4c" }]}
              className="px-10 py-3"
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    color: "#17233C", // Dark blue color
    fontSize: 20, // Font size as a number (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
  },
  button: {
    borderRadius: 6,
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 20,

    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddBank;
