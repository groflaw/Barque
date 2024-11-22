import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import { changePassword } from "../../Actions/Auth/auth.acitons";

import CustomTextInput from "../Basic/Input";

const ChangePasword = () => {

  const dispatch = useDispatch();

  const [errorMessages, setErrorMessages] = useState({});

  const curuser = useSelector((state) => state.Slice.user);

  const [data, setData] = useState({
    curpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const result = await dispatch(changePassword(curuser.cohost, data));
    if (result.errors) {
      setErrorMessages(result.errors);
    }else{
        setErrorMessages({})
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>
        <View className="mt-7">
          <Text style={styles.item}>Current Password </Text>
          <CustomTextInput
            placeholder=""
            value={data.curpassword}
            onChange={handleChange}
            name="curpassword"
            sort={true}
          />
          {errorMessages.curpassword && (
            <Text style={styles.error}>{errorMessages.curpassword}</Text>
          )}
        </View>
        <View className="mt-4">
          <Text style={styles.item}>New Password </Text>
          <CustomTextInput
            placeholder="Enter a password of at least 6 characters."
            value={data.newpassword}
            onChange={handleChange}
            name="newpassword"
            sort={true}
          />
          {errorMessages.newpassword && (
            <Text style={styles.error}>{errorMessages.newpassword}</Text>
          )}
        </View>
        <View className="mt-5">
          <Text style={styles.item}>Confirm New Password </Text>
          <CustomTextInput
            placeholder="Confirm new password."
            value={data.confirmpassword}
            onChange={handleChange}
            name="confirmpassword"
            sort={true}
          />
          {errorMessages.confirmpassword && (
            <Text style={styles.error}>{errorMessages.confirmpassword}</Text>
          )}
        </View>
        <View className="mt-5">
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.changepassword} className="text-center">
              Change Password
            </Text>
          </TouchableOpacity>
          {errorMessages.general && (
            <Text style={styles.error} className="text-center">
              {errorMessages.general}
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
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
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
  changepassword: {
    borderRadius: 6,
    backgroundColor: "#072d4c",
    padding: 10,
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
});
export default ChangePasword;
