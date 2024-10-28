import { ScrollView, StyleSheet, View, Text } from "react-native";
import { React, useState } from "react";
import Brands from "../Brands/Brands";
import Boats from "../PopularCars/Boats";
import Popup from "../Popup/Popup";
import Navbar from "../Navbar";
const HomeBody = () => {
  const [visible, setVisible] = useState(false);

  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };
  return (
    <>
      <Brands onpress={openPopup} />
      <Popup
        visible={visible}
        transparent={true}
        dismiss={closePopup}
        margin={"5%"}
      ></Popup>

      <ScrollView>
        <Boats />
      </ScrollView>
      <Navbar></Navbar>
    </>
  );
};

export default HomeBody;
