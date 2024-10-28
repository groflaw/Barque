import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const Radio = ({ selected, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
      >
        {selected && <View style={styles.innerCircle} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  outerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOuterCircle: {
    borderColor: "blue",
  },
  innerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  label: {
    fontSize: 16,
  },
});
export default Radio;
