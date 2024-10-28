import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Number = ({ width }) => {
  return (
    <View style={[styles.NumericContainer, { width }]} className="mt-2">
      <TextInput
        style={styles.Numericinput}
        // value={String(value)} // Convert number to string for TextInput
        keyboardType="numeric" // Numeric keyboard
        editable={true} // Make the TextInput non-editable
      />
      <View style={styles.NumericbuttonsContainer}>
        <TouchableOpacity>
          <Text>▲</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>▼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NumericContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    borderRadius: 5, // Border radius in points (no 'px')
    backgroundColor: "#ffffff", // Background color
    color: "#94a3b8", // This won't affect the container itself but will be used for text
    fontSize: 14, // Font size in points
    fontFamily: "Lexend Deca", // Ensure this font is available in your project
    lineHeight: 36, // Line height in points
    shadowColor: "#030303", // Color for shadow
    shadowOffset: {
      width: 2, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.1, // Shadow transparency
    shadowRadius: 4, // Blur effect for the shadow
    elevation: 2, // Android shadow (elevation value)
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
export default Number;
