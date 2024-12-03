import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import { getHostNews, getUserNews } from "../Actions/UserBoat/userboat";

import Top from "../Components/MainBody/Top";
import Destinos from "../Components/MainBody/Destinos";
import Newboat from "../Components/MainBody/Newboat";
import Navbar from "../Components/Navbar";
import BookPopup from "../Components/BookPopup/BookPopup";
import ToastMessage from "../Components/Basic/ToastMessage/ToastMessage";

const MainBody = () => {
  const toastRef = useRef(null);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");

  let curuser = useSelector((state) => state.Slice.user);
  const mode = useSelector((state) => state.Global.mode);

  useEffect(() => {
    const fetchNews = async() =>{
      let result = false;
      if (curuser._id != null) {
        if (mode) {
          result = await dispatch(getHostNews(curuser._id));
        } else {
          result = await dispatch(getUserNews(curuser._id));
        }
        console.log(result);
        if (result.errors) {
          setToastType("warning");
          setErrorMessage(result.errors.general);
          handleShowToast();
        }
        if (result == true) {
          setVisible(true);
        }
      }
    }
    fetchNews();
  }, [curuser._id, mode]);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const closePopup = () => {
    setVisible(false);
  };
  return (
    <>
      <BookPopup
        visible={visible}
        transparent={true}
        dismiss={closePopup}
        margin={"5%"}
        mode={mode}
      ></BookPopup>
      <ScrollView style={{ backgroundColor: "#f0f1ff" }}>
        <Top></Top>
        <Destinos></Destinos>
        <Newboat></Newboat>
      </ScrollView>
      <Navbar></Navbar>
      <ToastMessage
        type={toastType}
        description={errormessage}
        ref={toastRef}
      />
    </>
  );
};

export default MainBody;
