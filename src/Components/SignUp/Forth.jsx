import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-international-phone-number";

import { useState } from "react";

import Option from "../Basic/Option";
import CheckBox from "../Basic/CheckBox";

const Third = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("Second");
  };
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (phoneNumber) => {
    setInputValue(phoneNumber);
  };

  const handleSelectedCountry = (country) => {
    setSelectedCountry(country);
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Title}> Completa tu registro</Text>
          <Text style={styles.Description} className="mt-7">
            Proporcione la siguiente información adicional para completar su
            registro y comenzar a alquilar embarcaciones.
          </Text>
          <Text className="mt-10" style={styles.OptionTitle}>
            Número de teléfono
          </Text>
          <View className="flex flex-row items-center justify-between mt-5 mb-3">
            <PhoneInput
              value={inputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
            />
          </View>

          <View
            className="flex flex-row items-start mt-9"
            style={styles.checkContainer}
          >
            <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
            <Text style={styles.checkLabel}>
              Aceptar las Condiciones de servicio y la Política de privacidad.
            </Text>
          </View>
          <View
            className="flex flex-row items-start mt-3"
            style={styles.checkContainer}
          >
            <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
            <Text style={styles.checkLabel}>
              'Doy mi consentimiento para recibir material de marketing
              promocional a través de un sistema automatizado de mensajes de
              texto SMS al número de teléfono que he proporcionado para mi
              cuenta. El consentimiento no es una condición para registrarse en
              una cuenta o comprar cualquier servicio Ver la política de
              mensajes de texto SMS de Barquea'
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.Button} className="text-center mt-9">
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
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
    marginTop: 10,
    color: "#102a5e",
    fontSize: 20,
    fontFamily: "Lexend Deca", // Ensure this font is linked in your project
    fontWeight: "500",
    lineHeight: 26,
  },
  Description: {
    color: "#17233c", // Text color as a string
    fontSize: 14, // Font size as a number (without 'px')
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    lineHeight: 20,
  },
  OptionTitle: {
    color: "#17233c", // Text color as a string
    fontSize: 14, // Font size as a number (14)
    fontFamily: "Lexend Deca", // Ensure this font is loaded correctly
    lineHeight: 20,
  },
  Button: {
    borderRadius: 6, // Set as a number, no "px"
    backgroundColor: "#17233c", // Background color as a string
    padding: 20,
    color: "#dbe6fe", // Text color as a string
    fontSize: 18, // Font size as a number
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "500", // Font weight as a string
  },
});
export default Third;
