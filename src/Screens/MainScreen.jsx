import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";

import MainBody from "../Components/MainBody";
import LeaveReview from "../Components/MainBody/LeaveReview";

import backImage from "../../assets/Icons/headerback.png";
import markImage from "../../assets/Icons/headermark.png";

const HostBoats = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const route = useRoute();

  const HomeHeaderRight = () => {
    const handleBackPress = () => {
      navigation.navigate("Mainbody");
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
    <Stack.Navigator initialRouteName="Mainbody">
      <Stack.Screen
        name="Mainbody"
        component={MainBody}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LeaveReview"
        component={LeaveReview}
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
