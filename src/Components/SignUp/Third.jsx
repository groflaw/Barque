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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckBox from "../Basic/CheckBox";
import CustomTextInput from "../Basic/Input";
import LoadingIndicator from "../Basic/LoadingIndicator";

import { Signup } from "../../Actions/Auth/auth.acitons";

const Third = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Global.loading);

  const [personInfo, setPersonInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDay: "",
    password: "",
    phoneNumber: "",
  });

  const [checkPolish, setCheckPolish] = useState(false);
  const [checkSMS, setCheckSMS] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const handleInputValue = (phoneNumber) => {
    setInputValue(phoneNumber);
    if (selectedCountry) {
      const fullPhoneNumber = `${selectedCountry.callingCode} ${phoneNumber}`;
      setPersonInfo((prevState) => ({
        ...prevState,
        phoneNumber: fullPhoneNumber,
      }));
    }
  };

  const handleSelectedCountry = (country) => {
    setSelectedCountry(country);
    if (country) {
      const fullPhoneNumber = `${country.callingCode} ${inputValue}`;
      setPersonInfo((prevState) => ({
        ...prevState,
        phoneNumber: fullPhoneNumber,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    const result = await dispatch(Signup(personInfo));

    if (result.errors) {
      setErrorMessages(result.errors); // Set error messages in state
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.container}>
              <Text style={styles.Title}> Crear una Cuenta </Text>
              <CustomTextInput
                placeholder="First Name"
                value={personInfo.firstName}
                onChange={handleChange}
                name="firstName"
                sort={false}
              />
              {errorMessages.firstName && (
                <Text style={styles.error}>{errorMessages.firstName}</Text>
              )}
              <CustomTextInput
                placeholder="Last Name"
                value={personInfo.lastName}
                onChange={handleChange}
                name="lastName"
                sort={false}
              />
              {errorMessages.lastName && (
                <Text style={styles.error}>{errorMessages.lastName}</Text>
              )}
              <CustomTextInput
                placeholder="example@example.com"
                value={personInfo.email}
                onChange={handleChange}
                name="email"
                sort={false}
              />
              {errorMessages.email && (
                <Text style={styles.error}>{errorMessages.email}</Text>
              )}
              <CustomTextInput
                placeholder="Enter a password of at least 6 characters."
                value={personInfo.password}
                onChange={handleChange}
                name="password"
                sort={true}
              />
              {errorMessages.password && (
                <Text style={styles.error}>{errorMessages.password}</Text>
              )}
              <View className="flex flex-row items-center justify-between mt-5 mb-3">
                <PhoneInput
                  value={inputValue}
                  onChangePhoneNumber={handleInputValue}
                  selectedCountry={selectedCountry}
                  onChangeSelectedCountry={handleSelectedCountry}
                />
              </View>
              <CustomTextInput
                placeholder="01/01/1990"
                value={personInfo.birthDay}
                onChange={handleChange}
                name="birthDay"
                sort={false}
              />
              {errorMessages.birthDay && (
                <Text style={styles.error}>{errorMessages.birthDay}</Text>
              )}
              <Text style={styles.rule} className="mt-5">
                Debes tener al menos 18 años para registrarte. Otros usuarios de
                Barquea no verán tu cumpleaños.
              </Text>
              <View
                className="flex flex-row items-start mt-3"
                style={styles.checkContainer}
              >
                <CheckBox value={checkPolish} onValueChange={setCheckPolish} />
                <Text style={styles.checkLabel} className="mt-2">
                  Aceptar las Condiciones de servicio y la Política de
                  privacidad.
                </Text>
              </View>
              <View
                className="flex flex-row items-start mt-3"
                style={styles.checkContainer}
              >
                <CheckBox value={checkSMS} onValueChange={setCheckSMS} />
                <Text style={styles.checkLabel}>
                  'Doy mi consentimiento para recibir material de marketing
                  promocional a través de un sistema automatizado de mensajes de
                  texto SMS al número de teléfono que he proporcionado para mi
                  cuenta. El consentimiento no es una condición para registrarse
                  en una cuenta o comprar cualquier servicio. Ver la política de
                  mensajes de texto SMS de Barquea.'
                </Text>
              </View>
              <TouchableOpacity
                disabled={
                  !checkSMS ||
                  !checkPolish ||
                  selectedCountry == null ||
                  inputValue.trim() === ""
                }
                onPress={() => {
                  handleSignup();
                }}
              >
                <Text style={styles.Button} className="text-center mt-9">
                  Confirmar
                </Text>
              </TouchableOpacity>
              {errorMessages.general && (
                <Text style={styles.error}>{errorMessages.general}</Text>
              )}
            </View>
          </View>
        </ScrollView>
      )}
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
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 26,
  },

  rule: {
    color: "#102a5e",
    fontSize: 12,
    fontFamily: "Lexend Deca",
    fontWeight: "300",
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
  error: {
    color: "red", // Red color for the error message
    fontSize: 12, // Small font size
    marginTop: 2, // Space between the input and the error message
  },
});
export default Third;
