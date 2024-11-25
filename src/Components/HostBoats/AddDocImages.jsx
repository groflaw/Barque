import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";

import { uploadDocImage } from "../../Actions/AddBoat/addboat";
import LoadingIndicator from "../Basic/LoadingIndicator";
import photoImage from "../../../assets/Icons/photo.png";

const AddDocImage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const curboat = useSelector((state) => state.Global.curboat);
  const loading = useSelector((state) => state.Global.loading);

  const [image, setImage] = useState(
    curboat.docImage
      ? curboat.docImage
      : {
          navigation: null,
          authorization: null,
        }
  );
  const [errorMessages, setErrorMessages] = useState({});

  const nextStep = () => {
    navigation.navigate("Location");
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
        uploadDocImage(curboat._id, formDataFromImagePicker(temp), type)
      );
      if (result.errors) {
        setErrorMessages(result.errors);
      }
    }
  };

  const pickImageWithResults = async (type) => {
    await pickImage({}, type);
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title} className="mt-4">
              Agrega documentación
            </Text>
            <Text style={styles.des} className="mt-5">
              Necesitamos verificar por la seguridad tuya y de los clientes que
              eres el propietario o el autorizado de la embarcacion.
            </Text>
            <Text style={styles.des} className="mt-5">
              Por favor, añade imágenes de los documentos de tu embarcación.
              Asegurate de que las imagenes tengan buena calidad y sean
              legibles.
            </Text>

            <View
              style={styles.card}
              className="items-center justify-center mt-5"
            >
              <View className="flex items-center mt-6">
                <TouchableOpacity
                  onPress={() => pickImageWithResults("navigation")}
                >
                  <Image
                    source={
                      image.navigation ? { uri: image.navigation } : photoImage
                    }
                    style={{
                      width: image.navigation ? 290 : 40,
                      height: image.navigation ? 160 : 40,
                    }}
                  />
                </TouchableOpacity>
                <Text className="mt-3" style={styles.des}>
                  Upload
                </Text>
                <Text className="mb-2" style={styles.des}>
                  Navigation License
                </Text>
              </View>
            </View>

            <View
              style={styles.card}
              className="items-center justify-center mt-5"
            >
              <View className="flex items-center mt-6">
                <TouchableOpacity
                  onPress={() => pickImageWithResults("authorization")}
                >
                  <Image
                    source={
                      image.authorization
                        ? { uri: image.authorization }
                        : photoImage
                    }
                    style={{
                      width: image.authorization ? 290 : 40,
                      height: image.authorization ? 160 : 40,
                    }}
                  />
                </TouchableOpacity>
                <Text className="mt-2" style={styles.des}>
                  Upload
                </Text>
                <Text style={styles.des}>Authorization</Text>
                <Text className="mb-2" style={styles.des}>
                  (Only if the names on the ID do not match)
                </Text>
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
  title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  des: {
    color: "#000000",
    fontSize: 13,
    fontFamily: "Lexend Deca",
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
export default AddDocImage;
