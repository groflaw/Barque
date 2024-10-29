import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import convertBoatImage from "../../../../assets/Icons/convertBoat.png";
import asyncImage from "../../../../assets/Icons/async.png";
import { useEffect } from "react";

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
    backgroundColor: "#17233c",
    borderRadius: 8,
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
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 22,
  },
  des: {
    color: "#17233c",
    fontSize: 11,
    fontFamily: "Lexend Deca",
    fontWeight: "300",
    lineHeight: 16,
    flexWrap: "wrap",
  },
  button: {
    color: "#0751c1",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "600",
    lineHeight: 26,
  },
});
export default Convert;
