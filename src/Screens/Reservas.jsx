import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import List from "../Components/Reservars/List";
import Detail from "../Components/Reservars/Detail";
import Confirm from "../Components/Reservars/Confirm";
import PaymentDetail from "../Components/Reservars/PaymentDetail";
import SelectPayment from "../Components/Reservars/SelectPayment";
import CashPayment from "../Components/Reservars/CashPayment";
import CardPayment from "../Components/Reservars/CardPayment";
import PaymentConfirm from "../Components/Reservars/PaymentConfirm";
import ZellePayment from "../Components/Reservars/ZellePayment";
import BinancePayment from "../Components/Reservars/BinancePayment";
import PaypalPayment from "../Components/Reservars/PaypalPayment";
import BankPayment from "../Components/Reservars/BankPayment";

import backImage from "../../assets/Icons/headerback.png";
import hostmarkImage from "../../assets/Icons/headermark.png";

const Reservas = () => {
  const Stack = createNativeStackNavigator(); //Navigator Screen
  const navigation = useNavigation();
  const HomeHeaderRight = () => {
    const state = navigation.getState();

    const currentRoute = state.routes[state.index].state
      ? state.routes[state.index].state.routes[
          state.routes[state.index].state.index
        ].name
      : state.routes[state.index].name;
    const handleBackPress = () => {
      if (currentRoute === "List") {
        navigation.navigate("Main");
      } else if (
        [
          "Detail",
          "Confirm",
          "PaymentDetail",
          "SelectPayment",
          "CashPayment",
          "CardPayment",
          "PaymentConfirm",
          "ZellePayment",
          "BinancePayment",
          "PaypalPayment",
          "BankPayment",
        ].includes(currentRoute)
      ) {
        navigation.navigate("List"); 
      }
    };
    return (
      <View
        className="p-5 mt-2"
        style={{
          marginTop: StatusBar.currentHeight,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: "white",
        }}
      >
        <View className="relative flex flex-row items-center justify-center space-x-3">
          <TouchableOpacity
            style={styles.headerback}
            onPress={() => {
              handleBackPress();
            }}
          >
            <Image source={backImage}></Image>
          </TouchableOpacity>
          <Image source={hostmarkImage}></Image>
        </View>
      </View>
    );
  };
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={List}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="PaymentDetail"
        component={PaymentDetail}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="SelectPayment"
        component={SelectPayment}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="CashPayment"
        component={CashPayment}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="CardPayment"
        component={CardPayment}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="PaymentConfirm"
        component={PaymentConfirm}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="ZellePayment"
        component={ZellePayment}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="BinancePayment"
        component={BinancePayment}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="PaypalPayment"
        component={PaypalPayment}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="BankPayment"
        component={BankPayment}
        options={{ header: () => <HomeHeaderRight /> }}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  headerback: {
    position: "absolute",
    left: 0,
  },
});
export default Reservas;
