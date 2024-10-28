import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Navbar from "../Navbar";
import { useNavigation } from "@react-navigation/native";

const First = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("Second");
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Title}>Cuenta</Text>
          <Text style={styles.head} className="mt-4">
            NO HAS INICIADO SESIÓN
          </Text>
          <Text style={styles.content} className="mt-4">
            Inicie sesión o cree una cuenta ahora
          </Text>
          <TouchableOpacity onPress={nextStep}>
            <Text style={styles.button} className="text-center mt-7">
              Iniciar Ahora
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Navbar></Navbar>
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
    padding: 10, // Optional: Add padding if needed
  },
  Title: {
    color: "#102a5e",
    fontSize: 20, // No quotes, unitless
    fontFamily: "Lexend Deca", // Ensure font is linked in your project
    fontWeight: "500",
    lineHeight: 26, // No quotes, unitless
  },
  head: {
    color: "#102a5e",
    fontSize: 14, // No quotes, unitless
    fontFamily: "Lexend Deca", // Ensure the font is linked in your project
    fontWeight: "300", // Use string or number for different font weights
    lineHeight: 18, // No quotes, unitless
  },
  content: {
    color: "#102a5e",
    fontSize: 16, // No quotes, unitless
    fontFamily: "Lexend Deca", // Ensure the font is linked in your project
    lineHeight: 26, // No quotes, unitless
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
});
export default First;
