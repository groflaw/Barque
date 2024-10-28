import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Navbar from "../Navbar";
import boatdata from "../../../assets/Icons/boatdata.png";
import boatplan from "../../../assets/Icons/boatplan.png";
import boatlocaiton from "../../../assets/Icons/boatlocaiton.png";
import boatImage from "../../../assets/Icons/boatImage.png";
import boatcancel from "../../../assets/Icons/boatcancel.png";
import boataccesoris from "../../../assets/Icons/boataccesoris.png";
import boatallow from "../../../assets/Icons/boatallow.png";
import vesseldata from "../../../assets/Icons/vesseldata.png";

const Option = () => {
  const navigation = useNavigation();

  const nextStep = () => {
    navigation.navigate("NewScreen");
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Editar embarcación</Text>

          <TouchableOpacity onPress={nextStep}>
            <View className="flex flex-row mt-5" style={styles.item}>
              <Image source={boatdata}></Image>
              <Text style={styles.itemText} className="ml-7">
                Datos embarcación
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatplan}></Image>
              <Text style={styles.itemText} className="ml-7">
                Planes y horarios
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatlocaiton}></Image>
              <Text style={styles.itemText} className="ml-7">
                Ubicación
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatImage}></Image>
              <Text style={styles.itemText} className="ml-7">
                Imágenes
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatcancel}></Image>
              <Text style={styles.itemText} className="ml-7">
                Politica de cancelación
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boataccesoris}></Image>
              <Text style={styles.itemText} className="ml-7">
                Accesorios
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={boatallow}></Image>
              <Text style={styles.itemText} className="ml-7">
                Permitidos
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mt-3" style={styles.item}>
              <Image source={vesseldata}></Image>
              <Text style={styles.itemText} className="ml-7">
                Documentación de la embarcación
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    color: "#17233c", // color: '#17233c'
    fontSize: 20, // fontSize: '20px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    fontWeight: "700",
  },
  item: {
    borderRadius: 6, // borderRadius: '6px'
    backgroundColor: "#072d4c", // backgroundColor: '#072d4c'
    padding: 10,
  },
  itemText: {
    color: "#ffffff", // color: '#ffffff'
    fontSize: 14, // fontSize: '14px'
    fontFamily: "Lexend Deca", // fontFamily: 'Lexend Deca'
    fontWeight: "700",
  },
});
export default Option;
