import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

import navBoat from "../../../assets/Icons/nav-boat.png";
import navChat from "../../../assets/Icons/nav-chat.png";
import navTime from "../../../assets/Icons/nav-time.png";
import navProfile from "../../../assets/Icons/nav-profile.png";
import navReservas from "../../../assets/Icons/nav-reservas.png";

const Navbar = () => {
  const navigation = useNavigation();

  const mode = useSelector((state) => state.Global.mode);
  const curuser = useSelector((state) => state.Slice.user);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconPress = (icon) => {
    switch (icon) {
      case "DashBoard":
        navigation.navigate("DashBoard");
        break;
      case "Home":
        if (mode) {
          navigation.navigate("HostBoats");
        } else {
          navigation.navigate("HomeTabs");
        }
        break;
      case "Messages":
        if (curuser?._id) {
          navigation.navigate("Chat");
        } else {
          navigation.navigate("SignUp");
        }
        break;
      case "Reservas":
        if (curuser?._id) {
          navigation.navigate("Reservas");
        } else {
          navigation.navigate("SignUp");
        }
        break;
      case "Profile":
        if(mode){
          navigation.navigate("DashBoard");
        }else{
          if (curuser?._id) {
            navigation.navigate("Profile");
          } else {
            navigation.navigate("SignUp");
          }
        }
        break;
    }
    setSelectedIcon(icon);
  };

  return (
    <View style={styles.container}>
      {mode && (
        <TouchableOpacity
          style={[
            styles.iconContainer,
            // selectedIcon === "DashBoard" && styles.selectedIcon,
          ]}
          onPress={() => handleIconPress("DashBoard")}
        >
          <Image source={navTime} style={styles.iconImage} />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[
          styles.iconContainer,
          // selectedIcon === "Home" && styles.selectedIcon,
        ]}
        onPress={() => handleIconPress("Home")}
      >
        <Image source={navBoat} style={styles.iconImage} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.iconContainer,
          // selectedIcon === "Messages" && styles.selectedIcon,
        ]}
        onPress={() => handleIconPress("Messages")}
      >
        <Image source={navChat} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.iconContainer,
          // selectedIcon === "Reservas" && styles.selectedIcon,
        ]}
        onPress={() => handleIconPress("Reservas")}
      >
        <Image source={navReservas} style={styles.iconImage} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.iconContainer,
          // selectedIcon === "Profile" && styles.selectedIcon,
        ]}
        onPress={() => handleIconPress("Profile")}
      >
        <Image source={navProfile} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  iconContainer: {
    alignItems: "center",
  },
  selectedIcon: {
    borderWidth: 2,
    width: 20,
    height: 30,
    padding: 20,
    borderColor: "#007AFF", // Color of the circular border
    borderRadius: 30, // Makes it circular
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Navbar;
