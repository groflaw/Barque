import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Option = ({
  defaultValue,
  width,
  options,
  name,
  onChange,
  placeholder,
  _id,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const pickerOptions = options.map((option) => ({
    label: option.name,
    value: option._id,
  }));

  return (
    <View
      style={[styles.OptionContainer, { width }]}
      className="flex flex-row items-center justify-between"
    >
      <View style={{ width: "88%" }}>
        <Text style={styles.Item}>
          {selectedValue
            ? options.find((item) => item._id === selectedValue)?.name
            : placeholder}
        </Text>
      </View>
      <View
        className="flex items-center justify-center h-10 ml-3"
        style={{ width: "9%" }}
      >
        <RNPickerSelect
          items={pickerOptions}
          onValueChange={(value) => {
            setSelectedValue(value);
            onChange({ target: { name, value, _id } });
          }}
          value={selectedValue}
          placeholder={{ label: placeholder, value: null }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  OptionContainer: {
    backgroundColor: "#fff",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 5,
    elevation: 2,
  },
  Item: {
    fontSize: 16,
    color: "#333",
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});
export default Option;
