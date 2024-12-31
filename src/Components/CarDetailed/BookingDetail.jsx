import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

import Number from "../Basic/Number";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";
import { reservation } from "../../Actions/UserBoat/userboat";

import LoadingIndicator from "../Basic/LoadingIndicator";
import boatcard from "../../../assets/Icons/boatcard.png";
import selectImage from "../../../assets/Icons/select.png";
import calendar from "../../../assets/Icons/calendar.png";

const BookingDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.Global.loading);
  const curboat = useSelector((state) => state.Global.curboat);
  const curbooking = useSelector((state) => state.Global.curbooking);

  const [data, setData] = useState({
    count: 0,
    start: null,
    end: null,
  });
  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");
  const [startshow, setStartShow] = useState(false);
  const [curdate, setCurdate] = useState(null);
  const [cursort, setCursort] = useState(null);
  const [mode, setMode] = useState(null);

  const toastRef = useRef(null);

  const showDatepicker = (sort, mode, date) => {
    setStartShow(true);
    setMode(mode);
    setCurdate(date);
    setCursort(sort);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleSubmit = async () => {
    let result = await dispatch(
      reservation({
        ...curbooking,
        count: data.count,
        start: new Date(data.start).toISOString(),
        end: new Date(data.end).toISOString(),
      })
    );
    if (result && result.errors) {
      setToastType("warning");
      setErrorMessage(result.errors.general);
      handleShowToast();
    } else {
      navigation.navigate("BookingConfirm");
    }
  };

  const onChangeStart = (event, selectedDate) => {
    if (selectedDate) {
      const currentDate = new Date(selectedDate);
      setStartShow(false);
      const startDate = new Date(data.start);
      const endDate = new Date(data.end);
      if (startDate <= currentDate && currentDate <= endDate) {
        setData({ ...data, [cursort]: currentDate });
      } else {
        setToastType("warning");
        setErrorMessage("Your plan is out of the boat plan..");
        handleShowToast();
      }
      setMode(null);
      setCurdate(null);
      setCurId(null);
      setCursort(null);
    }
  };

  useEffect(() => {
    const fetchplan = navigation.addListener("focus", async () => {
      let temp = curboat.plans.filter(
        (item) => item._id == curbooking.planId
      )[0];
      setData({ ...data, start: temp.start, end: temp.end });
    });
    return fetchplan;
  }, [navigation]);

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
                <View className="flex flex-row justify-between items-center gap-4">
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
            <View style={styles.card} className="mt-2 items-center py-4">
              <View className="flex flex-row justify-between w-4/5 items-center">
                <Image source={calendar} style={{ width: 30, height: 30 }} />
                <View className="flex flex-col justify-start gap-2">
                  <TouchableOpacity
                    onPress={() => {
                      showDatepicker("start", "time", data.start);
                    }}
                  >
                    <Text style={styles.clock}>
                      {new Date(data.start).toTimeString().slice(0, 5)}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      showDatepicker("end", "time", data.end);
                    }}
                  >
                    <Text style={styles.clock}>
                      {new Date(data.end).toTimeString().slice(0, 5)}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex flex-col justify-start gap-2">
                  <TouchableOpacity
                    onPress={() => {
                      showDatepicker("start", "date", data.start);
                    }}
                  >
                    <Text style={styles.clock}>
                      {new Date(data.start).toLocaleDateString()}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      showDatepicker("end", "date", data.end);
                    }}
                  >
                    <Text style={styles.clock}>
                      {new Date(data.end).toLocaleDateString()}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.card} className="mt-2 py-4 px-4">
              <Text style={styles.header}>Select Number of Passengers</Text>
              <Number value={data.count} onChange={handleChange} name="count" />
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
          {startshow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(curdate)}
              mode={mode}
              is24Hour={true}
              onChange={(event, selectedDate) =>
                onChangeStart(event, selectedDate)
              }
            />
          )}
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
  clock: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: "#505050",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
});
export default BookingDetail;
