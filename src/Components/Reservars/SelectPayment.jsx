import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import bank from "../../../assets/Icons/bank.png";
import zelle from "../../../assets/Icons/zelle.png";
import binance from "../../../assets/Icons/binance.png";
import paypal from "../../../assets/Icons/paypal.png";
import card from "../../../assets/Icons/card.png";
import cash from "../../../assets/Icons/cash.png";

const SelectPayment = () => {
  const navigation = useNavigation();
  const nextstep = (url) => {
    navigation.navigate(url);
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title} className="mt-2">
            Select payment method
          </Text>
          <TouchableOpacity
            onPress={() => {
              nextstep("CardPayment");
            }}
          >
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={card} className="absolute left-3"></Image>
              <Text style={styles.itemText}>Credit Card</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              nextstep("ZellePayment");
            }}
          >
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={zelle} className="absolute left-3"></Image>
              <Text style={styles.itemText}>Zelle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              nextstep("BinancePayment");
            }}
          >
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={binance} className="absolute left-3"></Image>
              <Text style={styles.itemText}>Binance Pay</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              nextstep("PaypalPayment");
            }}
          >
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={paypal} className="absolute left-3"></Image>
              <Text style={styles.itemText}>PayPal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              nextstep("CashPayment");
            }}
          >
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={cash} className="absolute left-3"></Image>
              <Text style={styles.itemText}>Cash</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              nextstep("BankPayment");
            }}
          >
            <View
              className="relative flex flex-row items-center justify-center mt-5"
              style={styles.item}
            >
              <Image source={bank} className="absolute left-3"></Image>
              <Text style={styles.itemText}>Bank Transfer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  title: {
    color: "#17233C",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  item: {
    borderRadius: 6,
    backgroundColor: "#17233C",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  itemText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 20,
    textAlign: "center",
  },
});
export default SelectPayment;
