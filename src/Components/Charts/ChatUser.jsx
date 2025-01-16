import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import userImage from "../../../assets/Icons/user.png";
import selectImage from "../../../assets/Icons/select.png";

const ChatUser = () => {
  const navigation = useNavigation();
  const toSingleChat = () => {
    navigation.navigate("SingleChat");
  };
  return (
    <TouchableOpacity onPress={toSingleChat}>
      <View
        style={styles.person}
        className="flex flex-row items-center justify-between p-3 mt-4"
      >
        <Image source={userImage}></Image>
        <View>
          <Text style={styles.name}>Capitán José Pérez</Text>
          <Text style={styles.summary}>Solicitud de reserva confirmada</Text>
        </View>
        <Image source={selectImage}></Image>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  person: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: "#efefef",
    boxSizing: "border-box", // Not applicable in React Native
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5, // For Android shadow effect
  },
  name: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Lato", // Make sure the font is loaded properly
    fontWeight: "700", // Use 'bold' or numeric values
    lineHeight: 24,
  },
  summary: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lato",
    fontWeight: "300",
    lineHeight: 20,
  },
});
export default ChatUser;
