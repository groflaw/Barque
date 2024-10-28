import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import searchImage from "../../../assets/Icons/Iconsearch.png";

const IconComponent = () => (
  <Svg width={21} height={21} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" fill="#ffffff" />
  </Svg>
);

const Brands = ({ onpress }) => {
  return (
    <View className="flex px-6 mb-2" style={{ height: 110 }}>
      <View
        style={styles.search}
        className="flex flex-row items-center flex-1 p-2 mt-5 space-x-2 bg-white rounded-lg"
      >
        <Image source={searchImage} style={styles.icon}></Image>
        <TextInput
          style={styles.text}
          placeholder="Lecheria, Venezuela📍"
          className="flex-1 text-black bg-white"
        />
      </View>
      <View className="flex flex-row items-center ">
        <TouchableOpacity style={styles.button} onPress={onpress}>
          <IconComponent />
          <Text style={styles.btnText}>Filtros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    width: "100%",
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.75)",
    shadowOffset: {
      width: 0, // X offset
      height: 6, // Y offset
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 12,
  },
  text: {
    color: "#000000",
    fontSize: 13,
    fontFamily: "Lexend Deca",
    lineHeight: 25,
  },
  icon: {
    width: 16,
    height: 24,
  },
  button: {
    cursor: "pointer",
    marginTop: 20,
    width: 107,
    height: 27,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#072d4c",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 14,
    paddingLeft: 7,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 24,
  },
});

export default Brands;
