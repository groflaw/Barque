import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import First from "../Components/SignUp/First";
import Second from "../Components/SignUp/Second";
import Third from "../Components/SignUp/Third";
import Forth from "../Components/SignUp/Forth";

import backImage from "../../assets/Icons/headerback.png";
import markImage from "../../assets/Icons/headermark.png";

const SignUp = () => {
  const Stack = createNativeStackNavigator(); //Navigator Screen

  const HomeHeaderRight = () => {
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
          <TouchableOpacity style={styles.headerback}>
            <Image source={backImage}></Image>
          </TouchableOpacity>
          <Image source={markImage}></Image>
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen
        name="First"
        component={First}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Second"
        component={Second}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Third"
        component={Third}
        options={{ header: () => <HomeHeaderRight /> }}
      />
      <Stack.Screen
        name="Forth"
        component={Forth}
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

export default SignUp;
