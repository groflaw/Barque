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

import CarDetailed from "../Components/CarDetailed/CarDetailed";
import BookingDetail from "../Components/CarDetailed/BookingDetail";
import BookingConfirm from "../Components/CarDetailed/BookingConfirm";

import backImage from "../../assets/Icons/headerback.png";
import hostmarkImage from "../../assets/Icons/headermark.png";

const Booking = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const HomeHeaderRight = () => {
    const state = navigation.getState();

    const currentRoute = state.routes[state.index].state
      ? state.routes[state.index].state.routes[
          state.routes[state.index].state.index
        ].name
      : state.routes[state.index].name;

    // const handleBackPress = () => {};
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
              //   handleBackPress();
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
    <Stack.Navigator initialRouteName="CardDetail">
      <Stack.Screen
        name="CardDetail"
        component={CarDetailed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetail}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="BookingConfirm"
        component={BookingConfirm}
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
export default Booking;
