import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import convertBoatImage from "../../../../assets/Icons/convertBoat.png";
import asyncImage from "../../../../assets/Icons/async.png";
const Convert = () => {
  return (
    <>
      <View style={styles.container}>
        <View className="flex flex-row items-center justify-between ">
          <View style={styles.boat} className="relative flex w-20">
            <Image source={convertBoatImage}></Image>
            <View className="absolute" style={styles.async}>
              <Image source={asyncImage}></Image>
            </View>
          </View>
          <View className="flex w-72">
            <Text style={styles.head}>Eres dueño de un barco?</Text>
            <Text style={styles.des}>
              Pulsa este boton para cambiar a modo anfitrion y gestionar las
              reservas de tu embarcacion.
            </Text>
          </View>
        </View>
      </View>
      <View className="flex items-center">
        <TouchableOpacity>
          <Text className="flex text-center" style={styles.button}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 26,
    padding: 10,
    margin: 10,
  },
  boat: {
    backgroundColor: "#17233c", // Dark blue color
    borderRadius: 8, // Rounded corners with 8px radius
    padding: 15,
    margin: 10,
  },
  async: {
    bottom: 8,
    right: 8,
    padding: 0,
    backgroundColor: "white",
    borderRadius: 50,
  },
  head: {
    color: "#17233c", // Dark blue color
    fontSize: 15, // Font size (in points)
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "500", // Font weight (numeric strings)
    lineHeight: 22,
  },
  des: {
    color: "#17233c", // Dark blue color
    fontSize: 11, // Font size in points
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "300", // Light font weight
    lineHeight: 16,
    flexWrap: "wrap", // Ensure text wraps within the container
  },
  button: {
    color: "#0751c1", // Blue color
    fontSize: 15, // Font size (in points)
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "600", // Font weight (bold)
    lineHeight: 26,
  },
});
export default Convert;
