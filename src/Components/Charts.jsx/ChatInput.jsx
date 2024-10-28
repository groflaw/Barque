import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const ChatInput = () => {
  return (
    <View className="flex flex-row items-center justify-between p-3 bg-white">
      <TextInput
        placeholder="Enter text here"
        style={styles.input}
        // className="pt-3 pb-3 pl-3 pr-2"
      ></TextInput>
      <TouchableOpacity style={buttons.button}>
        <Svg viewBox="0 0 512 512" style={buttons.icon}>
          <Path
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            fill="#ffffff"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "85%",
    borderRadiu1s: 12, // No quotes for numbers in React Native
    shadowColor: "rgba(3, 3, 3, 0.1)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1, // you want it to be fully visible for the rgba effect
    shadowRadius: 4,
    elevation: 4, // Adjust elevation for Android
    color: "black",
    fontSize: 14, // fontSize in React Native is a number, not a string
    fontFamily: "Lato",
  },
});

const buttons = StyleSheet.create({
  button: {
    width: 47,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#102a5e",
    display: "flex", // Optional for Flexbox compat
  },
  icon: {
    width: 14,
    height: 14,
  },
});
export default ChatInput;
