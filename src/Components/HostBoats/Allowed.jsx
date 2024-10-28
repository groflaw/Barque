import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";

import CheckBox from "../Basic/CheckBox";
import { useNavigation } from "@react-navigation/native";

import pets from "../../../assets/Icons/pets.png";
import liquor from "../../../assets/Icons/liquor.png";
import vaping from "../../../assets/Icons/vaping.png";
import shoes from "../../../assets/Icons/shoes.png";
import bottle from "../../../assets/Icons/bottle.png";
import child from "../../../assets/Icons/child.png";
import fish from "../../../assets/Icons/fish.png";
import speaker from "../../../assets/Icons/speaker.png";

const Allowed = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("Allowed");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} className="mb-5">
          Que está permitido en la embarcación?
        </Text>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={pets}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={liquor}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={vaping}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={shoes}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={bottle}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={child}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={fish}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
          </View>
          <CheckBox value={isChecked} onValueChange={setIsChecked}></CheckBox>
        </View>
        <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
          <View className="flex flex-row items-center">
            <Image source={speaker}></Image>
            <Text className="ml-4">Aire Acondicionado</Text>
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
    paddingTop: 40,
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
export default Allowed;
