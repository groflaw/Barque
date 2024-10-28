import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import awardImage from "../../../assets/Icons/Iconaward.png";
import starImage from "../../../assets/Icons/Iconstar.png";
import reviewImage from "../../../assets/Icons/Review.png";

const Host = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Anfitrión</Text>
      <View style={styles.content} className="mt-4">
        <View className="flex flex-row justify-between">
          <View>
            <Text style={styles.name}>Sergio Gonzalez</Text>
            <View className="flex flex-row items-center">
              <View
                className="flex flex-row items-center rounded-lg"
                style={styles.award}
              >
                <Image source={awardImage}></Image>
                <Text style={styles.awardText}>ANFITRIÓN TOP</Text>
              </View>
              <View
                className="flex flex-row items-center rounded-lg"
                style={styles.review}
              >
                <Image source={starImage}></Image>
                <Text style={styles.reviewText}>4.8/5</Text>
              </View>
            </View>
          </View>
          <Image source={reviewImage}></Image>
        </View>
        <TouchableOpacity className="mt-5">
          <View className="flex items-center" style={styles.messageButtpn}>
            <Text style={styles.messageText}>ENVIAR MENSAJE</Text>
          </View>
        </TouchableOpacity>
        <View className="flex flex-row justify-between mt-6">
          <Text style={styles.key}>Tiempo promedio</Text>
          <Text style={styles.value}>24 horas</Text>
        </View>
        <View className="flex flex-row justify-between mt-6">
          <Text style={styles.key}> Tasa de respuesta </Text>
          <Text style={styles.rateValue}>94%</Text>
        </View>
        <View className="flex items-center">
          <TouchableOpacity className="items-center mt-7">
            <Text style={styles.toProfile}>Ver perfil</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    color: "#17233c", // Hex color format
    fontSize: 20, // Numeric value, no 'px'
    fontFamily: "Lexend Deca", // Ensure the font is loaded in your project
    fontWeight: "700", // String for font weight
    lineHeight: 26, // Numeric value, no 'px'
  },
  content: {
    backgroundColor: "#fefffe",
    borderRadius: 10, // No need for 'px'
    borderWidth: 1, // Specifies the width of the border
    borderColor: "#c0c0c0", // Color of the border
    padding: 15,
  },
  name: {
    color: "#102a5e", // Hex color format
    fontSize: 18, // Numeric value, no 'px'
    fontFamily: "Lexend Deca", // Ensure this font is included in your project
    fontWeight: "700", // String representing font weight
    lineHeight: 28, // Numeric value, no 'px'
    paddingLeft: 10,
  },
  award: {
    paddingTop: 2,
    marginRight: 10,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#f4bf64",
  },
  awardText: {
    maringLeft: 20,
    color: "#154353",
    fontSize: 12, // No 'px' is needed in React Native
    fontFamily: "Lato", // Ensure 'Lato' is properly linked if using custom fonts
    fontWeight: "800", // Use string for font weight
    lineHeight: 14, // No 'px' needed
  },
  review: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#072d4c",
  },
  reviewText: {
    color: "#ffffff", // White color
    fontSize: 12, // Font size (no 'px')
    fontFamily: "Lexend Deca", // Ensure this font is properly linked
    fontWeight: "500", // Font weight as a string
    lineHeight: 14,
  },
  messageButtpn: {
    padding: 10,
    borderWidth: 1, // Border width (no 'px')
    borderColor: "#0751c1", // Border color
    borderRadius: 11,
  },
  messageText: {
    color: "#0751c1", // Text color
    fontSize: 18, // Font size (no 'px')
    fontFamily: "Lexend Deca", // Ensure this font is properly linked
    fontWeight: "600", // Font weight as a string
    lineHeight: 23,
  },
  key: {
    color: "#17233c", // Text color
    fontSize: 14, // Font size (no 'px')
    fontFamily: "Lato", // Ensure this font is properly linked
    fontWeight: "700", // Font weight as a string
    lineHeight: 20, // Line height (no 'px')
  },
  value: {
    color: "#17233c", // Text color
    fontSize: 14, // Font size (no 'px')
    fontFamily: "Lato", // Ensure this font is properly linked
    fontWeight: "700", // Font weight as a string
    lineHeight: 19,
  },
  rateValue: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    backgroundColor: "#2a8500",
    color: "#ffffff", // Text color
    fontSize: 12, // Font size (no 'px')
    fontFamily: "Lato", // Ensure this font is properly linked
    fontWeight: "700", // Font weight as a string
    lineHeight: 20, // Line height (no 'px')
    textAlign: "center", // Center the text
  },
  toProfile: {
    color: "#0751c1", // Text color
    fontSize: 16, // Font size (no 'px')
    fontFamily: "Lato", // Ensure this font is properly linked
    lineHeight: 29, // Line height (no 'px')
    textAlign: "center", // Center aligning the text
  },
});
export default Host;
