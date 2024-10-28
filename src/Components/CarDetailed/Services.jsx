import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import captionImage from "../../../assets/Icons/captionImage.png";
import peopleImage from "../../../assets/Icons/Iconpeopleoutline.png";
const Services = () => {
  return (
    <View
      className="flex flex-row flex-wrap justify-center mt-5"
      style={styles.container}
    >
      <View className="items-center mt-5 mb-5 w-44 ">
        <Text style={styles.rate}>94%</Text>
        <Text style={styles.rateText}>Tasa de Respuesta</Text>
      </View>
      <View className="items-center mt-5 mb-5 w-44">
        <Text style={styles.cancel}>MODERADO</Text>
        <Text style={styles.cancelText}>Póliza de Cancelación</Text>
      </View>
      <View className="items-center mt-5 mb-5 w-44">
        <Image source={peopleImage}></Image>
        <Text style={styles.rateText}>Hasta 12 personas</Text>
      </View>
      <View className="items-center mt-5 mb-5 w-44">
        <Image source={captionImage}></Image>
        <Text style={styles.cancelText}>Con Capitán</Text>
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
    backgroundColor: "#fefffe",
    borderRadius: 10, // No need for 'px'
    borderWidth: 1, // Specifies the width of the border
    borderColor: "#c0c0c0", // Color of the border
  },
  rate: {
    borderRadius: 11, // Use numbers, no 'px'
    backgroundColor: "#2a8500",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    textAlign: "center",
  },
  rateText: {
    marginTop: 7,
    color: "#17233c",
    fontSize: 13,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    lineHeight: 14,
  },
  cancel: {
    borderRadius: 12,
    backgroundColor: "#f4bf64",
    paddingTop: 2, // Optional
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center", // Center content horizontally
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    textAlign: "center",
  },
  cancelText: {
    marginTop: 8,
    color: "#17233c",
    fontSize: 13,
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
    lineHeight: 15,
    textAlign: "center",
  },
});
export default Services;
