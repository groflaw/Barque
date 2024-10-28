import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Convert from "../Basic/Convert";

import personalImage from "../../../assets/Icons/personal.png";
import credietImage from "../../../assets/Icons/credit.png";
import rightArrowImage from "../../../assets/Icons/rightArrow.png";
import supportImage from "../../../assets/Icons/support.png";
import notifiImage from "../../../assets/Icons/notification.png";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();

  const nextStep = (url) => {
    navigation.navigate(url);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile} className="flex items-center">
          <View className="relative">
            <View style={styles.avatar}>
              <Text className="text-3xl text-white ">M</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.plus} className="absolute">
                <Text styles={styles.avatar}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.name} className="mt-4">
            Mario lemma
          </Text>
          <Text>Desde 2024</Text>
        </View>
        <TouchableOpacity onPress={() => nextStep("Personal")}>
          <View className="flex flex-row items-center justify-between mt-12 mb-6">
            <View className="flex flex-row items-center">
              <Image source={personalImage}></Image>
              <Text style={styles.key}>Informacion de Cuenta</Text>
            </View>
            <Image source={rightArrowImage}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nextStep("Payment")}>
          <View className="flex flex-row items-center justify-between mt-6 mb-6">
            <View className="flex flex-row items-center">
              <Image source={credietImage}></Image>
              <Text style={styles.key}>Metodos de Pago</Text>
            </View>
            <Image source={rightArrowImage}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nextStep("Notification")}>
          <View className="flex flex-row items-center justify-between mt-6 mb-6">
            <View className="flex flex-row items-center">
              <Image source={notifiImage}></Image>
              <Text style={styles.key}>Ajustes de notificaciones</Text>
            </View>
            <Image source={rightArrowImage}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nextStep("Support")}>
          <View className="flex flex-row items-center justify-between mt-6 mb-6">
            <View className="flex flex-row items-center">
              <Image source={supportImage}></Image>
              <Text style={styles.key}>Soporte</Text>
            </View>
            <Image source={rightArrowImage}></Image>
          </View>
        </TouchableOpacity>
        <Convert></Convert>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  profile: {
    marginTop: 60,
  },
  avatar: {
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 20,
    backgroundColor: "#0288d0",
    borderRadius: 50,
  },
  plus: {
    bottom: 0,
    right: 0,
    borderRadius: 50,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: "#72d4ba",
  },
  name: {
    color: "#0a252f",
    fontSize: 19, // Numeric value
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "700", // String for font weight
    lineHeight: 27, // Numeric value
  },
  key: {
    marginLeft: 15,
    color: "#17233c",
    fontSize: 16, // Use numeric value
    fontFamily: "Lexend Deca", // Custom font family
    fontWeight: "500", // String for font weight
    lineHeight: 23, // Use numeric value
  },
});
export default Main;
