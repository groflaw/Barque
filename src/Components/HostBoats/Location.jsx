import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomTextInput from "../Basic/Input";
import Option from "../Basic/Option";

const Location = () => {
  const navigation = useNavigation();
  const nextStep = () => {
    navigation.navigate("AddBoatImages");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} className="mt-5">
          Location of the boat
        </Text>
        <Text style={styles.des} className="mt-4">
          Tell us the exact location of the boat. To protect your privacy this
          information will only be seen by users who already have a confirmed
          reservation.
        </Text>
        <View className="mt-8 mb-3">
          <Text>Boat Name</Text>
          <CustomTextInput></CustomTextInput>
        </View>
        <Option></Option>
        <Text className="mt-5">Address</Text>
        <View className="mt-5 mb-3">
          <Text>Marina name</Text>
          <CustomTextInput></CustomTextInput>
        </View>
        <View>
          <Text>Address </Text>
          <CustomTextInput></CustomTextInput>
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
    color: "#000000", // Black color
    fontSize: 12, // Font size of 12
    fontFamily: "Lexend Deca", // Using the custom font
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
export default Location;
