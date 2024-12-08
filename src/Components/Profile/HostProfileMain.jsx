import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import CustomTextInput from "../Basic/Input";
import LoadingIndicator from "../Basic/LoadingIndicator";

import { AddCoHost, getUser } from "../../Actions/Auth/auth.acitons";

import hostavatar from "../../../assets/Icons/hostavatar.png";
import photoImage from "../../../assets/Icons/photo.png";

const HostProfileMain = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const curuser = useSelector((state) => state.Slice.user);
  const loading = useSelector((state) => state.Global.loading);

  const [errorMessages, setErrorMessages] = useState({});
  const [profile, setProfile] = useState({
    profileImage: null,
    frontID: null,
    backID: null,
    idNumber: "",
    email: "",
  });

  const pickImage = async (field) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfile((prev) => ({
        ...prev,
        [field]: result.assets[0].uri,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevData) => ({
      ...prevData,
      [name]: value, // Update the 'year' property
    }));
  };

  const goChangePassword = () => {
    if (curuser.cohost) {
      navigation.navigate("ChangePassword");
    } else {
      setErrorMessages({ changepassword: "You should add co-host profile." });
    }
  };
  const handleSubmit = async () => {
    const result = await dispatch(AddCoHost(curuser._id, profile));
    if (result.errors) {
      setErrorMessages(result.errors);
    }
  };

  useEffect(() => {
    const fetchCoHost = async () => {
      let result = await dispatch(getUser(curuser.cohost));
      setProfile({
        profileImage: result.avatar,
        frontID: result.idImage.front,
        backID: result.idImage.back,
        idNumber: result.idNumber + "",
        email: result.email,
      });
    };
    const unsubscribe = navigation.addListener("focus", async () => {
      fetchCoHost();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View className="flex flex-row items-center pl-5 pr-5 mt-10 w-100">
            <Image
              source={
                profile.profileImage
                  ? { uri: profile.profileImage }
                  : hostavatar
              }
              style={styles.avatar}
            ></Image>
            <TouchableOpacity
              className="ml-10"
              onPress={() => pickImage("profileImage")}
            >
              <Text style={styles.avatarbutton}>Upload Profile Image</Text>
            </TouchableOpacity>
          </View>
          <View className="flex px-5 mt-4">
            <Text>ID Number</Text>
            <CustomTextInput
              placeholder="Carlos Mendoza"
              value={profile.idNumber}
              onChange={handleChange}
              name="idNumber"
            ></CustomTextInput>
            {errorMessages.idNumber && (
              <Text style={styles.error} className="text-center">
                {errorMessages.idNumber}
              </Text>
            )}
          </View>
          <View className="flex px-5 mt-4">
            <Text>Email Address</Text>
            <CustomTextInput
              placeholder="example@example.com"
              value={profile.email}
              onChange={handleChange}
              name="email"
            ></CustomTextInput>
            {errorMessages.email && (
              <Text style={styles.error} className="text-center">
                {errorMessages.email}
              </Text>
            )}
          </View>
          <View className="px-5 mt-5">
            <Text>Subir Identificación</Text>
            <View className="flex flex-row justify-around mt-3">
              <View
                style={styles.imagecard}
                className="flex items-center justify-center"
              >
                {!profile.frontID ? (
                  <>
                    <TouchableOpacity onPress={() => pickImage("frontID")}>
                      <Image
                        source={photoImage}
                        style={{ width: 40, height: 40 }}
                      />
                    </TouchableOpacity>
                    <Text className="mt-2">Upload front ID</Text>
                  </>
                ) : (
                  <TouchableOpacity
                    onPress={() => pickImage("frontID")}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Image
                      source={{ uri: profile.frontID }}
                      style={{ width: "100%", height: "100%", borderRadius: 6 }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={styles.imagecard}
                className="flex items-center justify-center"
              >
                {!profile.backID ? (
                  <>
                    <TouchableOpacity onPress={() => pickImage("backID")}>
                      <Image
                        source={photoImage}
                        style={{ width: 40, height: 40 }}
                      />
                    </TouchableOpacity>
                    <Text className="mt-2">Upload Back ID</Text>
                  </>
                ) : (
                  <TouchableOpacity
                    onPress={() => pickImage("backID")}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Image
                      source={{ uri: profile.backID }}
                      style={{ width: "100%", height: "100%", borderRadius: 6 }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {errorMessages.image && (
              <Text style={styles.error} className="text-center">
                {errorMessages.image}
              </Text>
            )}
          </View>
          <View className="px-5 mt-5">
            <TouchableOpacity
              onPress={() => {
                goChangePassword();
              }}
            >
              <Text style={styles.changepassword} className="text-center">
                Change Password
              </Text>
            </TouchableOpacity>
            {errorMessages.changepassword && (
              <Text style={styles.error} className="text-center">
                {errorMessages.changepassword}
              </Text>
            )}
          </View>
          <View style={styles.save} className="mt-5">
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text style={styles.saveText} className="p-4 text-center">
                Save Changes
              </Text>
            </TouchableOpacity>
            {errorMessages.general && (
              <Text style={styles.error} className="text-center">
                {errorMessages.general}
              </Text>
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarbutton: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,0)",
    color: "black",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    borderWidth: 1,
    borderColor: "#0751c1",
  },
  imagecard: {
    borderWidth: 1,
    borderColor: "#17233c",
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: 0,
    width: "47%",
    aspectRatio: 1,
    overflow: "hidden",
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
  save: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    padding: 10,

    shadowColor: "rgba(3, 3, 3, 0.1)",
    shadowOffset: {
      width: 2,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 5,
  },
  saveText: {
    borderRadius: 6,
    backgroundColor: "#0751c1",
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
});
export default HostProfileMain;
