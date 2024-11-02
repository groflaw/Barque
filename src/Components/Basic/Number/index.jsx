import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";

const Number = ({ value, onChange, width, name }) => {
  const [numberValue, setNumberValue] = useState(value);

  useEffect(() => {
    setNumberValue(value || 0);
  }, [value]);

  const handleIncrease = () => {
    const newValue = numberValue + 1;
    setNumberValue(newValue);
    onChange({ target: { name, value: newValue } });
  };

  const handleDecrease = () => {
    const newValue = Math.max(numberValue - 1, 0);
    setNumberValue(newValue);
    onChange({ target: { name, value: newValue } });
  };

  return (
    <View style={[styles.NumericContainer, { width }]} className="mt-2">
      <TextInput
        style={styles.Numericinput}
        keyboardType="numeric"
        editable={true}
        value={numberValue + ""}
        onChangeText={(text) => onChange({ target: { name, value: text } })}
      />
      <View style={styles.NumericbuttonsContainer}>
        <TouchableOpacity onPress={handleIncrease}>
          <Text>▲</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDecrease}>
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
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  NumericbuttonsContainer: {
    flexDirection: "column",
    paddingLeft: 10,
  },
});
export default Number;
