import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomTextInput from "../Basic/Input";
import Option from "../Basic/Option";

const Location = () => {
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("AddBoatImages");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} className="mt-5">
          Ubicación de la embarcación{" "}
        </Text>
        <Text style={styles.des} className="mt-4">
          Indicanos la locación exacta de la embarcación. Para proteger tu
          privacidad esta información solo la verán los usuarios que ya tienen
          una reserva confirmada.
        </Text>
        <View className="mt-8 mb-3">
          <Text>Nombre de la embarcación </Text>
          <CustomTextInput></CustomTextInput>
        </View>
        <Option></Option>
        <Text className="mt-5">Dirección</Text>
        <View className="mt-5 mb-3">
          <Text>Nombre de la marina</Text>
          <CustomTextInput></CustomTextInput>
        </View>
        <View>
          <Text>Dirección </Text>
          <CustomTextInput></CustomTextInput>
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
  des: {
    color: "#000000", // Black color
    fontSize: 12, // Font size of 12
    fontFamily: "Lexend Deca", // Using the custom font
    lineHeight: 16, // Line height of 16
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
export default Location;
