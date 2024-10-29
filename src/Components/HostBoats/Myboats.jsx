import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../Navbar";
import CustomSwitch from "../Basic/Switch";

import boatcard from "../../../assets/Icons/boatcard.png";

const Myboats = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("Option");
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Title}>Mis Embarcaciones</Text>
          <View
            style={styles.card}
            className="flex flex-row items-center justify-between mt-4"
          >
            <View className="flex flex-row items-center">
              <Image style={styles.cardImage} source={boatcard}></Image>
              <View className="ml-3">
                <Text style={styles.boatName}>Don Nassib</Text>
                <Text style={styles.boatDetail}>Tipo: Sailboat</Text>
                <Text style={styles.boatDetail}>Ubicación: Marina Bay</Text>
              </View>
            </View>
            <View>
              <Text style={styles.edit} className="mb-2 text-center">
                Editor
              </Text>
              <CustomSwitch></CustomSwitch>
            </View>
          </View>
          <View className="flex items-center mt-7 w-100">
            <TouchableOpacity onPress={nextStep}>
              <Text style={styles.addBoat} className="text-center w-72">
                + Agregar embarcación
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  Title: {
    color: "#17233c", // color: '#17233c'
    fontSize: 20, // fontSize: '20px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    fontWeight: "700",
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
    padding: 16, // Padding inside the card (adjust as needed)
  },
  cardImage: {
    width: 50, // width: '50px' converts to 50 in React Native
    height: 50, // height: '50px' converts to 50 in React Native
    borderRadius: 8, // borderRadius: '8px' converts to 8 in React Native
    backgroundColor: "#0751c1",
  },
  boatName: {
    color: "#17233c", // color: '#17233c'
    fontSize: 18, // fontSize: '18px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    fontWeight: "600", // fontWeight: 600
  },
  boatDetail: {
    color: "#17233c", // color: '#17233c'
    fontSize: 14, // fontSize: '14px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    lineHeight: 20,
  },
  edit: {
    borderRadius: 6, // borderRadius: '6px'
    backgroundColor: "#072d4c", // backgroundColor: '#072d4c'
    padding: 8,
    color: "#ffffff", // color: '#ffffff'
    fontSize: 14, // fontSize: '14px'
    fontFamily: "Lexend Deca",
  },
  addBoat: {
    borderRadius: 6, // borderRadius: '6px'
    backgroundColor: "#2a8500", // backgroundColor: '#2a8500'
    padding: 10,
    color: "#ffffff", // color: '#ffffff'
    fontSize: 16, // fontSize: '16px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    fontWeight: "700",
  },
});

export default Myboats;
