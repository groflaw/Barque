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
import Profile from "../Components/Reservars/Profile";

import backImage from "../../assets/Icons/headerback.png";
import hostmarkImage from "../../assets/Icons/headermark.png";
import usermarkImage from "../../assets/Icons/dashboardmark.png";

const Reservas = () => {
  const Stack = createNativeStackNavigator(); //Navigator Screen
  const navigation = useNavigation();
  const HomeHeaderRight = () => {
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
          <TouchableOpacity style={styles.headerback} onPress={()=>navigation.navigate("Main")}>
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
        name="Profile"
        component={Profile}
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
