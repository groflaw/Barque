import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useEffect } from "react";

const Number = ({ width }) => {
  return (
    <View style={[styles.NumericContainer, { width }]} className="mt-2">
      <TextInput
        style={styles.Numericinput}
        keyboardType="numeric"
        editable={true}
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
    borderRadius: 5,
    backgroundColor: "#ffffff",
    color: "#94a3b8",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 36,
    shadowColor: "#030303",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
export default Number;
