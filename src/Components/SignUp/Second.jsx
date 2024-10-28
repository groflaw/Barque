import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import appleImage from "../../../assets/Icons/apple.png";
import googleImage from "../../../assets/Icons/google.png";
import facebookImage from "../../../assets/Icons/facebook.png";

const Second = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("Third");
  };

  const SSO = () => {
    navigation.navigate("Forth");
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.content}>
            Debe crear una cuenta para reservar un barco o enviar un mensaje a
            un propietario.
          </Text>
          <TouchableOpacity onPress={nextStep}>
            <Text style={styles.button} className="text-center mt-7">
              Regístrate con tu email
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={SSO}>
          <View style={styles.item} className="flex flex-row justify-center">
            <Image source={appleImage}></Image>
            <Text className="ml-2">Sign Up with Apple</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={SSO}>
          <View style={styles.item} className="flex flex-row justify-center">
            <Image source={googleImage}></Image>
            <Text className="ml-2">Sign Up with google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={SSO}>
          <View style={styles.item} className="flex flex-row justify-center">
            <Image source={facebookImage}></Image>
            <Text className="ml-2 ">Sing Up with FaceBook</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Offset for iOS
    shadowOpacity: 1, // Opacity for iOS
    shadowRadius: 10, // Radius for iOS
    elevation: 5, // Shadow for Android
    padding: 15, // Optional: Add padding if needed
  },
  content: {
    color: "#102a5e",
    fontSize: 14, // Remove 'px' suffix, just an integer in React Native
    fontFamily: "Lexend Deca",
    fontWeight: "300", // Use string for weights like '300'
    lineHeight: 18, // In React Native, you can directly use the number
  },
  button: {
    borderRadius: 6,
    backgroundColor: "#17233c",
    color: "#dbe6fe", // Note: Text color should be applied to Text component.
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 20,
    padding: 10, // Recommended to add some padding for better UI.
  },
  line: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Offset for iOS
    shadowOpacity: 1, // Opacity for iOS
    shadowRadius: 10, // Radius for iOS
    elevation: 5, // Shadow for Android
    padding: 3, // Optional: Add padding if needed
  },
  item: {
    margin: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Offset for iOS
    shadowOpacity: 1, // Opacity for iOS
    shadowRadius: 10, // Radius for iOS
    elevation: 5, // Shadow for Android
    padding: 15, // Optional: Add padding if needed
  },
});
export default Second;
