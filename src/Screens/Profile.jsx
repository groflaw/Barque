import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../Components/Profile/Main";
import Notification from "../Components/Profile/Notification";
import Payment from "../Components/Profile/Payment";
import AddPayment from "../Components/Profile/AddPayment";
import AddBank from "../Components/Profile/AddBank";
import Personal from "../Components/Profile/Personal";
import Support from "../Components/Profile/Support";
import Navbar from "../Components/Navbar";

import backImage from "../../assets/Icons/headerback.png";
import markImage from "../../assets/Icons/headermark.png";

const Profile = () => {
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
      if (currentRoute === "MainProfile") {
        navigation.navigate("Main");
      } else if (
        [
          "Notification",
          "Payment",
          "AddPayment",
          "AddBank",
          "Personal",
          "Support",
        ].includes(currentRoute)
      ) {
        navigation.navigate("MainProfile");
      }
    };
    return (
      <View
        className="p-5 mt-2 bg-white"
        style={{
          marginTop: StatusBar.currentHeight,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
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
          <Image source={markImage}></Image>
        </View>
      </View>
    );
  };
  return (
    <>
      <Stack.Navigator initialRouteName="MainProfile">
        <Stack.Screen
          name="MainProfile"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ header: () => <HomeHeaderRight /> }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ header: () => <HomeHeaderRight /> }}
        />
        <Stack.Screen
          name="AddPayment"
          component={AddPayment}
          options={{ header: () => <HomeHeaderRight /> }}
        />
        <Stack.Screen
          name="AddBank"
          component={AddBank}
          options={{ header: () => <HomeHeaderRight /> }}
        />

        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{ header: () => <HomeHeaderRight /> }}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{ header: () => <HomeHeaderRight /> }}
        />
      </Stack.Navigator>
      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  headerback: {
    position: "absolute",
    left: 0,
  },
});

export default Profile;
