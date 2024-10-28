import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Navbar from "../Navbar";
import { useNavigation } from "@react-navigation/native";

import bank from "../../../assets/Icons/bank.png";
import zelle from "../../../assets/Icons/zelle.png";
import binance from "../../../assets/Icons/binance.png";
import paypal from "../../../assets/Icons/paypal.png";

const AddPayment = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("AddBank");
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title} className="mt-10">
            Selecciona el tipo de cuenta
          </Text>
          <TouchableOpacity onPress={nextStep}>
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={bank} className="absolute left-3"></Image>
              <Text style={styles.itemText}>+ Cuenta bancaria</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={zelle} className="absolute left-3"></Image>
              <Text style={styles.itemText}>+ Zelle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={binance} className="absolute left-3"></Image>
              <Text style={styles.itemText}>+ Binance Pay</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={paypal} className="absolute left-3"></Image>
              <Text style={styles.itemText}>+ PayPal</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    color: "#17233C",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700", // Bold
  },
  item: {
    borderRadius: 6,
    backgroundColor: "#17233C",
    padding: 10, // Adjust padding as needed
  },
  itemText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: "700", // Bold
    lineHeight: 20,
    textAlign: "center", // Center the text
  },
});
export default AddPayment;
