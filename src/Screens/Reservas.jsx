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

import backImage from "../../assets/Icons/headerback.png";
import hostmarkImage from "../../assets/Icons/headermark.png";

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
          <TouchableOpacity style={styles.headerback} onPress={()=>navigation.navigate("Reservas")}>
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
        options={{header:()=><HomeHeaderRight/>}}
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
