import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import * as Location from "expo-location";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  getAllBoatTypes,
  getAllBoatBrands,
  getEnginesCount,
  getBathroomCount,
  getCabinscount,
  getCapacity,
  getPowers,
} from "../../Actions/BasicBoat/basicboat";

import { submitBasic } from "../../Actions/AddBoat/addboat";
import { setLoading } from "../../Store/Global";

import Navbar from "../Navbar";
import CustomTextInput from "../Basic/Input";
import Option from "../Basic/Option";
import Number from "../Basic/Number";
import GoogleAddress from "../Basic/GoogleAddress";
import LoadingIndicator from "../Basic/LoadingIndicator";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

const BoatData = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  const boatTypes = useSelector((state) => state.BasicBoat.boattypes);
  const boatBrands = useSelector((state) => state.BasicBoat.boatbrands);
  const enginecount = useSelector((state) => state.BasicBoat.enginecount);
  const bathroomcount = useSelector((state) => state.BasicBoat.bathroomcount);
  const powers = useSelector((state) => state.BasicBoat.powers);
  const capacity = useSelector((state) => state.BasicBoat.capacity);
  const cabinscount = useSelector((state) => state.BasicBoat.cabinscount);

  const loading = useSelector((state) => state.Global.loading);
  const curuser = useSelector((state) => state.Slice.user);
  const curboat = useSelector((state) => state.Global.curboat);

  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");
  const [location, setLocation] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);

  useEffect(() => {
    const fetchBoatTypes = async () => {
      try {
        await dispatch(setLoading(true));
        let result = await dispatch(getAllBoatTypes());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        result = await dispatch(getAllBoatBrands());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        result = await dispatch(getEnginesCount());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        result = await dispatch(getBathroomCount());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        result = await dispatch(getCabinscount());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        result = await dispatch(getCapacity());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        result = await dispatch(getPowers());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          setLocationPermission(true);
          const userLocation = await Location.getCurrentPositionAsync({});
          setLocation(userLocation.coords);
        } else {
          console.log("Location permission denied");
        }
        await dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching boat types:", error);
      }
    };
    const unsubscribe = navigation.addListener("focus", async () => {
      fetchBoatTypes();
    });
    return unsubscribe;
  }, [navigation]);

  const [boatdata, setBoatData] = useState({
    user: curuser._id,
    model: curboat.model || "",
    description: curboat.description || "",
    location1: curboat.location1 || "",
    year: curboat.year || 2010,
    size: curboat.size || 38,
    boattype: curboat.boattype || 0,
    boatbrand: curboat.boatbrand || 0,
    enginecount: curboat.enginecount || 0,
    bathroomcount: curboat.bathroomcount || 0,
    power: curboat.power || 0,
    capacity: curboat.capacity || 0,
    cabinscount: curboat.cabinscount || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBoatData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const result = await dispatch(submitBasic(boatdata, curboat?._id));
    if (result?.errors) {
      setToastType("warning");
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          setErrorMessage(`${result.errors[key]}`);
          handleShowToast();
        }
      }
    } else {
      navigation.navigate("AddPlans");
    }
  };
  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };
  return (
    <>
      {loading && locationPermission && location ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title} className="mt-5">
              Boat Information
            </Text>
            <View className="mt-5">
              <Text style={styles.item}>Model </Text>
              <CustomTextInput
                value={boatdata.model}
                onChange={handleChange}
                name="model"
                // sort={false}
              ></CustomTextInput>
            </View>
            <View className="mt-2">
              <Text style={styles.item}>Description </Text>
              <CustomTextInput
                value={boatdata.description} // Ensure you're using the correct property
                onChange={handleChange}
                name="description"
                sort={false}
              ></CustomTextInput>
            </View>
            <View className="mt-2">
              <Text style={styles.item}>Location </Text>
              <GoogleAddress
                value={boatdata.location1}
                name="location1"
                onChange={handleChange}
                type={true}
              ></GoogleAddress>
              {/* <CustomTextInput
                value={boatdata.location1} // Ensure you're using the correct property
                onChange={handleChange}
                name="location1"
                sort={false}
              ></CustomTextInput> */}
            </View>
            <View className="mt-2">
              <Text style={styles.item}>Year</Text>
              <Number
                value={boatdata.year}
                onChange={handleChange}
                name="year"
              ></Number>
            </View>
            <View className="mt-6">
              <Text style={styles.item}>Size (ft)</Text>
              <Number
                value={boatdata.size}
                onChange={handleChange}
                name="size"
              ></Number>
            </View>
            <View className="mt-6">
              <Text style={styles.item} className="mb-2">
                Type of boat
              </Text>
              <Option
                options={boatTypes}
                onChange={handleChange}
                name="boattype"
                placeholder="Select Type"
                defaultValue={boatdata.boattype}
              ></Option>
            </View>
            <View className="mt-6">
              <Text style={styles.item} className="mb-2">
                Brand
              </Text>
              <Option
                options={boatBrands}
                onChange={handleChange}
                name="boatbrand"
                placeholder="Choose a brand"
                defaultValue={boatdata.boatbrand}
              ></Option>
            </View>
            <View className="mt-6">
              <Text style={styles.item} className="mb-2">
                Engines
              </Text>
              <Number
                value={boatdata.enginecount}
                onChange={handleChange}
                name="enginecount"
                max={enginecount.length}
              ></Number>
              {/* <Option
                options={enginecount}
                onChange={handleChange}
                name="enginecount"
                placeholder="Select number of engines"
                defaultValue={boatdata.enginecount}
              ></Option> */}
            </View>
            <View className="mt-6">
              <Text style={styles.item} className="mb-2">
                Bathrooms
              </Text>
              <Number
                value={boatdata.bathroomcount}
                onChange={handleChange}
                name="bathroomcount"
                max={bathroomcount.length}
              ></Number>
              {/* <Option
                options={bathroomcount}
                onChange={handleChange}
                name="bathroomcount"
                placeholder="Select N* bathrooms"
                defaultValue={boatdata.bathroomcount}
              ></Option> */}
            </View>
            <View className="mt-6">
              <Text style={styles.item} className="mb-2">
                Powered by
              </Text>
              <Option
                options={powers}
                onChange={handleChange}
                name="power"
                placeholder="Select propulation of type"
                defaultValue={boatdata.power}
              ></Option>
            </View>
            <View className="mt-6">
              <Text style={styles.item} className="mb-2">
                Capacity
              </Text>
              <Number
                value={boatdata.capacity}
                onChange={handleChange}
                name="capacity"
                max={capacity.length}
              ></Number>
              {/* <Option
                options={capacity}
                onChange={handleChange}
                name="capacity"
                placeholder="Select capacity"
                defaultValue={boatdata.capacity}
              ></Option> */}
            </View>
            <View className="mt-6">
              <Text style={styles.item} className="mb-2">
                Cabins / Staterooms
              </Text>
              <Number
                value={boatdata.cabinscount}
                onChange={handleChange}
                name="cabinscount"
                max={cabinscount.length}
              ></Number>
              {/* <Option
                options={cabinscount}
                onChange={handleChange}
                name="cabinscount"
                placeholder="Select cabins"
                defaultValue={boatdata.cabinscount}
              ></Option> */}
            </View>
            <View className="mt-6">
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.continue} className="text-center">
                  CONTINUAR
                </Text>
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

      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 26,
  },
  item: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lexend Deca",
  },
  continue: {
    borderRadius: 6,
    backgroundColor: "#17233c",
    padding: 20,
    color: "#ffffff",
    fontSize: 13,
    fontFamily: "Mulish",
    fontWeight: "900",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
});

export default BoatData;
