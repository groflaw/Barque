import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import boatMarkImage from "../../../assets/Icons/boatMark.png";
import { useEffect, useState } from "react";
const BookAction = ({ plan, data }) => {
  const [price, setPrice] = useState(null);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    data.map((item, index) => {
      if (item._id == plan) {
        setPrice(item.price);
        setIndex(index+1);
      }
    });
  }, [plan]);

  return (
    <View
      style={styles.containter}
      className="flex flex-row justify-between bg-white"
    >
      <View>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.plan}>Plan{index}</Text>
      </View>
      <View className="flex flex-row items-center" style={styles.button}>
        <TouchableOpacity className="flex flex-row items-center">
          <Image source={boatMarkImage}></Image>
          <Text style={styles.buttonText}> RESERVA AHORA </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  button: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#0a4195",
    borderRadius: 8,
  },
  price: {
    color: "#0751c1", // Updated color to the specified blue
    fontSize: 15, // Font size as a number
    fontFamily: "Lexend Deca", // Ensure this font is available in your project
    fontWeight: "700", // Font weight as a string
    lineHeight: 19,
  },
  plan: {
    color: "#17233c", // Color set to specified shade
    fontSize: 16, // Font size as a number
    fontFamily: "Lexend Deca", // Ensure 'Lexend Deca' font is available
    fontWeight: "700", // Font weight set to string '700'
    lineHeight: 22,
  },
  buttonText: {
    color: "#ffffff", // Updated color to white
    fontSize: 13, // Font size as a number
    fontFamily: "Lexend Deca", // Ensure this font is available in your project
    fontWeight: "500", // Font weight as a string
    lineHeight: 17,
  },
});
export default BookAction;
