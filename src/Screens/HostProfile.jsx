import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import HostProfileMain from "../Components/Profile/HostProfileMain";
import ChangePasword from "../Components/Profile/ChangePassword";
import Payment from "../Components/Profile/Payment";

import backImage from "../../assets/Icons/hostheaderback.png";
import markImage from "../../assets/Icons/dashboardmark.png";

const HostProfile = () => {
  const Stack = createNativeStackNavigator(); 
  const navigation = useNavigation();
  const HomeHeaderRight = () => {
    const state = navigation.getState(); 
    let currentRoute = "";

    
    const currentNavigator = state.routes[state.index];

  
    if (currentNavigator.state) {
      const nestedState = currentNavigator.state;
      currentRoute = nestedState.routes[nestedState.index].name;
    } else {
      currentRoute = currentNavigator.name;
    }

    const handleBackPress = () => {
      if (currentRoute == "HostProfile") {
        navigation.navigate("DashBoard");
      } else if (["ChangePassword"].includes(currentRoute)) {
        navigation.navigate("HostProfileMain");
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
    <Stack.Navigator initialRouteName="HostProfileMain">
      <Stack.Screen
        name="HostProfileMain"
        component={HostProfileMain}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasword}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
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
export default HostProfile;
