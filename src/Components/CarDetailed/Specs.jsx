import { View, Text, StyleSheet, Image } from "react-native";
import fullTick from "../../../assets/Icons/fulltick.png";
const Specs = () => {
  return (
    <View style={styles.container}>
      <View className="flex flex-row justify-between mt-5">
        <Text style={styles.Title}>Especificaciones</Text>
        <Image source={fullTick}></Image>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Pies</Text>
        <Text style={styles.value}>31'</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Marca</Text>
        <Text style={styles.value}>PREMIER MARINE</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Modelo</Text>
        <Text style={styles.value}>310 BOUNDARY WATERS SKY DEK P</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Capacidad</Text>
        <Text style={styles.value}>Hasta 12 pers</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Tipo</Text>
        <Text style={styles.value}> Lancha deportiva sin camarote</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  Title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca", // Ensure you have the font loaded
    fontWeight: "700", // Use "700" for bold font weight
    lineHeight: 26,
  },
  key: {
    color: "#101c2c",
    fontSize: 15,
    fontFamily: "Lexend Deca", // Ensure you have the font loaded properly
    fontWeight: "300", // Light font weight
    lineHeight: 22,
  },
  value: {
    color: "#101c2c",
    fontSize: 15, // Numeric value, converted from '15px'
    fontFamily: "Lexend Deca", // Ensure the font is loaded properly
    fontWeight: "500", // Medium font weight
    lineHeight: 20, // Numeric value, converted from '20px'
  },
});
export default Specs;
