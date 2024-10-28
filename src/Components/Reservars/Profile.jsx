import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Navbar from "../Navbar";

import user from "../../../assets/Icons/reservasavatar.png";
import Iconreview from "../../../assets/Icons/Iconreview.png";
import position from "../../../assets/Icons/position.png";
import starImage from "../../../assets/Icons/Iconstar.png";
import peopleImage from "../../../assets/Icons/Iconpeopleoutline.png";
import fullImage from "../../../assets/Icons/Iconopeninfull.png";
import eventImage from "../../../assets/Icons/Iconeventavailable.png";

const Profile = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card} className="mt-4">
            <View className="flex items-center">
              <Image style={{ width: 150, height: 150 }} source={user}></Image>
              <Text style={styles.name} className="mt-2">
                Juan Perez
              </Text>
            </View>
            <Text style={styles.des} className="mt-2">
              Aventura y lujo en cada viaje marítimo. Apasionado por la
              navegación y las playas de Venezuela.
            </Text>
            <View className="flex flex-row items-center mt-2">
              <Text style={styles.detail}>Calificación: 4.8/5</Text>
              <Image source={Iconreview} className="ml-1"></Image>
            </View>
            <Text style={styles.detail} className="mt-2">
              Ubicación: Caracas, Venezuela
            </Text>
            <Text style={styles.detail} className="mt-2">
              Reservas hechas: 12
            </Text>
            <View className="flex items-center mt-4">
              <TouchableOpacity>
                <Text style={styles.editmessage} className="w-40 text-center">
                  Enviar mensaje
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title} className="mt-3">
            Reservas Activas
          </Text>
          <View style={styles.card} className="flex flex-row items-center mt-3">
            <Image style={{ width: 60, width: 60 }} source={position}></Image>
            <View className="ml-4">
              <Text style={styles.username}>Lujo en el Caribe</Text>
              <Text style={styles.userdate}>Fecha: 21/10/2023</Text>
            </View>
          </View>
          <View style={styles.card} className="flex flex-row items-center mt-3">
            <Image style={{ width: 60, width: 60 }} source={position}></Image>
            <View className="w-64 ml-4">
              <View className="flex flex-row justify-between">
                <Text style={styles.boatname}>Riva 92</Text>
                <View
                  className="flex flex-row items-center"
                  style={styles.review}
                >
                  <Image source={starImage}></Image>
                  <Text style={styles.reviewText}>4.8 / 5</Text>
                </View>
              </View>
              <View className="flex flex-row justify-between mt-1">
                <View className="flex flex-row">
                  <View
                    className="flex flex-row items-center"
                    style={styles.item}
                  >
                    <Image source={peopleImage}></Image>
                    <Text style={styles.itemText}>10</Text>
                  </View>
                  <View
                    className="flex flex-row items-center"
                    style={styles.item}
                  >
                    <Image source={fullImage}></Image>
                    <Text style={styles.itemText}>60'</Text>
                  </View>
                  <View
                    className="flex flex-row items-center"
                    style={styles.item}
                  >
                    <Image source={eventImage}></Image>
                    <Text style={styles.itemText}>2020</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.boatposition}>Casa Bote A, Lecheria</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  card: {
    backgroundColor: "#ffffff", // Background color
    borderRadius: 8, // Border radius
    borderWidth: 1, // Border width
    borderColor: "#efefef", // Border color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 4, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 12, // Shadow radius
    elevation: 5, // Android shadow equivalent
    padding: 16, // Padding inside the card (adjust as needed)
  },
  name: {
    color: "#030303", // Color set to very dark gray (almost black)
    fontSize: 20, // Font size in number (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700", // Font weight set to bold
    lineHeight: 28,
  },
  des: {
    color: "#17233C", // Dark color
    fontSize: 15, // Font size in a number (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "300", // Light font weight (300)
    lineHeight: 20,
  },
  detail: {
    color: "#17233C",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  editmessage: {
    borderRadius: 8,
    backgroundColor: "#102A5E",
    padding: 10, // Adjust padding as necessary
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "600",
    lineHeight: 20,
  },
  title: {
    color: "#030303", // Dark gray color
    fontSize: 20, // Font size as a number (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
  },
  username: {
    color: "#17233C", // Dark blue color
    fontSize: 16, // Font size as a number (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "700",
  },
  userdate: {
    color: "#17233C", // Dark blue color
    fontSize: 14, // Font size as a number (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    lineHeight: 20,
  },
  boatname: {
    color: "#17233C",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "700", // Bold
  },
  boatposition: {
    color: "#545454", // Gray color
    fontSize: 11, // Font size as a number (no 'px' needed)
    fontFamily: "Lexend Deca", // Ensure this font is loaded
    fontWeight: "400", // Normal font weight
    lineHeight: 14, // Line height as a number (no 'px' needed)
  },
  item: {
    marginRight: 4,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "#f0f1ff",
    borderRadius: 8.16,
    border: "0.5px solid #fffcfc",
    boxSizing: "border-box",
  },
  itemText: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 14,
    paddingLeft: 4,
  },
  review: {
    marginRight: 4,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "#072d4c",
    borderRadius: 8.16,
    border: "0.5px solid #fffcfc",
    boxSizing: "border-box",
  },
  reviewText: {
    paddingLeft: 4,
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "Lexend Deca",
    fontWeight: 500,
    lineHeight: 16,
  },
});
export default Profile;
