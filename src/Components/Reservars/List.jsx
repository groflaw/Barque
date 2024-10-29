import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Navbar from "../Navbar";
import { useNavigation } from "@react-navigation/native";

import boatcard from "../../../assets/Icons/boatcard.png";
import hostavatar from "../../../assets/Icons/hostavatar.png";

const List = () => {
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("Profile");
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title} className="mt-5 ">
            Reservas
          </Text>

          <View style={styles.card} className="mt-5">
            <View className="flex flex-row justify-between">
              <Text style={styles.date}>Fecha: 12/10/2023</Text>
              <View className="flex flex-row gap-2">
                <Text style={[styles.type, { backgroundColor: "#2a8500" }]}>
                  Confirmado
                </Text>
                <Text style={[styles.type, { backgroundColor: "#102a5e" }]}>
                  Detalles
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center">
              <Image
                style={{ width: 80, height: 80 }}
                source={boatcard}
              ></Image>
              <View className="ml-3">
                <Text style={styles.boatname}>Yate de Lujo</Text>
                <Text style={styles.boatdes}>
                  Ideal para cruceros al atardecer
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={nextStep}>
              <View className="flex flex-row mt-2">
                <Image
                  source={hostavatar}
                  style={{ width: 40, height: 40 }}
                ></Image>
                <View className="ml-3">
                  <Text style={styles.manname}>Anfitrión: Carlos Marín</Text>
                  <Text style={styles.mandes}>
                    Experto en rutas de navegación.
                  </Text>
                </View>
              </View>
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
    color: "#17233c", // Custom dark blue color
    fontSize: 20, // Font size of 20
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "700", // Font weight set to bold
  },
  card: {
    backgroundColor: "#ffffff", // Background color
    borderRadius: 8, // Border radius
    borderWidth: 1, // Border width
    borderColor: "#efefef", // Border color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 12, // Shadow radius
    elevation: 5, // Android shadow equivalent
    padding: 16, // Padding inside the card (adjust as needed)
  },
  date: {
    color: "#17233C",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "600", // Use 'bold' for weight 600 if not using web fonts
  },
  type: {
    borderRadius: 8,
    padding: 5, // Added padding for better touch area
    color: "#FFFFFF",
    fontSize: 11,
    fontFamily: "Lexend Deca",
    fontWeight: "600", // Use 'bold' if needed
    textAlign: "center", // Optional, to center the text
  },
  boatname: {
    color: "#000000", // Black
    fontSize: 16, // No need for px, number is sufficient
    fontFamily: "Lexend Deca", // Make sure this font is loaded
    fontWeight: "700", // Use 'bold' for common use; 700 is supported
  },
  boatdes: {
    color: "#17233C", // Color set to dark blue
    fontSize: 14, // Font size (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded in Expo
    lineHeight: 20,
  },
  manname: {
    color: "#17233C",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },
  mandes: {
    color: "#8E9697",
    fontSize: 11,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
});
export default List;
