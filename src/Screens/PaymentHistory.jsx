import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../Components/Navbar";
import backImage from "../../assets/Icons/hostheaderback.png";
import markImage from "../../assets/Icons/dashboardmark.png";
import { useEffect } from "react";

const PaymentHistory = () => {
  const navigation = useNavigation();

  return (
    <>
      <View
        className="p-5 mt-2"
        style={{
          marginTop: StatusBar.currentHeight,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: "#17233c",
        }}
      >
        <View className="relative flex flex-row items-center justify-center space-x-3">
          <TouchableOpacity
            style={styles.headerback}
            onPress={() => {
              navigation.navigate("DashBoard")
            
            }}
          >
            <Image source={backImage}></Image>
          </TouchableOpacity>
          <Image source={markImage}></Image>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Historial de Pago</Text>
          <View className="flex flex-row justify-between mt-4">
            <Text style={styles.totalPrice}>Total Pagado :</Text>
            <Text style={styles.totalPrice}>$12,345.67</Text>
          </View>
          <View className="flex flex-row justify-between mt-4">
            <Text style={styles.forpay}>Por Pagar :</Text>
            <Text style={styles.forpay}>$2,345.67</Text>
          </View>
          <View
            style={styles.card}
            className="flex flex-row items-center justify-between mt-4"
          >
            <View>
              <Text style={styles.itemText}>Fecha: 2023-09-01</Text>
              <Text style={styles.itemText}>Barco: Luxury Yacht</Text>
              <Text style={styles.itemText}>Plan 1</Text>
              <Text style={styles.itemTotal}>Ganancias: $500</Text>
            </View>
            <Text style={styles.type}>Pagada</Text>
          </View>
        </View>
      </ScrollView>
      <Navbar></Navbar>
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
    color: "#030303",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  totalPrice: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 24,
  },
  forpay: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#efefef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
    padding: 16,
  },
  itemText: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lexend Deca",
  },
  itemTotal: {
    color: "#030303",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  type: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#2a8500",
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: 600,
  },
  headerback: {
    position: "absolute",
    left: 0,
  },
});
export default PaymentHistory;
