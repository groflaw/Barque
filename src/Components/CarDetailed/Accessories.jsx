import { View, StyleSheet, Text, Image } from "react-native";
import tickImage from "../../../assets/Icons/tick.png";
import { useEffect } from "react";
const Accessories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Accesorios</Text>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.Item}>Ancla</Text>
        <Image source={tickImage}></Image>
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
    color: "#072d4c",
    fontSize: 20,
    fontFamily: "Lexend Deca", // Ensure you have the font loaded
    fontWeight: "700",
    lineHeight: 26,
  },
  Item: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca", // Ensure you have the font loaded
    fontWeight: "300", // Use "300" for light font weight
    lineHeight: 20,
  },
});
export default Accessories;
