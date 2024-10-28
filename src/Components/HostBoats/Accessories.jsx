import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import CheckBox from "../Basic/CheckBox";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import aircondition from "../../../assets/Icons/aircondition.png";
import gps from "../../../assets/Icons/gps.png";
import grill from "../../../assets/Icons/grill.png";
import cocina from "../../../assets/Icons/cocina.png";
import freshwater from "../../../assets/Icons/freshwater.png";
import music from "../../../assets/Icons/music.png";
import bluetooth from "../../../assets/Icons/bluetooth.png";
import tv from "../../../assets/Icons/tv.png";
import fishing from "../../../assets/Icons/fishing.png";

const Accessories = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("Allowed");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} className="mt-5">
          Accesorios disponibles
        </Text>
        <Text style={styles.des} className="mt-5">
          Selecciona los accesorios con que dispone tu embarcación{" "}
        </Text>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={aircondition}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={gps}></Image>
            <Text className="ml-4">Navegación GPS</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={grill}></Image>
            <Text className="ml-4">Parrillera</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={cocina}></Image>
            <Text className="ml-4">Cocina</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={freshwater}></Image>
            <Text className="ml-4">Bomba de agua dulce</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={music}></Image>
            <Text className="ml-4">Sistema de Audio</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={bluetooth}></Image>
            <Text className="ml-4">Bluetooth para audio</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={tv}></Image>
            <Text className="ml-4">TV</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={fishing}></Image>
            <Text className="ml-4">Equipo de pesca</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
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
    color: "#172b4d",
    fontSize: 13,
    fontFamily: "Lexend Deca", // Ensure this font is properly linked in your project
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
export default Accessories;
