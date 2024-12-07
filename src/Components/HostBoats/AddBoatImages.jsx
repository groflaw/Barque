import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";

import photoImage from "../../../assets/Icons/photo.png";

import LoadingIndicator from "../Basic/LoadingIndicator";

import { uploadBoatImage } from "../../Actions/AddBoat/addboat";

const AddBoatImages = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const curboat = useSelector((state) => state.Global.curboat);
  const loading = useSelector((state) => state.Global.loading);

  const [image, setImage] = useState(
    curboat.boatImage
      ? curboat.boatImage
      : {
          cover: null,
          photo2: null,
          photo3: null,
          photo4: null,
          photo5: null,
        }
  );

  const nextStep = () => {
    navigation.navigate("Cancellation");
  };

  const pickImageWithResults = async (type) => {
    await pickImage({}, type);
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

  const pickImage = async (options, type) => {
    let temp = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      ...options,
    });
    if (!temp.canceled) {
      setImage((prev) => ({
        ...prev,
        [type]: temp.assets[0].uri,
      }));
      const result = await dispatch(
        uploadBoatImage(curboat._id, formDataFromImagePicker(temp), type)
      );
      if (result.errors) {
        setErrorMessages(result.errors);
      } else {
        setPlans(result.plans);
      }
    }
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title} className="mt-5">
              Add pictures
            </Text>
            <Text style={styles.des} className="mt-3">
              Add images of your boat. Avoid uploading images with company logos
              and phone numbers. These images will be edited or deleted. Add at
              least 4 photos.
            </Text>
            <View
              style={styles.card}
              className="items-center justify-center mt-5"
            >
              <View style={styles.imagecard} className="flex items-center mt-6">
                <TouchableOpacity onPress={() => pickImageWithResults("cover")}>
                  <Image
                    source={image.cover ? { uri: image.cover } : photoImage}
                    style={{
                      width: image.cover ? 310 : 40,
                      height: image.cover ? 160 : 40,
                    }}
                  />
                </TouchableOpacity>
                <Text className="mt-2">This will be the cover photo</Text>
              </View>
            </View>
            <View
              style={styles.card}
              className="items-center justify-center mt-5"
            >
              <View style={styles.imagecard} className="flex items-center mt-6">
                <TouchableOpacity
                  onPress={() => pickImageWithResults("photo2")}
                >
                  <Image
                    source={image.photo2 ? { uri: image.photo2 } : photoImage}
                    style={{
                      width: image.photo2 ? 310 : 40,
                      height: image.photo2 ? 160 : 40,
                    }}
                  />
                </TouchableOpacity>
                <Text className="mt-2">Photo 2</Text>
              </View>
            </View>
            <View
              style={styles.card}
              className="items-center justify-center mt-5"
            >
              <View style={styles.imagecard} className="flex items-center mt-6">
                <TouchableOpacity
                  onPress={() => pickImageWithResults("photo3")}
                >
                  <Image
                    source={image.photo3 ? { uri: image.photo3 } : photoImage}
                    style={{
                      width: image.photo3 ? 310 : 40,
                      height: image.photo3 ? 160 : 40,
                    }}
                  />
                </TouchableOpacity>
                <Text className="mt-2">Photo 3</Text>
              </View>
            </View>
            <View
              style={styles.card}
              className="items-center justify-center mt-5"
            >
              <View style={styles.imagecard} className="flex items-center mt-6">
                <TouchableOpacity
                  onPress={() => pickImageWithResults("photo4")}
                >
                  <Image
                    source={image.photo4 ? { uri: image.photo4 } : photoImage}
                    style={{
                      width: image.photo4 ? 310 : 40,
                      height: image.photo4 ? 160 : 40,
                    }}
                  />
                </TouchableOpacity>
                <Text className="mt-2">Photo 4</Text>
              </View>
            </View>
            <View
              style={styles.card}
              className="items-center justify-center mt-5"
            >
              <View style={styles.imagecard} className="flex items-center mt-6">
                <TouchableOpacity
                  onPress={() => pickImageWithResults("photo5")}
                >
                  <Image
                    source={image.photo5 ? { uri: image.photo5 } : photoImage}
                    style={{
                      width: image.photo5 ? 310 : 40,
                      height: image.photo5 ? 160 : 40,
                    }}
                  />
                </TouchableOpacity>
                <Text className="mt-2">Photo 5</Text>
              </View>
            </View>
            <View className="mt-5">
              <TouchableOpacity onPress={nextStep}>
                <Text style={styles.continue} className="text-center">
                  CONTINUAR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
  card: {
    height: 250,
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
});
export default AddBoatImages;
