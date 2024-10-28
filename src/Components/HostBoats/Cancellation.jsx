import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Radio from "../Basic/Radio";

const Cancellation = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("Accessories");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} className="mt-5 ">
          Elige tu política de cancelación{" "}
        </Text>
        <View
          style={styles.card}
          className="flex flex-row items-center justify-center mt-4"
        >
          <View className="flex items-center w-24 ">
            <Radio
              selected={selected === "option1"}
              onPress={() => setSelected("option1")}
            ></Radio>
            <Text style={[styles.item, { backgroundColor: "#2a8500" }]}>
              FLEXIBLE
            </Text>
          </View>
          <View>
            <Text style={styles.itemText} className="w-56 ml-2 ">
              Cancelaciones de reservas gratis en todo momento con devolución
              del dinero.
            </Text>
          </View>
        </View>
        <View
          style={styles.card}
          className="flex flex-row items-center justify-center mt-4"
        >
          <View className="flex items-center w-24 ">
            <Radio
              selected={selected === "option1"}
              onPress={() => setSelected("option1")}
            ></Radio>
            <Text style={[styles.item, { backgroundColor: "#f4bf64" }]}>
              MODERADA
            </Text>
          </View>
          <View>
            <Text style={styles.itemText} className="w-56 ml-2 ">
              Cancelaciones de reservas gratis antes de las 24 horas del día que
              inicia el viaje.
            </Text>
            <Text style={styles.itemText} className="w-56 ml-2 ">
              Cancelaciones el mismo día de la reserva tendrá un cargo del 50%
              del costo de un día de reserva.
            </Text>
          </View>
        </View>
        <View
          style={styles.card}
          className="flex flex-row items-center justify-center mt-4"
        >
          <View className="flex items-center w-24 ">
            <Radio
              selected={selected === "option1"}
              onPress={() => setSelected("option1")}
            ></Radio>
            <Text style={[styles.item, { backgroundColor: "#ff3b30" }]}>
              ESTRICTA
            </Text>
          </View>
          <View>
            <Text style={styles.itemText} className="w-56 ml-2 ">
              Cancelaciones de reserva gratis antes de las 48 horas del día que
              inicia el viaje.
            </Text>
            <Text style={styles.itemText} className="w-56 ml-2 ">
              Cancelaciones dentro de las 48 horas previas de la reserva tendrá
              un cargo del 50% del costo de un día de reserva.
            </Text>
          </View>
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
      width: 0, // Horizontal shadow offset
      height: 4, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 12, // Shadow radius
    elevation: 5, // Android shadow equivalent
    padding: 40, // Padding inside the card (adjust as needed)
  },
  item: {
    borderRadius: 12,
    // backgroundColor: "#2a8500",
    paddingVertical: 4, // Adjust padding for better touch area
    paddingHorizontal: 15, // Adjust padding for better touch area
    color: "#ffffff",
    fontSize: 10,
    fontFamily: "Lexend Deca", // Make sure the font is available in your app
    fontWeight: "700",
    textAlign: "center", // Center the text horizontally
  },
  itemText: {
    color: "#172b4d",
    fontSize: 13,
    fontFamily: "Lexend Deca", // Ensure this font is properly linked in your project
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

export default Cancellation;
