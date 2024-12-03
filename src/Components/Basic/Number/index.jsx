import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect,useCallback } from "react";

const Number = ({ value = 0, onChange, width, name, max }) => {
  const [numberValue, setNumberValue] = useState(value);

  useEffect(() => {
    setNumberValue(value ?? 0); // Ensure a valid value on prop change
  }, [value]);

  const handleIncrease = useCallback(() => {
    setNumberValue((prevValue) => {
      const newValue = prevValue + 1;
      if (max != null && newValue > max) return prevValue;
      onChange({ target: { name, value: newValue } });
      return newValue;
    });
  }, [max, name, onChange]);

  const handleDecrease = useCallback(() => {
    setNumberValue((prevValue) => {
      const newValue = Math.max(prevValue - 1, 0);
      onChange({ target: { name, value: newValue } });
      return newValue;
    });
  }, [name, onChange]);

  const handleChangeText = useCallback((text) => {
    const numericValue = parseInt(text, 10);
    if (!isNaN(numericValue)) {
      const updatedValue = max != null && numericValue > max ? max : numericValue;
      setNumberValue(updatedValue);
      onChange({ target: { name, value: updatedValue } });
    }
  }, [name, onChange]);

  return (
    <View style={[styles.NumericContainer, { width }]} className="mt-2">
      <TextInput
        style={styles.Numericinput}
        keyboardType="numeric"
        editable={true}
        value={String(numberValue)} // Convert to string for TextInput
        onChangeText={handleChangeText}
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
