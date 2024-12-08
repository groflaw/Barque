import { ScrollView, StyleSheet, View, Text } from "react-native";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { getAllboats, getBoatsCity } from "../../Actions/UserBoat/userboat";

import Brands from "../Brands/Brands";
import Boats from "../PopularCars/Boats";
import Popup from "../Popup/Popup";
import Navbar from "../Navbar";
import LoadingIndicator from "../Basic/LoadingIndicator";

const HomeBody = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.Global.loading);
  const curcity = useSelector((state) => state.Global.curcity);

  const [visible, setVisible] = useState(false);
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    const fetchboats = async () => {
      let result = await dispatch(getAllboats());
      setBoats(result);
    };
    const fetchboatscity = async () => {
      let result = await dispatch(getBoatsCity(curcity));
      setBoats(result);
    };
    const unsubscribe = navigation.addListener("focus", async () => {
      if (curcity != "") {
        fetchboatscity();
      } else {
        fetchboats();
      }
    });
    return unsubscribe;
  }, [navigation]);

  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <Brands
            onpress={openPopup}
            setBoats={setBoats}
          />
          <Popup
            visible={visible}
            transparent={true}
            dismiss={closePopup}
            margin={"5%"}
            setBoats={setBoats}
          ></Popup>
          <ScrollView>
            <Boats data={boats} />
          </ScrollView>
        </>
      )}

      <Navbar></Navbar>
    </>
  );
};

export default HomeBody;
