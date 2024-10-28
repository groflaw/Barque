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

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Title}> Crear una Cuenta </Text>
          <TextInput
            placeholder="Nombre"
            className="pt-2 pb-2 pl-2 pr-2 bg-white mt-9"
          ></TextInput>
          <TextInput
            placeholder="Apellido"
            className="pt-2 pb-2 pl-2 pr-2 mt-5 bg-white"
          ></TextInput>
          <TextInput
            placeholder="Email"
            className="pt-2 pb-2 pl-2 pr-2 mt-5 bg-white"
          ></TextInput>
          <TextInput
            placeholder="Contraseña"
            className="pt-2 pb-2 pl-2 pr-2 mt-5 bg-white"
          ></TextInput>

          <View className="flex flex-row items-center justify-between mt-5">
            {/* <Option width={"22%"}></Option>
            <TextInput
              placeholder="Número de teléfono"
              className="pt-1 pb-2 pl-2 pr-2 bg-white w-72"
            ></TextInput> */}
            <PhoneInput
              value={inputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
            />
          </View>

          <TextInput
            placeholder="Fecha de nacimiento"
            className="pt-2 pb-2 pl-2 pr-2 mt-5 bg-white"
          ></TextInput>
          <Text style={styles.rule} className="mt-5">
            Debes tener al menos 18 años para registrarte. Otros usuarios de
            Barquea no verán tu cumpleaños.
          </Text>
          <View
            className="flex flex-row items-start mt-3 "
            style={styles.checkContainer}
          >
            <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
            <Text style={styles.checkLabel} className="mt-2">
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

  rule: {
    color: "#102a5e",
    fontSize: 12,
    fontFamily: "Lexend Deca",
    fontWeight: "300", // Use 'bold', 'normal', or numeric values as needed
  },
  checkContainer: {
    flexDirection: "row",
  },
  checkLabel: {
    color: "#102a5e",
    fontSize: 13, // fontSize in number
    fontFamily: "Lexend Deca", // Ensure you have this font loaded
    fontWeight: "300", // fontWeight, you can also use 'normal' for 400
    lineHeight: 20, // lineHeight in number
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
