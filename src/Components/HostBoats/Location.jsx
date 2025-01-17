import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as LocationModule from "expo-location";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import { setLoading } from "../../Store/Global";
import { getLocationType } from "../../Actions/BasicBoat/basicboat";
import { submitLocation } from "../../Actions/AddBoat/addboat";
import GoogleAddress from "../Basic/GoogleAddress";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

import CustomTextInput from "../Basic/Input";
import Option from "../Basic/Option";
import LoadingIndicator from "../Basic/LoadingIndicator";

const Location = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  const locationtypes = useSelector((state) => state.BasicBoat.locationtype);
  const curboat = useSelector((state) => state.Global.curboat);
  const loading = useSelector((state) => state.Global.loading);

  const [location, setLocation] = useState(
    curboat.location2
      ? curboat.location2
      : {
          boatname: "",
          locationtype: null,
          marinaname: "",
          address: "",
        }
  );
  const [locationEnv, setLocationEnv] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLocation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const result = await dispatch(submitLocation(curboat._id, location));
    if (result?.errors) {
      setToastType("warning");
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          setErrorMessage(`${result.errors[key]}`);
          handleShowToast();
        }
      }
    } else {
      setErrorMessage({});
      navigation.navigate("AddBoatImages");
    }
  };
  useEffect(() => {
    const fetchBoatTypes = async () => {
      try {
        await dispatch(setLoading(true));
        let result = await dispatch(getLocationType());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        let { status } =
          await LocationModule.requestForegroundPermissionsAsync();
        if (status === "granted") {
          setLocationPermission(true);
          const userLocation = await LocationModule.getCurrentPositionAsync({});
          setLocationEnv(userLocation.coords);
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

  return (
    <>
      {loading && locationPermission && location ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title} className="mt-5">
              Location of the boat
            </Text>
            <Text style={styles.des} className="mt-4">
              Tell us the exact location of the boat. To protect your privacy
              this information will only be seen by users who already have a
              confirmed reservation.
            </Text>
            <View className="mt-8 mb-3">
              <Text>Boat Name</Text>
              <CustomTextInput
                value={location.boatname}
                onChange={handleChange}
                name="boatname"
              ></CustomTextInput>
             
            </View>
            <Option
              defaultValue={location.locationtype}
              options={locationtypes}
              onChange={handleChange}
              name="locationtype"
              placeholder="Select Type"
            ></Option>
            
            <Text style={styles.title} className="mt-5">
              Address
            </Text>
            <View className="mt-5 mb-3">
              <Text>Marina name</Text>
              <CustomTextInput
                value={location.marinaname}
                onChange={handleChange}
                name="marinaname"
              ></CustomTextInput>
             
            </View>
            <View>
              <Text>Address </Text>
              {/* <CustomTextInput
                value={location.address}
                onChange={handleChange}
                name="address"
              ></CustomTextInput> */}
              <GoogleAddress
                value={location.address}
                name="address"
                onChange={handleChange}
              ></GoogleAddress>
             
            </View>
            <View className="mt-5">
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
              >
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
  },
  des: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Lexend Deca",
    lineHeight: 16,
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
export default Location;
