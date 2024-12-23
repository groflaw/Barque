import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Number from "../Basic/Number";
import { reservation } from "../../Actions/UserBoat/userboat";

import LoadingIndicator from "../Basic/LoadingIndicator";
import boatcard from "../../../assets/Icons/boatcard.png";
import selectImage from "../../../assets/Icons/select.png";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

const BookingDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.Global.loading);
  const curboat = useSelector((state) => state.Global.curboat);
  const curbooking = useSelector((state) => state.Global.curbooking);
  const curuser = useSelector((state) => state.Slice.user);
  const curhost = useSelector((state) => state.Global.curhost);

  const [count, setCount] = useState(0);
  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");
  const toastRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCount(value);
  };
  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };
  const handleSubmit = async () => {
    let result = await dispatch(reservation({ ...curbooking, count }));
    if (result && result.errors) {
      setToastType("warning");
      setErrorMessage(result.errors.general);
      handleShowToast();
    } else {
      navigation.navigate("BookingConfirm");
    }
  };
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Booking Details</Text>
            <View style={styles.card} className="flex flex-col gap-1 mt-2 p-2">
              <View className="flex flex-row justify-between items-center">
                <Image
                  style={{ width: 50, height: 50, borderRadius: 10 }}
                  source={
                    curboat.boatImage.cover
                      ? { uri: curboat.boatImage.cover }
                      : boatcard
                  }
                />
                <View className="flex flex-col  gap-1">
                  <Text style={styles.marina}>{curboat.model}</Text>
                  <Text style={styles.des}>{curboat.description}</Text>
                </View>
                <Image source={selectImage}></Image>
              </View>
              <View className="flex flex-row gap-2  items-start">
                <Text style={styles.des}>Location :</Text>
                <Text style={styles.location} className="text-wrap w-9/12">
                  {curboat.location1}
                </Text>
              </View>
              <View className="flex flex-row gap-2 items-start">
                <Text style={styles.des}>Capacity :</Text>
                <Text style={styles.des} className="text-wrap w-9/12">
                  Up to {curboat.capacity} Peoples
                </Text>
              </View>
            </View>
            <View style={styles.card} className="mt-2">
              <TouchableOpacity>
                <View
                  style={styles.btn}
                  className="flex flex-row items-center m-auto my-5 py-2 justify-center px-10"
                >
                  <Svg style={styles.Icon} viewBox="0 0 24 24">
                    <Path d="M0 0h24v24H0z" fill="none"></Path>
                    <Path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"></Path>
                  </Svg>
                  <Text style={styles.btntext} className="ml-3">
                    Choose Date
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.card} className="mt-2 py-4 px-4">
              <Text style={styles.header}>Select Number of Passengers</Text>
              <Number value={count} onChange={handleChange} name="count" />
            </View>
            <View className="flex flex-row justify-center mt-8">
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
              >
                <View
                  style={[styles.btn, { backgroundColor: "#2a8500" }]}
                  className="px-5 py-2"
                >
                  <Text style={styles.btntext}>Confirm Booking</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <ToastMessage
            type={toastType}
            description={errormessage}
            ref={toastRef}
          />
        </ScrollView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#efefef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },
  marina: {
    color: "#000000",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
  },
  des: {
    color: "#101c2c",
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 13,
  },
  location: {
    color: "#8e9697",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 18,
  },
  btn: {
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: "#0000ff",
  },
  btntext: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 24,
    elevation: 5,
  },
  Icon: {
    fontSize: "21px",
    width: "21px",
    height: "21px",
    color: "#ffffff",
    fill: "#ffffff",
  },
  header: {
    color: "#000000",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
  },
});
export default BookingDetail;
