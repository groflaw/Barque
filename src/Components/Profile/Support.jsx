import { View, Text, Image, StyleSheet } from "react-native";

const Support = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Soporte</Text>
      <View
        className="flex flex-row items-center justify-center mt-4"
        style={styles.card}
      >
        <Text style={styles.text} className="text-center">
          Contact Number: +58 123 456 7890
        </Text>
      </View>
      <View
        className="flex flex-row items-center justify-center mt-4"
        style={styles.card}
      >
        <Text style={styles.text} className="text-center">
          Email: info@barquea.com
        </Text>
      </View>
      <View
        className="flex flex-row items-center justify-center mt-4"
        style={styles.card}
      >
        <Text style={styles.text} className="text-center">
          WhatsApp: +58 987 654 3210
        </Text>
      </View>
      <View
        className="flex flex-row items-center justify-center mt-4"
        style={styles.card}
      >
        <Text style={styles.text} className="text-center">
          Términos y Condiciones
        </Text>
      </View>
      <View
        className="flex flex-row items-center justify-center mt-4"
        style={styles.card}
      >
        <Text style={styles.text} className="text-center">
          Política de Privacidad
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  Title: {
    color: "#030303",
    fontSize: 20, // Use a number without 'px'
    fontFamily: "Lexend Deca", // Ensure this font is loaded in your project
    fontWeight: "700", // Use string '700' for bold
    lineHeight: 28, // Use a number for lineHeight
  },
  card: {
    borderRadius: 6, // Border radius for rounded corners
    backgroundColor: "#072d4c", // Background color
    padding: 16,
  },
  text: {
    color: "#ffffff", // Text color
    fontSize: 14, // Font size (number, no 'px')
    fontFamily: "Lexend Deca", // Font family (ensure it's loaded)
    fontWeight: "700",
  },
});
export default Support;
