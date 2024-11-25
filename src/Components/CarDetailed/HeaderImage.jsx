import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import boatImage from "../../../assets/Background/DetailImage.png";
import headerBack from "../../../assets/Icons/headerback.png";
import iconShare from "../../../assets/Icons/Iconiosshare.png";

const HeaderImage = () => {
  const navigation = useNavigation();

  return (
    <View className="relative bg-slate-500">
      <Image source={boatImage} className="w-full"></Image>
      <TouchableOpacity
        style={headerImage.back}
        onPress={() => navigation.goBack()}
      >
        <Image source={headerBack}></Image>
      </TouchableOpacity>
      <Text style={headerImage.number}>1/10</Text>
      <View style={headerImage.share}>
        <Image source={iconShare}></Image>
      </View>
    </View>
  );
};
const headerImage = StyleSheet.create({
  back: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  number: {
    position: "absolute",
    bottom: 10,
    left: 10,
    borderRadius: 22,
    backgroundColor: "#55565f",
    color: "#ffffff",
    fontSize: 9,
    fontFamily: "Lato",
    fontWeight: "600",
    lineHeight: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center",
  },
  share: {
    position: "absolute",
    top: 40,
    right: 10,
    borderRadius: 60,
    backgroundColor: "black",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
  },
});
export default HeaderImage;
