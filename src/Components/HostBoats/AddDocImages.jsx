import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import photoImage from "../../../assets/Icons/photo.png";
import { useEffect } from "react";
const AddDocImage = () => {
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("Location");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} className="mt-4">
          Agrega documentación
        </Text>
        <Text style={styles.des} className="mt-5">
          Necesitamos verificar por la seguridad tuya y de los clientes que eres
          el propietario o el autorizado de la embarcacion.
        </Text>
        <Text style={styles.des} className="mt-5">
          Por favor, añade imágenes de los documentos de tu embarcación.
          Asegurate de que las imagenes tengan buena calidad y sean legibles.
        </Text>

        <View style={styles.card} className="mt-5">
          <View style={styles.imagecard} className="flex items-center">
            <TouchableOpacity>
              <Image source={photoImage}></Image>
            </TouchableOpacity>
            <Text className="mt-2">Subir Foto de Frente</Text>
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
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  des: {
    color: "#000000", // Black color
    fontSize: 13, // Font size of 12
    fontFamily: "Lexend Deca", // Custom font family
  },
  card: {
    backgroundColor: "#ffffff", // Background color
    borderRadius: 8, // Border radius
    borderWidth: 1, // Border width
    borderColor: "#efefef", // Border color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 12, // Shadow radius
    elevation: 5, // Android shadow equivalent
    padding: 60, // Padding inside the card (adjust as needed)
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
export default AddDocImage;
