import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import Convert from "../Basic/Convert";

import { setAvatar } from "../../Actions/Auth/auth.acitons";
import { setMode } from "../../Store/Global";

import personalImage from "../../../assets/Icons/personal.png";
import credietImage from "../../../assets/Icons/credit.png";
import rightArrowImage from "../../../assets/Icons/rightArrow.png";
import supportImage from "../../../assets/Icons/support.png";
import notifiImage from "../../../assets/Icons/notification.png";

const Main = () => {
  const navigation = useNavigation();

  const curuser = useSelector((state) => state.Slice.user);
  const mode = useSelector((state) => state.Global.mode);

  const [user, setUser] = useState(curuser);
  const dispatch = useDispatch();
  const nextStep = (url) => {
    navigation.navigate(url);
  };
  const formDataFromImagePicker = (result) => {
    const formData = new FormData();

    const asset = result.assets[0];
    formData.append(`photo`, {
      uri: asset.uri,
      name: asset.fileName ?? asset.uri.split("/").pop(),
      type: "image/jpeg",
    });
    if (asset.exif) {
      formData.append(`exif`, JSON.stringify(asset.exif));
    }

    return formData;
  };
  const pickImage = async (options) => {
    let temp = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      ...options,
    });
    if (!temp.canceled) {
      const result = await dispatch(
        setAvatar(user._id, formDataFromImagePicker(temp))
      );
      if (result.errors) {
        setErrorMessages(result.errors);
      }
      setUser(result);
    }
  };
  const pickImageWithResults = async () => {
    await pickImage({});
  };
  const changeMode = async () => {
    await dispatch(setMode(true));
    navigation.navigate("Main", { key: Math.random() });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile} className="flex items-center">
          <View className="relative">
            {user.avatar ? (
              <Image source={{ uri: user.avatar }} style={styles.imageavatar} />
            ) : (
              <View style={styles.avatar}>
                <Text className="text-3xl text-white ">
                  {user.firstName.charAt(0).toUpperCase()}
                </Text>
              </View>
            )}
            <TouchableOpacity>
              <View style={styles.plus} className="absolute">
                <TouchableOpacity onPress={() => pickImageWithResults()}>
                  <Text styles={styles.avatar}>+</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.name} className="mt-4">
            {user.firstName + " " + user.lastName}
          </Text>
          <Text>
            {String(new Date(user.birthDay).getUTCMonth() + 1) +
              "-" +
              String(new Date(user.birthDay).getUTCDate()).padStart(2, "0") +
              "-" +
              new Date(user.birthDay).getUTCFullYear()}
          </Text>
        </View>
        <TouchableOpacity onPress={() => nextStep("Personal")}>
          <View className="flex flex-row items-center justify-between mt-12 mb-6">
            <View className="flex flex-row items-center">
              <Image source={personalImage}></Image>
              <Text style={styles.key}>Accouunt Information</Text>
            </View>
            <Image source={rightArrowImage}></Image>
          </View>
        </TouchableOpacity>
        {mode && (
          <TouchableOpacity onPress={() => nextStep("Payment")}>
            <View className="flex flex-row items-center justify-between mt-6 mb-6">
              <View className="flex flex-row items-center">
                <Image source={credietImage}></Image>
                <Text style={styles.key}>Credit Cards</Text>
              </View>
              <Image source={rightArrowImage}></Image>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => nextStep("Notification")}>
          <View className="flex flex-row items-center justify-between mt-6 mb-6">
            <View className="flex flex-row items-center">
              <Image source={notifiImage}></Image>
              <Text style={styles.key}>Notification Settings</Text>
            </View>
            <Image source={rightArrowImage}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nextStep("Support")}>
         < View className="flex flex-row items-center justify-between mt-6 mb-3">
            <View className="flex flex-row items-center">
              <Image source={supportImage}></Image>
              <Text style={styles.key}>Support</Text>
            </View>
            <Image source={rightArrowImage}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            changeMode();
          }}
        >
          <Convert></Convert>
        </TouchableOpacity>
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
  profile: {
    marginTop: 60,
  },
  avatar: {
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 20,
    backgroundColor: "#0288d0",
    borderRadius: 50,
  },
  imageavatar: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: "#0288d0",
    borderRadius: 50,
    width: 91,
    height: 95,
  },
  plus: {
    bottom: 0,
    right: 0,
    borderRadius: 50,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: "#72d4ba",
  },
  name: {
    color: "#0a252f",
    fontSize: 19, 
    fontFamily: "Lexend Deca", 
    fontWeight: "700", 
    lineHeight: 27,
  },
  key: {
    marginLeft: 15,
    color: "#17233c",
    fontSize: 16, 
    fontFamily: "Lexend Deca", 
    fontWeight: "500", 
    lineHeight: 23,
  },
});
export default Main;
