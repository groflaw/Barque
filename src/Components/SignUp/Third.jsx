import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-international-phone-number";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import io from "socket.io-client";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Socket_API } from "../../Utils/Constant";

import CheckBox from "../Basic/CheckBox";
import CustomTextInput from "../Basic/Input";
import LoadingIndicator from "../Basic/LoadingIndicator";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

import { Signup } from "../../Actions/Auth/auth.acitons";

const Third = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Global.loading);
  const toastRef = useRef(null);

  const [personInfo, setPersonInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDay: new Date().toLocaleDateString(),
    password: "",
    phoneNumber: "",
    expoPushToken: "",
  });

  const [checkPolish, setCheckPolish] = useState(false);
  const [checkSMS, setCheckSMS] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [startshow, setStartShow] = useState(false);
  const [curdate, setCurdate] = useState(null);
  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");
  const [notification, setNotification] = useState(undefined);
  const notificationListener = useRef();
  const responseListener = useRef();

  const handleInputValue = (phoneNumber) => {
    setInputValue(phoneNumber);
    if (selectedCountry) {
      const fullPhoneNumber = `${selectedCountry.callingCode} ${phoneNumber}`;
      setPersonInfo((prevState) => ({
        ...prevState,
        phoneNumber: fullPhoneNumber,
      }));
    }
  };

  const showDatepicker = (date) => {
    setStartShow(true); // setshow datapicker
    setCurdate(date); // selected date
  };

  const onChangeStart = (event, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate.toLocaleDateString(); // Format Date directly
      setStartShow(false);
      handleChange({
        target: { name: "birthDay", value: currentDate }, // Pass formatted date
      });
    }
  };

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleSelectedCountry = (country) => {
    setSelectedCountry(country);
    if (country) {
      const fullPhoneNumber = `${country.callingCode} ${inputValue}`;
      setPersonInfo((prevState) => ({
        ...prevState,
        phoneNumber: fullPhoneNumber,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    const result = await dispatch(Signup(personInfo));

    if (result?.errors) {
      setToastType("warning");
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          setErrorMessage(`${result.errors[key]}`);
          handleShowToast();
        }
      }
    } else {
      const socket = io(Socket_API);
      socket.emit("registerUser", result._id);
      navigation.navigate("Login");
    }
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
            <View style={styles.container}>
              <Text style={styles.Title}> Crear una Cuenta </Text>
              <CustomTextInput
                placeholder="First Name"
                value={personInfo.firstName}
                onChange={handleChange}
                name="firstName"
                sort={false}
              />

              <CustomTextInput
                placeholder="Last Name"
                value={personInfo.lastName}
                onChange={handleChange}
                name="lastName"
                sort={false}
              />

              <CustomTextInput
                placeholder="example@example.com"
                value={personInfo.email}
                onChange={handleChange}
                name="email"
                sort={false}
              />

              <CustomTextInput
                placeholder="Enter a password of at least 6 characters."
                value={personInfo.password}
                onChange={handleChange}
                name="password"
                sort={true}
              />

              <View className="flex flex-row items-center justify-between mt-5 mb-3">
                <PhoneInput
                  value={inputValue}
                  onChangePhoneNumber={handleInputValue}
                  selectedCountry={selectedCountry}
                  onChangeSelectedCountry={handleSelectedCountry}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  showDatepicker(personInfo.birthDay);
                }}
              >
                <View style={styles.birthDay}>
                  <Text style={styles.birthDaytext}>{personInfo.birthDay}</Text>
                </View>
              </TouchableOpacity>
              {startshow && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date("1990-10-01")}
                  mode="date"
                  is24Hour={true}
                  onChange={(event, selectedDate) =>
                    onChangeStart(event, selectedDate)
                  }
                />
              )}

              <Text style={styles.rule} className="mt-5">
                Debes tener al menos 18 años para registrarte. Otros usuarios de
                Barquea no verán tu cumpleaños.
              </Text>
              <View
                className="flex flex-row items-start mt-3"
                style={styles.checkContainer}
              >
                <CheckBox value={checkPolish} onValueChange={setCheckPolish} />
                <Text style={styles.checkLabel} className="mt-2">
                  Aceptar las Condiciones de servicio y la Política de
                  privacidad.
                </Text>
              </View>
              <View
                className="flex flex-row items-start mt-3"
                style={styles.checkContainer}
              >
                <CheckBox value={checkSMS} onValueChange={setCheckSMS} />
                <Text style={styles.checkLabel}>
                  'Doy mi consentimiento para recibir material de marketing
                  promocional a través de un sistema automatizado de mensajes de
                  texto SMS al número de teléfono que he proporcionado para mi
                  cuenta. El consentimiento no es una condición para registrarse
                  en una cuenta o comprar cualquier servicio. Ver la política de
                  mensajes de texto SMS de Barquea.'
                </Text>
              </View>
              <TouchableOpacity
                disabled={
                  !checkSMS ||
                  !checkPolish ||
                  selectedCountry == null ||
                  inputValue.trim() === ""
                }
                onPress={() => {
                  handleSignup();
                }}
              >
                <Text style={styles.Button} className="text-center mt-9">
                  Confirmar
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
    marginLeft: 15,
    marginRight: 15,
  },
  Title: {
    marginTop: 10,
    color: "#102a5e",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 26,
  },

  rule: {
    color: "#102a5e",
    fontSize: 12,
    fontFamily: "Lexend Deca",
    fontWeight: "300",
  },
  checkContainer: {
    flexDirection: "row",
  },
  checkLabel: {
    color: "#102a5e",
    fontSize: 13,
    fontFamily: "Lexend Deca",
    fontWeight: "300",
    lineHeight: 20,
  },
  Button: {
    borderRadius: 6,
    backgroundColor: "#17233c",
    padding: 20,
    color: "#dbe6fe",
    fontSize: 18,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
  },
  birthDay: {
    marginVertical: 10,
    width: "100%",
    shadowColor: "#030303",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 5,
    elevation: 2,
  },
  birthDaytext: {
    paddingTop: 7,
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});
export default Third;
