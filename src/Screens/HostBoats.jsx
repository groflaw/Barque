import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";

import Myboats from "../Components/HostBoats/Myboats";
import Option from "../Components/HostBoats/Option";
import NewScreen from "../Components/HostBoats/NewScreen";
import BoatData from "../Components/HostBoats/BoatData";
import AddPlans from "../Components/HostBoats/AddPlans";
import AddDocImage from "../Components/HostBoats/AddDocImages";
import Location from "../Components/HostBoats/Location";
import AddBoatImages from "../Components/HostBoats/AddBoatImages";
import Cancellation from "../Components/HostBoats/Cancellation";
import Accessories from "../Components/HostBoats/Accessories";
import Allowed from "../Components/HostBoats/Allowed";

import backImage from "../../assets/Icons/hostheaderback.png";
import markImage from "../../assets/Icons/dashboardmark.png";

const HostBoats = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const route = useRoute();

  const HomeHeaderRight = () => {
    const gotoMain = () => {
      // Access the navigation state
      const state = navigation.getState();

      // We want to drill down to the nested route
      const currentRoute = state.routes[state.index];

      // Check if we have a nested state
      let currentRouteName = "";
      if (currentRoute.state) {
        const nestedState = currentRoute.state;
        currentRouteName = nestedState.routes[nestedState.index].name; // Correctly get the name of the current nested route
      } else {
        currentRouteName = currentRoute.name; // Fallback to the current route name if no state
      }
      switch (currentRouteName) {
        case "Myboats":
          navigation.navigate("Main");
          break;
        case "Option":
        case "NewScreen":
          navigation.navigate("Myboats");
          break;
        default:
          navigation.navigate("Option");
          break;
      }
    };
    return (
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
              gotoMain();
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
    <Stack.Navigator initialRouteName="Myboats">
      <Stack.Screen
        name="Myboats"
        component={Myboats}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Option"
        component={Option}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="NewScreen"
        component={NewScreen}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="BoatData"
        component={BoatData}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="AddPlans"
        component={AddPlans}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="AddDocImage"
        component={AddDocImage}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="AddBoatImages"
        component={AddBoatImages}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Cancellation"
        component={Cancellation}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Accessories"
        component={Accessories}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Allowed"
        component={Allowed}
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
export default HostBoats;
