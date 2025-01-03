import { StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Svg style={styles.icon} viewBox="0 0 448 512">
        <Path
          d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
          fill="#ffffff"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 3,
    left: 16,
    width: 46,
    height: 20,
    borderRadius: 8,
    backgroundColor: "#102a5e",
    outline: "none",
  },
  icon: {
    color: "#ffffff",
    width: 14,
    height: 14,
  },
});

export default BackButton;
