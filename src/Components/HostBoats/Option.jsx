import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import { delMyboat } from "../../Actions/AddBoat/addboat";

import Navbar from "../Navbar";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";
import DelPopup from "../DelPopup/DelPopup";

import boatdata from "../../../assets/Icons/boatdata.png";
import boatplan from "../../../assets/Icons/boatplan.png";
import boatlocaiton from "../../../assets/Icons/boatlocaiton.png";
import boatImage from "../../../assets/Icons/boatImage.png";
import boatcancel from "../../../assets/Icons/boatcancel.png";
import boataccesoris from "../../../assets/Icons/boataccesoris.png";
import boatallow from "../../../assets/Icons/boatallow.png";
import vesseldata from "../../../assets/Icons/vesseldata.png";
import deleteImg from "../../../assets/Icons/delete.png";

const Option = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const curboat = useSelector((state) => state.Global.curboat);

  const [visible, setVisible] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");
  const toastRef = useRef(null);

  const nextStep = (url) => {
    if (url === "NewScreen" || curboat._id) {
      navigation.navigate(url);
    }
  };
  const closePopup = () => {
    setVisible(false);
  };
  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };
  const delBoat = async () => {
    let result = await dispatch(delMyboat(curboat._id));
    if (result == 1) {
      navigation.navigate("Myboats");
    } else {
      setToastType("warning");
      setErrorMessage(result.errors.general);
      handleShowToast();
      return;
    }
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Edit Boat</Text>

          <TouchableOpacity
            onPress={() => {
              nextStep("NewScreen");
            }}
          >
            <View className="flex flex-row mt-5" style={styles.item}>
              <Image source={boatdata}></Image>
              <Text style={styles.itemText} className="ml-5">
                Boat Information
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              nextStep("AddPlans");
            }}
          >
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatplan}></Image>
              <Text style={styles.itemText} className="ml-5">
                Plans and schedules
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              nextStep("Location");
            }}
          >
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatlocaiton}></Image>
              <Text style={styles.itemText} className="ml-5">
                Locations
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              nextStep("AddBoatImages");
            }}
          >
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatImage}></Image>
              <Text style={styles.itemText} className="ml-5">
                Pictures
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              nextStep("Cancellation");
            }}
          >
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatcancel}></Image>
              <Text style={styles.itemText} className="ml-5">
                Cancellation Policy
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              nextStep("Accessories");
            }}
          >
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boataccesoris}></Image>
              <Text style={styles.itemText} className="ml-5">
                Accesorios
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              nextStep("Allowed");
            }}
          >
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatallow}></Image>
              <Text style={styles.itemText} className="ml-5">
                Allowed
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              nextStep("AddDocImage");
            }}
          >
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={vesseldata}></Image>
              <Text style={styles.itemText} className="ml-5">
                Boat Documentation
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisible(curboat._id ? true : false);
            }}
          >
            <View
              className="flex flex-row mt-3"
              style={[styles.item, { backgroundColor: "red" }]}
            >
              <Image
                source={deleteImg}
                style={{ width: 20, height: 20 }}
              ></Image>
              <Text style={styles.itemText} className="ml-5">
                Delete Boat
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <DelPopup
          visible={visible}
          transparent={true}
          dismiss={closePopup}
          delBoat={delBoat}
          margin={"5%"}
        ></DelPopup>
      </ScrollView>
      <ToastMessage
        type={toastType}
        description={errormessage}
        ref={toastRef}
      />
      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    color: "#17233c", // color: '#17233c'
    fontSize: 20, // fontSize: '20px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    fontWeight: "700",
  },
  item: {
    borderRadius: 6, // borderRadius: '6px'
    backgroundColor: "#072d4c", // backgroundColor: '#072d4c'
    padding: 10,
  },
  itemText: {
    color: "#ffffff", // color: '#ffffff'
    fontSize: 14, // fontSize: '14px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    fontWeight: "700",
  },
});
export default Option;
