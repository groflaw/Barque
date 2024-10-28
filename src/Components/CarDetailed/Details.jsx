import { View, StyleSheet, Text, Image } from "react-native";

import tickImage from "../../../assets/Icons/tick.png";

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Detalles</Text>
      <Text style={styles.header} className="mt-3">
        Permitido en la embarcación :
      </Text>
      <View className="flex flex-row justify-between mt-3">
        <Text> Alcohol </Text>
        <Image source={tickImage}></Image>
      </View>
      <Text style={styles.header} className="mt-3">
        No Permitido en la embarcación:{" "}
      </Text>
      <View className="flex flex-row justify-between mt-5">
        <Text> Fumar </Text>
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
    color: "#102a5e",
    fontSize: 20,
    fontFamily: "Lexend Deca", // Make sure this font is available in your project
    fontWeight: "700",
    lineHeight: 31,
  },
  header: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 23,
  },
});
export default Details;
