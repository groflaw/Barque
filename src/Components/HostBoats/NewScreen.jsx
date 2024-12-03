import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import seeImage from "../../../assets/Background/see.png";

const NewScreen = () => {
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("BoatData");
  };
  return (
    <>
      <View className="relative bg-slate-400">
        <Image source={seeImage} className="w-full"></Image>
        <Text className="absolute top-28 text-center" style={styles.title}>
          Cuentanos de tu embacarción
        </Text>
        <Text className="absolute  top-40 text-center" style={styles.des}>
          Con estos datos podremos encontrar mejores clientes para ti. Es un
          proceso sencillo y rápido que te hara conseguir más rentas
        </Text>
      </View>
      <View style={styles.bottom} className="absolute bottom-0 w-full">
        <TouchableOpacity onPress={nextStep}>
          <Text style={styles.buttonText} className="text-center">
            COMIENZA AHORA
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#ffffff", 
    fontSize: 20, 
    fontFamily: "Lexend Deca", 
    fontWeight: "700",
    width : '100%',
  },
  des: {
    color: "#ffffff", 
    fontSize: 18, 
    fontFamily: "Lexend Deca",
    width : '100%',
  },
  bottom: {
    backgroundColor: "white",
    padding: 20,
  },
  buttonText: {
    padding: 20,
    borderRadius: 6,
    backgroundColor: "#2a8500",
    color: "#ffffff", 
    fontSize: 13,
    fontFamily: "Mulish",
    fontWeight: "900", 
  },
});
export default NewScreen;
