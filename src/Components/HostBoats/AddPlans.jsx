import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Number from "../Basic/Number";
import Option from "../Basic/Option";

const AddPlans = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("AddDocImage");
  };

  const Options = [
    {
      _id: 1,
      name: "Yes",
    },
    {
      _id: 2,
      name: "No",
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Agrega tus planes</Text>
          <Text style={styles.des} className="mt-3 w-96">
            Agrega tus planes de viaje. Podrás añadir hasta 5 planes diferentes
            para tu embarcación indicando su precio, horario, si incluye capitán
            y la descripción de los destinos y lo que incluye el plan.
          </Text>
          <Text style={styles.addTemp} className="w-24 mt-3 text-center">
            + Agregar
          </Text>
          <View style={styles.card} className="mt-4">
            <View className="flex flex-row items-center justify-between">
              <Text style={styles.head}>Plan1</Text>
              <Text style={styles.price}>$292</Text>
            </View>
            <TextInput
              className="mt-4"
              style={styles.textarea}
              multiline
              numberOfLines={4} // Adjust the number of lines as needed
              // onChangeText={(text) => setText(text)}
              // value={text}
              placeholder="Describe los destinos de este plan y todo lo incluye.."
              placeholderTextColor="#aaaaaa" // Placeholder color
            />
            <View className="flex flex-row items-center mb-5 ">
              <Text className="mt-2 mr-3">Horario</Text>
              <Number width={90}></Number>
              <Text className="mt-2 ml-3 mr-3">a</Text>
              <Number width={90}></Number>
            </View>
            {/* <Option width={150}></Option> */}
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
    </>
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
    color: "#17233c", // Text color
    fontSize: 20, // Font size as a number, no 'px'
    fontFamily: "Lexend Deca", // Font family
    fontWeight: "700", // Font weight as a string or number
  },
  des: {
    color: "#000000", // Text color
    fontSize: 12, // Font size as a number, no 'px'
    fontFamily: "Lexend Deca", // Font family
  },
  addTemp: {
    borderRadius: 6, // Border radius as a number
    backgroundColor: "#2a8500", // Background color
    padding: 10, // Add some padding for a better touch area
    color: "#ffffff", // Text color
    fontSize: 14, // Font size as a number, no 'px'
    fontFamily: "Lexend Deca", // Font family
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
  head: {
    color: "#17233c", // Text color
    fontSize: 16, // Font size as a number, no 'px'
    fontFamily: "Lexend Deca", // Font family
    fontWeight: "500", // Font weight
  },
  price: {
    backgroundColor: "#fefffe", // Background color
    borderRadius: 10, // Border radius as a number
    borderWidth: 1, // Border width
    borderColor: "#bec0e3", // Border color
    padding: 5, // Optional: Add padding for better layout (adjust as needed)
    color: "#0751c1", // Text color
    fontSize: 14, // Font size as a number, no 'px'
    fontFamily: "Lexend Deca", // Font family
    fontWeight: "500", // Font weight
  },
  textarea: {
    height: 100, // Adjust height as needed
    borderColor: "#bec0e3", // Border color
    borderWidth: 1, // Border width
    borderRadius: 10, // Rounded corners
    backgroundColor: "#fefffe", // Background color
    padding: 10, // Inner padding
    color: "#000", // Text color
    fontSize: 14, // Font size
    fontFamily: "Lexend Deca", // Font family
    fontWeight: "500", // Font weight
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
export default AddPlans;
