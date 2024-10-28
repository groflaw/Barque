import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import CustomTextInput from "../Basic/Input";
import { useState } from "react";

const Personal = () => {
  const [isEdit, setEdit] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.Title}>Información del Usuario</Text>
        <View className="mt-5">
          <Text style={styles.key}>Nombre y Apellido</Text>

          {!isEdit && <Text style={styles.value}>Carlos Mendoza</Text>}
          {isEdit && (
            <CustomTextInput placeholder="Carlos Mendoza"></CustomTextInput>
          )}
        </View>
        <View className="mt-5">
          <Text style={styles.key}>Email</Text>
          {!isEdit && (
            <Text style={styles.value}>CarlosMendoza@example.com</Text>
          )}
          {isEdit && (
            <CustomTextInput placeholder="carlos.mendoza@example.com"></CustomTextInput>
          )}
        </View>
        <View className="mt-5">
          <Text style={styles.key}>Número de Teléfono</Text>
          {!isEdit && <Text style={styles.value}>+58 4147650090</Text>}
          {isEdit && (
            <CustomTextInput placeholder="123-456-7890"></CustomTextInput>
          )}
        </View>
        <View className="mt-5">
          <Text style={styles.key}>Fecha de Nacimiento</Text>
          {!isEdit && <Text style={styles.value}>17/07/1991</Text>}
          {isEdit && (
            <CustomTextInput placeholder="01/01/1990"></CustomTextInput>
          )}
        </View>
        <View className="mt-5">
          <Text style={styles.key}>Dirección</Text>
          {!isEdit && (
            <Text style={styles.value}>Calle peladera con cruze 1790</Text>
          )}
          {isEdit && (
            <CustomTextInput placeholder="Calle Falsa 123"></CustomTextInput>
          )}
        </View>
        <View className="mt-5">
          <Text style={styles.key}>País</Text>
          {!isEdit && <Text style={styles.value}>Venezuela</Text>}
          {isEdit && (
            <CustomTextInput placeholder="Argentina"></CustomTextInput>
          )}
        </View>
        <View className="mt-5">
          <Text style={styles.key}>Ciudad</Text>
          {!isEdit && <Text style={styles.value}>Pto. La Cruz</Text>}
          {isEdit && (
            <CustomTextInput placeholder="Buenos Aires"></CustomTextInput>
          )}
        </View>
        <View className="flex items-center mt-7">
          <TouchableOpacity onPress={() => setEdit(!isEdit)}>
            <Text
              style={[
                styles.button,
                { backgroundColor: isEdit ? "#2a8500" : "#0a4195" },
              ]}
              className="text-center w-60"
            >
              {isEdit == true ? "Guardar" : "Editar"}
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
    marginLeft: 45,
    marginRight: 45,
  },
  Title: {
    paddingTop: 20,
    color: "#030303", // Dark color (almost black)
    fontSize: 20, // Font size (in points)
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "700",
  },
  key: {
    color: "#17233c", // Dark blue color
    fontSize: 14, // Font size (14 points)
    fontFamily: "Lexend Deca", // Custom font family
    lineHeight: 20,
    fontWeight: "650", // Bold font weight
  },
  value: {
    color: "#17233c", // Dark blue color
    fontSize: 15, // Font size (in points)
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "700", // Bold font weight
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#0a4195", // Background color
    borderRadius: 8, // Border radius (in points)
    padding: 15, // Optional: add some padding
    margin: 10,
    color: "#ffffff", // White color
    fontSize: 14, // Font size (14 points)
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "500", // Medium font weight
    lineHeight: 16,
  },
});
export default Personal;
