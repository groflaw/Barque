import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../Navbar";
import CustomTextInput from "../Basic/Input";
import Option from "../Basic/Option";
import Number from "../Basic/Number";
import { useEffect } from "react";
const BoatData = () => {
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("AddPlans");
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Datos de la embarcación</Text>
          <View className="mt-2">
            <Text style={styles.item}>Modelo </Text>
            <CustomTextInput></CustomTextInput>
          </View>
          <View className="mt-2">
            <Text style={styles.item}>Descripción </Text>
            <CustomTextInput></CustomTextInput>
          </View>
          <View className="mt-2">
            <Text style={styles.item}>Ubicación </Text>
            <CustomTextInput></CustomTextInput>
          </View>
          <View className="mt-2">
            <Text style={styles.item}>Año</Text>
            <Number></Number>
          </View>
          <View className="mt-2">
            <Text style={styles.item}>Tamaño (Pies)</Text>
            <Number></Number>
          </View>
          <View className="mt-2">
            <Text style={styles.item} className="mb-2">
              Tipo de embarcación
            </Text>
            <Option></Option>
          </View>
          <View className="mt-3">
            <Text style={styles.item} className="mb-2">
              Marca
            </Text>
            <Option></Option>
          </View>
          <View className="mt-3">
            <Text style={styles.item} className="mb-2">
              Motores
            </Text>
            <Option></Option>
          </View>
          <View className="mt-3">
            <Text style={styles.item} className="mb-2">
              Baños
            </Text>
            <Option></Option>
          </View>
          <View className="mt-3">
            <Text style={styles.item} className="mb-2">
              Propulsión
            </Text>
            <Option></Option>
          </View>
          <View className="mt-3">
            <Text style={styles.item} className="mb-2">
              Capacidad
            </Text>
            <Option></Option>
          </View>
          <View className="mt-3">
            <Text style={styles.item} className="mb-2">
              Cabinas / Camarotes
            </Text>
            <Option></Option>
          </View>
          <View className="mt-5">
            <TouchableOpacity onPress={nextStep}>
              <Text style={styles.continue} className="text-center">
                CONTINUAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: "#17233c",
    fontSize: 20, // No 'px' in React Native, just a number
    fontFamily: "Lexend Deca",
    fontWeight: "700", // Font weight can be a string or number
    lineHeight: 26, // Line height is also a number
  },
  item: {
    color: "#17233c",
    fontSize: 14, // Use a number without 'px'
    fontFamily: "Lexend Deca",
  },
  continue: {
    borderRadius: 6, // Border radius as a number
    backgroundColor: "#17233c", // Background color
    padding: 20, // Add some padding for better touch area
    color: "#ffffff", // Text color
    fontSize: 13, // Font size as a number
    fontFamily: "Mulish", // Font family
    fontWeight: "900", // Font weight
  },
});
export default BoatData;
