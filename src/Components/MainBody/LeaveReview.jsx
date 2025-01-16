import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import ToastMessage from "../Basic/ToastMessage/ToastMessage";
import CustomTextInput from "../Basic/Input";

import { setHostReview } from "../../Actions/UserBoat/userboat";

const LeaveReview = () => {
  const dispatch = useDispatch();
  const toastRef = useRef(null);
  const navigation = useNavigation();

  const curuser = useSelector((state) => state.Slice.user);
  const curboat = useSelector((state) => state.Global.curboat);
  const curbooking = useSelector((state) => state.Global.curbooking);

  const [toastType, setToastType] = useState("warning");
  const [errormessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    customer: curuser._id,
    review: 0,
    content: "",
    date: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };
  const handleSubmit = async () => {
    let result;
    result = await dispatch(setHostReview(data, curboat._id, curbooking._id));
    if (result?.errors) {
      setToastType("warning");
      setErrorMessage(result.errors.general);
      handleShowToast();
    } else {
      navigation.navigate("Mainbody");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.Title}>Tell us your experience</Text>
        <Text style={styles.text} className="mt-1">
          Rate your trip with
        </Text>
        <View className="w-2/3 m-auto flex flex-col justify-center mt-10">
          <Text style={styles.text} className="text-center">
            Rating
          </Text>
          <View
            style={styles.reviewbar}
            className="flex flex-row items-center py-1 px-3 mt-2 justify-around"
          >
            {[...Array(5)].map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleChange({
                    target: { name: "review", value: index + 1 },
                  });
                }}
              >
                <FontAwesome
                  name="star"
                  style={{
                    ...styles.icon,
                    color: index + 1 <= data.review ? "#ffbf00" : "white",
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="mt-1">
          <CustomTextInput
            value={data.content}
            onChange={handleChange}
            name="content"
          ></CustomTextInput>
        </View>
        <View className="mt-1">
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.continue} className="text-center py-3">
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ToastMessage
        type={toastType}
        description={errormessage}
        ref={toastRef}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  Title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  text: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },
  reviewbar: {
    backgroundColor: "#17233c",
    borderRadius: 54,
    borderWidth: 1,
  },
  icon: {
    fontSize: 24,
    color: "white",
  },
  continue: {
    borderRadius: 6,
    backgroundColor: "#17233c",
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Mulish",
    fontWeight: "900",
  },
});
export default LeaveReview;
