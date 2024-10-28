import { View, Text, Image, StyleSheet } from "react-native";
import CustomSwitch from "../Basic/Switch";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Notification</Text>
      <View
        style={styles.card}
        className="flex flex-row items-center justify-between mt-4 bg-slate-700"
      >
        <Text style={styles.key}>Nuevas ofertas</Text>
        <CustomSwitch></CustomSwitch>
      </View>
      <View
        style={styles.card}
        className="flex flex-row items-center justify-between mt-4 "
      >
        <Text style={styles.key}>Nuevas ofertas</Text>
        <CustomSwitch></CustomSwitch>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  Title: {
    color: "#030303",
    fontSize: 20, // Use a number without 'px'
    fontFamily: "Lexend Deca", // Ensure this font is loaded in your project
    fontWeight: "700", // Use string '700' for bold
    lineHeight: 28, // Use a number for lineHeight
  },
  card: {
    backgroundColor: "#ffffff", // Background color
    borderRadius: 8, // Border radius
    borderWidth: 1, // Border width
    borderColor: "#efefef", // Border color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 4, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 12, // Shadow radius
    elevation: 5, // Android shadow equivalent
    padding: 14, // Padding inside the card (adjust as needed)
  },
  key: {
    color: "#17233c",
    fontSize: 17,
    fontFamily: "Lexend Deca",
  },
});
export default Notification;
