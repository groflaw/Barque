import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  getHostNews,
  getUserNews,
  getTopDes,
  getNewBoats,
  checkUserReview,
} from "../../Actions/UserBoat/userboat";

import { getboatInfo } from "../../Actions/AddBoat/addboat";
import { getUser } from "../../Actions/Auth/auth.acitons";
import { setCurcity, setCurhost } from "../../Store/Global";

import Top from "./Top";
import Review from "./Review";
import Destinos from "./Destinos";
import Newboat from "./Newboat";
import Navbar from "../Navbar";
import LoadingIndicator from "../Basic/LoadingIndicator";
import BookPopup from "../BookPopup/BookPopup";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

const MainBody = () => {
  const toastRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [destinations, setDestinations] = useState([]);
  const [newboats, setNewBoats] = useState([]);
  const [visible, setVisible] = useState(false);
  const [pendingreviews, setPendingReviews] = useState([]);
  const [toastType, setToastType] = useState("warning");
  const [errormessage, setErrorMessage] = useState("");

  let curuser = useSelector((state) => state.Slice.user);
  const mode = useSelector((state) => state.Global.mode);
  const loading = useSelector((state) => state.Global.loading);

  useEffect(() => {
    const fetchNews = async () => {
      let result = false;
      if (curuser._id != null) {
        if (mode) {
          result = await dispatch(getHostNews(curuser._id));
        } else {
          result = await dispatch(getUserNews(curuser._id));
        }
        if (result.errors) {
          setToastType("warning");
          setErrorMessage(result.errors.general);
          handleShowToast();
        }
        if (result == true) {
          setVisible(true);
        }
      }
    };
    const fetchDes = async () => {
      let result;
      result = await dispatch(getTopDes());
      if (result.errors) {
        setToastType("warning");
        setErrorMessage(result.errors.general);
        handleShowToast();
      } else {
        setDestinations(result);
      }
    };
    const fetchNewBoats = async () => {
      let result;
      result = await dispatch(getNewBoats());
      if (result.errors) {
        setToastType("warning");
        setErrorMessage(result.errors.general);
        handleShowToast();
      } else {
        setNewBoats(result);
      }
    };
    const fetchReviews = async () => {
      let result;
      if (curuser._id != null) {
        if (!mode) {
          result = await dispatch(checkUserReview(curuser._id));
        }
      }
      if (result.errors) {
        setToastType("warning");
        setErrorMessage(result.errors.general);
        handleShowToast();
      } else {
        setPendingReviews(result);
      }
    };
    const unsubscribe = navigation.addListener("focus", async () => {
      await dispatch(setCurcity(""));
      await fetchNews();
      await fetchDes();
      await fetchNewBoats();
      await fetchReviews();
    });
    return unsubscribe;
  }, [curuser._id, mode, navigation]);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const closePopup = () => {
    setVisible(false);
  };

  const toLocation = async (location) => {
    await dispatch(setCurcity(location));
    navigation.navigate("HomeTabs");
  };
  const toBoat = async (boatId, hostId) => {
    let result = await dispatch(getboatInfo(boatId));
    result = await dispatch(getUser(hostId));
    await dispatch(setCurhost(result));
    await navigation.navigate("Booking");
  };
  return (
    <>
      {!loading ? (
        <>
          <BookPopup
            visible={visible}
            transparent={true}
            dismiss={closePopup}
            margin={"5%"}
            mode={mode}
          ></BookPopup>
          <ScrollView style={{ backgroundColor: "#f0f1ff", marginBottom: 20 }}>
            <Top></Top>
            {curuser._id && pendingreviews.length > 0 && (
              <Review data={pendingreviews}></Review>
            )}
            {destinations.length > 0 && (
              <Destinos data={destinations} setLocation={toLocation}></Destinos>
            )}
            {newboats.length > 0 && (
              <Newboat data={newboats} toBoat={toBoat}></Newboat>
            )}
          </ScrollView>
          <Navbar></Navbar>
          <ToastMessage
            type={toastType}
            description={errormessage}
            ref={toastRef}
          />
        </>
      ) : (
        <LoadingIndicator></LoadingIndicator>
      )}
    </>
  );
};

export default MainBody;
