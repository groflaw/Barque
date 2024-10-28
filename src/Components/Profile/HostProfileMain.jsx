import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import CustomTextInput from "../Basic/Input";
import Option from "../Basic/Option";

import hostavatar from "../../../assets/Icons/hostavatar.png";
import photoImage from "../../../assets/Icons/photo.png";

const HostProfileMain = () => {
  return (
    <ScrollView>
      <View className="flex flex-row items-center pl-5 pr-5 mt-10 w-100">
        <Image source={hostavatar} style={styles.avatar}></Image>
        <TouchableOpacity className="ml-10">
          <Text style={styles.avatarbutton}>Subir Foto de Perfil</Text>
        </TouchableOpacity>
      </View>
      <View className="flex px-5 mt-4">
        <Text>Número de Identificación</Text>
        <CustomTextInput placeholder="Carlos Mendoza"></CustomTextInput>
      </View>
      <View className="flex px-5 mt-4">
        <Text>Número de Identificación</Text>
        <CustomTextInput placeholder="Carlos Mendoza"></CustomTextInput>
      </View>
      <View className="px-5 mt-5">
        <Text>Número de Telefono'</Text>
        <View className="flex flex-row items-center justify-between ">
          <Option width={"22%"}></Option>
          <TextInput
            placeholder="Número de teléfono"
            className="pt-1 pb-2 pl-2 pr-2 bg-white w-72"
          ></TextInput>
        </View>
      </View>
      <View className="px-5 mt-5">
        <Text>Subir Identificación</Text>
        <View className="flex flex-row justify-around mt-3">
          <View style={styles.imagecard} className="flex items-center">
            <TouchableOpacity>
              <Image source={photoImage}></Image>
            </TouchableOpacity>
            <Text className="mt-2">Subir Foto de Frente</Text>
          </View>
          <View style={styles.imagecard} className="flex items-center">
            <TouchableOpacity>
              <Image source={photoImage}></Image>
            </TouchableOpacity>
            <Text className="mt-2">Subir Foto de Frente</Text>
          </View>
        </View>
      </View>
      <View className="px-5 mt-5">
        <TouchableOpacity>
          <Text style={styles.changepassword} className="text-center">
            Cambiar contraseña
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.save} className="mt-5">
        <TouchableOpacity>
          <Text style={styles.saveText} className="p-4 text-center">
            Guardar Cambios
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
  },
  avatarbutton: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,0)",
    color: "black",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    borderWidth: 1, // border: '1px solid #0751c1' translates to borderWidth and borderColor
    borderColor: "#0751c1", // Sets the border color
  },
  imagecard: {
    borderWidth: 1, // border: '1px solid #17233c' translates to borderWidth
    borderColor: "#17233c", // Specify the border color
    borderStyle: "solid", // React Native uses solid by default, but listed for clarity
    borderRadius: 6, // Add border radius if you want rounded corners
    backgroundColor: "rgba(0, 0, 0, 0)", // Background color if needed
    padding: 10,
  },
  changepassword: {
    borderRadius: 6, // borderRadius: '6px'
    backgroundColor: "#072d4c", // backgroundColor: '#072d4c'
    padding: 10,
    color: "#ffffff", // color: '#ffffff'
    fontSize: 16, // fontSize: '16px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    fontWeight: "700",
  },
  save: {
    backgroundColor: "#ffffff", // backgroundColor: '#ffffff'
    borderRadius: 6, // Optional: Add border radius if needed
    padding: 10, // Optional: Add padding for better appearance

    // Shadow properties for iOS
    shadowColor: "rgba(3, 3, 3, 0.1)", // Shadow color
    shadowOffset: {
      width: 2, // Similar to '2px'
      height: -2, // Similar to '-2px'
    },
    shadowOpacity: 1, // Set standard opacity
    shadowRadius: 10, // Set the blur radius similar to '10px'

    // Elevation for Android
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
});
export default HostProfileMain;
