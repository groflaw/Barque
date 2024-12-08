import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Navbar from "../Navbar";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

import { getResrvations, getBookings } from "../../Actions/UserBoat/userboat";
import { setBooking } from "../../Store/Global";
import { BookingStatus } from "../../Utils/Constant";

import LoadingIndicator from "../Basic/LoadingIndicator";

import boatcard from "../../../assets/Icons/boatcard.png";
import avatar from "../../../assets/Profile/user.png";

const List = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  const [reservations, setReservations] = useState([]);
  const [errormessage, setErrorMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const loading = useSelector((state) => state.Global.loading);
  const curuser = useSelector((state) => state.Slice.user);
  const mode = useSelector((state) => state.Global.mode);

  const nextStep = async (item) => {
    await dispatch(setBooking(item));
    navigation.navigate("Detail");
  };

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      let response;
      if (mode) {
        response = await dispatch(getBookings(curuser._id));
      } else {
        response = await dispatch(getResrvations(curuser._id));
      }
      if (response.errors) {
        setErrorMessage(response.errors.general);
        handleShowToast();
      } else {
        setReservations(response);
      }
    };
    const unsubscribe = navigation.addListener("focus", async () => {
      fetchReservations();
    })
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title} className="mt-5 ">
              Reservations
            </Text>
            {reservations.map((item, index) => {
              return (
                <View style={styles.card} className="mt-5" key={index}>
                  <View className="flex flex-row justify-between items-center">
                    <Text style={styles.date}>
                      Date: {new Date(item.date).toLocaleDateString()}
                    </Text>
                    <View className="flex flex-row justify-around" style={{width : '56%'}}>
                      <View
                        style={[
                          styles.type,
                          { backgroundColor: BookingStatus[item.status].color },
                          {width : '60%'}
                        ]}
                      >
                        <Text className="text-white text-center">
                          {BookingStatus[item.status].title}
                        </Text>
                        {mode && item.status == 0 && (
                          <Text style={styles.badge}>!</Text>
                        )}
                        {!mode && item.status == 2 && (
                          <Text style={styles.badge}>!</Text>
                        )}
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          nextStep(item);
                        }}
                        style={{width : '25%'}}
                      >
                        <Text
                          style={[styles.type, { backgroundColor: "#102a5e" }]}
                        >
                          Detail
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="flex flex-row items-center">
                    <Image
                      style={{ width: 80, height: 80, borderRadius: 10 }}
                      source={
                        item.boatId.boatImage.cover
                          ? { uri: item.boatId.boatImage.cover }
                          : boatcard
                      }
                    ></Image>
                    <View className="ml-3">
                      <Text style={styles.boatname}>{item.boatId.model}</Text>
                      <Text style={styles.boatdes}>
                        {item.boatId.description}
                      </Text>
                    </View>
                  </View>
                  <View className="flex flex-row mt-2">
                    {mode ? (
                      <Image
                        source={
                          item.userId.avatar
                            ? { uri: item.userId.avatar }
                            : avatar
                        }
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                      ></Image>
                    ) : (
                      <Image
                        source={
                          item.hostId.avatar
                            ? { uri: item.hostId.avatar }
                            : avatar
                        }
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                      ></Image>
                    )}

                    <View className="ml-3">
                      <Text style={styles.manname}>
                        {mode
                          ? `Customer : ${
                              item.userId.firstName + " " + item.userId.lastName
                            }`
                          : `Host : ${
                              item.hostId.firstName + " " + item.hostId.lastName
                            }`}
                      </Text>
                      <Text style={styles.mandes}>
                        Expert in navigation routes.
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <ToastMessage
            type={toastType}
            description={errormessage}
            ref={toastRef}
          />
        </ScrollView>
      )}
      <Navbar></Navbar>
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
    padding: 16,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: 1,
    backgroundColor: "#ff3b30",
    borderRadius: 50,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 10,
    color: "white",
  },
  date: {
    color: "#17233C",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: 800,
  },
  type: {
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 1,
    paddingRight: 1,
    color: "white",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: 800,
    textAlign: "center",
  },
  boatname: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  boatdes: {
    color: "#17233C",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },
  manname: {
    color: "#17233C",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },
  mandes: {
    color: "#8E9697",
    fontSize: 11,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
});
export default List;
