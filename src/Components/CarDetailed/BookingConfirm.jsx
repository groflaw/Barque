import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import BookingConfirmImage from "../../../assets/Background/bookingconfirm.png";

const BookingConfirm = () => {
  const navigation = useNavigation();
  const goHome = () => {
    navigation.navigate("Main");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={BookingConfirmImage}
          style={{ width: "100%", height: 200 }}
          className="rounded-xl"
        ></Image>
        <Text style={styles.title} className="mt-4">
          Thank you for Your Booking
        </Text>
        <Text style={styles.des} className="mt-2">
          Your booking request will has been sent to your Host! He will be
          confirming your booking request soon!
        </Text>
        <View style={styles.card} className="p-4 mt-3">
          <Text style={[styles.des, { fontWeight: 900 }]}>Next Steps:</Text>
          <Text style={styles.des} className="mt-3">
            - Check your app notifications or email for a confirmation message.
          </Text>
        </View>
        <View className="flex flex-row justify-center">
          <TouchableOpacity
            onPress={() => {
              goHome();
            }}
          >
            <View style={styles.btn} className="py-2 px-14 mt-7">
              <Text style={styles.btntext}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#efefef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },
  des: {
    color: "#101c2c",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20,
  },
  btn: {
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: "#0000ff",
  },
  btntext: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 20,
    outline: "none",
  },
});

export default BookingConfirm;
