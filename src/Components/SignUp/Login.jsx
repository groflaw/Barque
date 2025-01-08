import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import Navbar from "../Navbar";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import io from "socket.io-client";

import CustomTextInput from "../Basic/Input";
import CustomSwitch from "../Basic/Switch";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";
import LoadingIndicator from "../Basic/LoadingIndicator";
import { Socket_API } from "../../Utils/Constant";

import { Signin } from "../../Actions/Auth/auth.acitons";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Global.loading);
  const toastRef = useRef(null);

  const [personInfo, setPersonInfo] = useState({
    email: "",
    password: "",
    expoPushToken: "",
  });

  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");

  const [remember, setRemeber] = useState(false);
  const [notification, setNotification] = useState(undefined);
  const notificationListener = useRef();
  const responseListener = useRef();

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

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleLogin = async () => {
    const result = await dispatch(Signin(personInfo));
    if (result?.errors) {
      setToastType("warning");
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          setErrorMessage(`${result.errors[key]}`);
          handleShowToast();
        }
      }
    } else {
      socket = io(Socket_API);
      socket.emit("registerUser", result._id);
      navigation.navigate("Main");
    }
  };
  const handleRemember = (id, status) => {
    setRemeber(status);
  };

  const handleRegistrationError = (errorMessage) => {
    setToastType("warning");
    setErrorMessage(errorMessage);
    handleShowToast();
  };

  const registerForPushNotificationsAsync = async () => {
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      handleRegistrationError(
        "Permission not granted to get push token for push notification!"
      );
      return;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError("Project ID not found");
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({ projectId })
      ).data;
      return pushTokenString;
    } catch (e) {
      handleRegistrationError(`${e}`);
    }
  };

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) =>
        setPersonInfo((prevState) => ({
          ...prevState,
          expoPushToken: token ?? "",
        }))
      )
      .catch((error) =>
        setPersonInfo((prevState) => ({
          ...prevState,
          expoPushToken: `${error}`,
        }))
      );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
