import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import photoImage from "../../../assets/Icons/photo.png";
import { useEffect } from "react";
const AddBoatImages = () => {
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("Cancellation");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} className="mt-5">
          Agrega imágenes
        </Text>
        <Text style={styles.des} className="mt-3">
          Añade imágenes de tu embarcación. Evita subir imagenes donde aparezcan
          logos de empresas y numeros telefónicos. Estás imagenes serán editadas
          o eliminadas. Agrega mínimo 4 fotos.
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
  title: {
    color: "#17233c", // Dark blue color
    fontSize: 20, // Font size of 20
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "700", // Bold weight
  },
  des: {
    color: "#000000", // Black color
    fontSize: 12, // Font size of 12
    fontFamily: "Lexend Deca", // Custom font family
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
export default AddBoatImages;
