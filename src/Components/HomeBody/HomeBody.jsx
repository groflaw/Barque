import { ScrollView, StyleSheet, View, Text } from "react-native";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllboats } from "../../Actions/UserBoat/userboat";

import Brands from "../Brands/Brands";
import Boats from "../PopularCars/Boats";
import Popup from "../Popup/Popup";
import Navbar from "../Navbar";
import LoadingIndicator from "../Basic/LoadingIndicator";

const HomeBody = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.Global.loading);
  let curuser = useSelector((state) => state.Slice.user);

  const [visible, setVisible] = useState(false);
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    const fetchboats = async () => {
      if (curuser?._id == undefined) curuser = {_id : 0};
      let result = await dispatch(getAllboats(curuser._id));
      setBoats(result);
    };
    fetchboats();
  }, []);

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
          <Brands onpress={openPopup} setBoats={setBoats} userId = {curuser._id}/>
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
