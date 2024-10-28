import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Payment = () => {
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState(null);
  const nextStep = () => {
    navigation.navigate("AddPayment");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Métodos de pago</Text>
      <TouchableOpacity className="w-24 mt-4 text-center" onPress={nextStep}>
        <Text style={styles.addButton}>+ Agregar</Text>
      </TouchableOpacity>
      <View style={styles.card} className="mt-4 ">
        <View className="flex flex-row items-center justify-between">
          <Text style={styles.Type}>Credit Card</Text>
          <TouchableOpacity>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text className="mt-3">.... .... .... 1234</Text>
        <Text className="mt-3">Expira 12/24</Text>
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
    color: "#030303",
    fontSize: 20, // Use a number without 'px'
    fontFamily: "Lexend Deca", // Ensure this font is loaded in your project
    fontWeight: "700", // Use string '700' for bold
    lineHeight: 28, // Use a number for lineHeight
  },
  addButton: {
    borderWidth: 0, // Equivalent to border: '0'
    borderRadius: 6, // Radius for rounded corners
    backgroundColor: "#2a8500", // Background color
    paddingVertical: 10, // Add some vertical padding (adjust as needed)
    paddingHorizontal: 15, // Add some horizontal padding (adjust as needed)
    alignItems: "center", // Center align the text
    color: "#ffffff", // Text color
    fontSize: 14, // Font size as a number
    fontFamily: "Lexend Deca", // Make sure to load this font
  },
  card: {
    backgroundColor: "#ffffff", // Background color
    borderRadius: 8, // Border radius
    borderWidth: 1, // Border width
    borderColor: "#efefef", // Border color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 4, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 12, // Shadow radius
    elevation: 5, // Android shadow equivalent
    padding: 16, // Padding inside the card (adjust as needed)
  },
  Type: {
    color: "#17233c", // Text color
    fontSize: 16, // Font size as a number
    fontFamily: "Lexend Deca", // Ensure this font is loaded in your project
    fontWeight: "700", // Bold weight as a string
    lineHeight: 24, // Line height as a number
  },
  editButton: {
    borderRadius: 6, // Border radius
    backgroundColor: "#072d4c", // Background color
    paddingVertical: 5, // Padding vertically
    paddingHorizontal: 15, // Padding horizontally
    alignItems: "center", // Center align the text
    color: "#ffffff", // Text color
    fontSize: 14, // Font size
    fontFamily: "Lexend Deca", // Font family (make sure it's loaded)
    lineHeight: 20, // Line height
  },
});
export default Payment;
