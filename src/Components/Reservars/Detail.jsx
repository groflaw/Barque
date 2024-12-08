import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { BookingStatus, apiKey, cancelback } from "../../Utils/Constant";
import { setCurhost, setLoading } from "../../Store/Global";
import { getAllBoatTypes } from "../../Actions/BasicBoat/basicboat";
import { setBookStatus } from "../../Actions/UserBoat/userboat";

import Navbar from "../Navbar";
import LoadingIndicator from "../Basic/LoadingIndicator";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

const Detail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  const loading = useSelector((state) => state.Global.loading);
  const mode = useSelector((state) => state.Global.mode);
  const curbooking = useSelector((state) => state.Global.curbooking);
  const boatTypes = useSelector((state) => state.BasicBoat.boattypes);

  const [errormessage, setErrorMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [plan, setPlan] = useState({});
  const [coordinates, setCoordinates] = useState({
    lat: 10.1734,
    lng: -64.6625,
  });

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const nextStep = () => {
    if (mode) {
      dispatch(setCurhost(curbooking.userId));
    } else {
      dispatch(setCurhost(curbooking.hostId));
    }
    navigation.navigate("GuestProfile");
  };

  const getCoordinates = async (destination) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      destination
    )}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setCoordinates(location);
      } else {
        setErrorMessage("Geocoding API error:", data.status);
        handleShowToast();
      }
    } catch (error) {
      setErrorMessage("Error fetching geocoding data:", error);
      handleShowToast();
    }
  };

  useEffect(() => {
    const fetchBoatTypes = async () => {
      await dispatch(setLoading(true));
      let result = await dispatch(getAllBoatTypes());
      if (result.errors) {
        setErrorMessage(response.errors.general);
        handleShowToast();
      }
      result = curbooking.boatId.plans.find(
        (item) => item._id === curbooking.planId
      );
      setPlan(result);
      await getCoordinates(curbooking.boatId.location2.address);
      await dispatch(setLoading(false));
    };
    const unsubscribe = navigation.addListener("focus", async () => {
      fetchBoatTypes();
    })
    return unsubscribe;
  }, [navigation]);

  const SubmitStatus = async (value) => {
    if(mode){
      let result = await dispatch(setBookStatus(curbooking._id, value));
      if (result.errors) {
        setErrorMessage(result.errors.general);
        handleShowToast();
      } else {
        if (value == 2) navigation.navigate("Confirm");
        if (value == 1) navigation.navigate("Main");
      }
    }else{
      navigation.navigate("PaymentDetail");
    }
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.card} className="mt-3">
              <View className="flex flex-row items-center justify-between">
                <Text style={styles.title}>Booking Status</Text>
                <View className="flex flex-row gap-2" style={{width : '50%'}}>
                  <View
                    style={[
                      styles.type,
                      {
                        backgroundColor: BookingStatus[curbooking.status].color,
                      },
                    ]}
                  >
                    <Text className="text-white text-center">
                      {BookingStatus[curbooking.status].title}
                    </Text>
                    {mode && curbooking.status == 0 && (
                      <Text style={styles.badge}>!</Text>
                    )}
                    {!mode && curbooking.status == 2 && (
                      <Text style={styles.badge}>!</Text>
                    )}
                  </View>
                </View>
              </View>
              <View className=" flex flex-row mt-2">
                <Text style={styles.name}>Price: </Text>
                <Text style={styles.value}> ${plan.price}</Text>
              </View>
              <View className=" flex flex-row mt-2">
                <Text style={styles.name}>Status: </Text>
                <Text style={styles.value}>
                  {BookingStatus[curbooking.status].title}
                </Text>
              </View>
              {((mode && curbooking.status == 0) ||
                (!mode && curbooking.status == 2)) && (
                <View className="flex flex-row justify-around mt-4">
                  <TouchableOpacity
                    onPress={() => {
                      SubmitStatus(2);
                    }}
                    style={[styles.btn, { backgroundColor: "#2a8500" }]}
                  >
                    <Text style={styles.btntext}>{mode ? "Confirm" :"Pay Now!"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if(mode){
                        SubmitStatus(1);
                      }else{
                        
                      }
                    }}
                    style={[styles.btn, { backgroundColor: "#ff3b30" }]}
                  >
                    <Text style={styles.btntext}>Cancel Booking</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.card} className="mt-3">
              <Text style={styles.title}>Boat Information</Text>

              <View className=" flex flex-row mt-2">
                <Text style={styles.name}>Name: </Text>
                <Text style={styles.value}>{curbooking.boatId.model}</Text>
              </View>
              <View className=" flex flex-row mt-1">
                <Text style={styles.name}>Type: </Text>
                <Text style={styles.value}>
                  {
                    boatTypes.find(
                      (item) => item._id === curbooking.boatId.boattype
                    )?.name
                  }
                </Text>
              </View>
              <View className=" flex flex-row mt-1">
                <Text style={styles.name}>Capacity: </Text>
                <Text style={styles.value}>
                  {curbooking.boatId.capacity} people
                </Text>
              </View>
            </View>
            <View style={styles.card} className="mt-3">
              <View className="flex flex-row justify-between items-center">
                <Text style={styles.title}>
                  {mode ? "Customer" : "Captain"} Details
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    nextStep();
                  }}
                >
                  <Text style={styles.profile}>Check Profile</Text>
                </TouchableOpacity>
              </View>
              <View className=" flex flex-row mt-2">
                <Text style={styles.name}>
                  {mode ? "Customer" : "Captain"}:
                </Text>
                <Text style={styles.value}>
                  {mode
                    ? curbooking.userId.firstName +
                      " " +
                      curbooking.userId.lastName
                    : curbooking.hostId.firstName +
                      " " +
                      curbooking.hostId.lastName}
                </Text>
              </View>
              <View className=" flex flex-row mt-1">
                <Text style={styles.name}>{mode ? "Bio" : "Captain"}: </Text>
                <Text style={styles.value}> Sea Explorer</Text>
              </View>
              {curbooking.status == 3 && (
                <View className=" flex flex-row mt-1">
                  <Text style={styles.name}>Phone Number: </Text>
                  <Text style={styles.value}>
                    {mode
                      ? curbooking.userId.phoneNumber
                      : curbooking.hostId.phoneNumber}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.card} className="mt-3">
              <Text style={styles.title}>Reservation Details</Text>

              <View className=" flex flex-row mt-2">
                <Text style={styles.name}>Date:</Text>
                <Text style={styles.value}>
                  {new Date(plan.start).toLocaleDateString() +
                    " ~ " +
                    new Date(plan.end).toLocaleDateString()}
                </Text>
              </View>
              <View className=" flex flex-row mt-1">
                <Text style={styles.name}>Status:</Text>
                <Text style={styles.value}>
                  {curbooking.status == 3 ? "Paid" : "UnPaid"}
                </Text>
              </View>
              <View className=" flex flex-row mt-1">
                <Text style={styles.name}>Plan:</Text>
                <Text style={styles.value}> {curbooking.planId}</Text>
              </View>
              {!mode && (
                <>
                  <View className=" flex flex-row mt-1">
                    <Text style={styles.name}>Payment Method:</Text>
                    <Text style={styles.value}> {curbooking.paymethod}</Text>
                  </View>
                  <View className=" flex flex-row mt-1">
                    <Text style={styles.name}>Cancellation Policy:</Text>
                    <Text style={styles.value}>
                      {cancelback[curbooking.boatId.cancellation - 1].text}
                    </Text>
                  </View>
                </>
              )}
            </View>
            <View style={styles.card} className="mt-3">
              <Text style={styles.title}>Sailing Location</Text>
              <View className="flex flex-row mt-2">
                <Text style={styles.name}>Destination: </Text>
                <Text style={styles.value}>{curbooking.boatId.location1}</Text>
              </View>
              <View className="flex flex-row mt-1">
                <Text style={styles.name}>Location: </Text>
                <Text style={styles.value}>
                  {curbooking.boatId.location2.address}
                </Text>
              </View>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: coordinates.lat,
                  longitude: coordinates.lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: coordinates.lat,
                    longitude: coordinates.lng,
                  }}
                  title="My Marker"
                  description="Some description here"
                />
              </MapView>
            </View>
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
  title: {
    color: "#030303",
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: 900,
  },
  name: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: 700,
  },
  value: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Roboto",
    maxWidth: "83%",
  },
  profile: {
    borderRadius: 15,
    backgroundColor: "#357ec2",
    color: "#ffffff",
    fontFamily: "Lexend Deca",
    fontWeight: 600,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  type: {
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: 800,
    textAlign: "center",
    width:'100%'
  },
  approve: {
    borderRadius: 6,
    backgroundColor: "#17233c",
    padding: 20,
    color: "#ffffff",
    fontSize: 17,
    fontFamily: "Mulish",
  },
  map: {
    marginTop: 10,
    width: "100%",
    height: 250,
  },
  btn: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
    width: "40%",
  },
  btntext: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
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
});
export default Detail;
