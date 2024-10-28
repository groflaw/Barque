import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Navbar from "../Components/Navbar";
import backImage from "../../assets/Icons/hostheaderback.png";
import markImage from "../../assets/Icons/dashboardmark.png";
const PaymentHistory = () => {
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
          <TouchableOpacity style={styles.headerback}>
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
    color: "#030303", // Dark gray color
    fontSize: 20, // Font size as a number (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
  },
  totalPrice: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca", // Ensure this font is loaded in your project
    fontWeight: "500", // Note: fontWeight accepts numeric values; '500' is valid
    lineHeight: 24,
  },
  forpay: {
    color: "#17233c",
    fontSize: 16, // No 'px' needed; size is in density-independent pixels
    fontFamily: "Lexend Deca", // Ensure this font is loaded in your project
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#ffffff", // Background color
    borderRadius: 8, // Border radius
    borderWidth: 1, // Border width
    borderColor: "#efefef", // Border color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 4, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 12, // Shadow radius
    elevation: 5, // Android shadow equivalent
    padding: 16, // Padding inside the card (adjust as needed)
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
});
export default PaymentHistory;
