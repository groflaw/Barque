import { useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const Option = ({ width }) => {
  return (
    <View style={[styles.OptionContainer, { width }]}>
      <TextInput
        style={styles.Numericinput}
        // value={String(value)} // Convert number to string for TextInput
        keyboardType="numeric" // Numeric keyboard
        editable={true} // Make the TextInput non-editable
      />
      <View style={styles.NumericbuttonsContainer}>
        <TouchableOpacity>
          <Text>▼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    backgroundColor: "#ffffff", // Background color
    color: "#94a3b8", // This won't affect the container itself but will be used for text
    fontSize: 14, // Font size in points
    fontFamily: "Lexend Deca", // Ensure this font is available in your project
    shadowColor: "#030303",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 5,
    elevation: 2,
  },
  Numericinput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
  },
  NumericbuttonsContainer: {
    flexDirection: "column",
    paddingLeft: 10,
  },
});
export default Option;
