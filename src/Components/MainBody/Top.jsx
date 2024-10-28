import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Dimensions,
} from "react-native";
import TopImage from "../../../assets/Background/Home.jpeg";
import MarkImage from "../../../assets/Background/mark.png";
import { useTranslation } from "react-i18next";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native-gesture-handler";
const { height } = Dimensions.get("window");

const Top = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <ScrollView>
      <ImageBackground
        source={TopImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={MarkImage} style={styles.mark} />
        <Text style={styles.text}>{t("home.message")}</Text>
        <View
          style={styles.search}
          className="flex flex-row items-center flex-1 p-2 space-x-2 bg-white rounded-lg"
        >
          <MagnifyingGlassIcon color="#357ec2" size={22} />
          <TextInput
            placeholder="Search anything..."
            className="flex-1 text-black bg-white"
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: height * 0.55,
  },
  mark: {
    position: "absolute",
    top: "10%",
    left: "7%",
  },
  text: {
    position: "absolute",
    top: "25%",
    left: "7%",
    color: "#102a5e",
    fontSize: 23,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 36,
  },
  search: {
    position: "absolute",
    bottom: "5%",
    left: "7%",
    width: "86%",
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
  destinos: {
    paddingTop: "8%",
    paddingLeft: "4%",
  },
  destinostitle: {
    color: "#102a5e",
    fontSize: 17,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 26,
  },
});

export default Top;
