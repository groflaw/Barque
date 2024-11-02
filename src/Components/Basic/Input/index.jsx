import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomTextInput = ({ placeholder, value, onChange, name, sort }) => {
  const [isSecure, setIsSecure] = useState(sort);

  const toggleSecureEntry = () => {
    setIsSecure((prev) => !prev);
  };

  return (
    <View style={InputStyles.container}>
      <TextInput
        placeholderTextColor="#aaa"
        placeholder={placeholder}
        style={InputStyles.input}
        value={value}
        onChangeText={(text) => onChange({ target: { name, value: text } })}
        secureTextEntry={isSecure}
      />
      {sort && (
        <TouchableOpacity
          onPress={toggleSecureEntry}
          style={InputStyles.iconContainer}
        >
          <Icon
            name={isSecure ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#aaa"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const InputStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
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
  label: {
    fontSize: 16,
    color: "#333",
  },

  input: {
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomTextInput;
