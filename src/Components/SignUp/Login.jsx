import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Navbar from "../Navbar";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomTextInput from "../Basic/Input";
import CustomSwitch from "../Basic/Switch";
import LoadingIndicator from "../Basic/LoadingIndicator";

import { Signin } from "../../Actions/Auth/auth.acitons";
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Global.loading);

  const [personInfo, setPersonInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [remember, setRemeber] = useState(false);

  const nextStep = (url) => {
    navigation.navigate(url);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const result = await dispatch(Signin(personInfo));

    if (result.errors) {
      setErrorMessages(result.errors); // Set error messages in state
    } else {
      navigation.navigate("Main");
    }
  };

  const handleRemember = (id, status) => {
    setRemeber(status);
  };
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <>
              <View className="flex items-center justify-center">
                <Text style={styles.Title} className="mt-5">
                  Welcome Back!
                </Text>
                <Text style={styles.head} className="mt-4">
                  Please sign in to continue
                </Text>
              </View>

              <View className="mt-5">
                <Text style={styles.content}>Email</Text>
                <CustomTextInput
                  placeholder="example@example.com"
                  value={personInfo.email} // Ensure you're using the correct property
                  onChange={handleChange}
                  name="email"
                  sort={false}
                />
                {errorMessages.email && (
                  <Text style={styles.error}>{errorMessages.email}</Text>
                )}
              </View>
              <View className="mt-3">
                <Text style={styles.content}>Password</Text>
                <CustomTextInput
                  placeholder="Enter a password of at least 6 characters."
                  value={personInfo.password} // Ensure you're using the correct property
                  onChange={handleChange}
                  name="password"
                  sort={true}
                />
                {errorMessages.password && (
                  <Text style={styles.error}>{errorMessages.password}</Text>
                )}
              </View>
              <View className="flex flex-row items-center mt-3">
                <CustomSwitch
                  id={0}
                  flag={remember}
                  onSwitchChange={handleRemember}
                ></CustomSwitch>
                <Text style={styles.head} className="ml-4">
                  Remember Me
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  handleLogin();
                }}
              >
                <Text style={styles.button} className="text-center mt-7">
                  Log In
                </Text>
              </TouchableOpacity>
              <View className="flex items-center justify-center mt-5">
                <TouchableOpacity>
                  <Text style={styles.head}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
              <View className="flex items-center justify-center mt-7">
                <TouchableOpacity onPress={() => nextStep("Second")}>
                  <Text style={styles.head}>
                    Don't have an account? Register here
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          </View>
        </ScrollView>
      )}
      <Navbar></Navbar>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Offset for iOS
    shadowOpacity: 1, // Opacity for iOS
    shadowRadius: 10, // Radius for iOS
    elevation: 5, // Shadow for Android
    padding: 20, // Optional: Add padding if needed
  },
  Title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  head: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
  },
  content: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  button: {
    borderRadius: 6,
    backgroundColor: "#17233c",
    color: "#dbe6fe", // Note: Text color should be applied to Text component.
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 20,
    padding: 10, // Recommended to add some padding for better UI.
  },
  error: {
    color: "red", // Red color for the error message
    fontSize: 12, // Small font size
    marginTop: 2, // Space between the input and the error message
  },
});
export default Login;
