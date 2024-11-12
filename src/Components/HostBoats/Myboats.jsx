import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../Navbar";
import CustomSwitch from "../Basic/Switch";
import LoadingIndicator from "../Basic/LoadingIndicator";

import { getAllBoatTypes } from "../../Actions/BasicBoat/basicboat";
import { getMyboats } from "../../Actions/AddBoat/addboat";

import { setLoading } from "../../Store/Global";

import boatcard from "../../../assets/Icons/boatcard.png";

const Myboats = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const curuser = useSelector((state) => state.Slice.user);
  const boatTypes = useSelector((state) => state.BasicBoat.boattypes);

  const [myboats, setMyboats] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  const nextStep = () => {
    navigation.navigate("Option");
  };

  const handleSwitch = (id, status) => {
    console.log(`Boat ID: ${id}, Switch Status: ${status}`);

    // You can handle the state change (e.g., update backend or local state) here
  };

  useEffect(() => {
    const fetchMyBoats = async () => {
      try {
        await dispatch(setLoading(true));
        let result = await dispatch(getAllBoatTypes());
        if (result.errors) {
          setErrorMessages(result.errors);
        }
        result = await dispatch(getMyboats(curuser._id));
        if (result.errors) {
          setErrorMessages(result.errors);
        }
        setMyboats(result);
        await dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching boat types:", error);
      }
    };
    fetchMyBoats();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Title}>Mis Embarcaciones</Text>
          {myboats.map((item, index) => {
            return (
              <View
                style={styles.card}
                className="flex flex-row items-center justify-between mt-4"
              >
                <View className="flex flex-row items-center">
                  <Image style={styles.cardImage} source={boatcard}></Image>
                  <View className="ml-3">
                    <Text style={styles.boatName}>
                      {item.location.boatname}
                    </Text>
                    <Text style={styles.boatDetail}>
                      Tipo:
                      {boatTypes
                        .filter((boat) => boat._id === item.boattype)
                        .map((boat) => boat.name)}
                    </Text>
                    <Text style={styles.boatDetail}>
                      {item.location.address}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.edit} className="mb-2 text-center">
                    Editor
                  </Text>
                  <CustomSwitch id={item._id} onSwitchChange={handleSwitch} />
                </View>
              </View>
            );
          })}
          <View className="flex items-center mt-7 w-100">
            <TouchableOpacity onPress={nextStep}>
              <Text style={styles.addBoat} className="text-center w-72">
                + Agregar embarcación
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  Title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
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
    padding: 16,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#0751c1",
  },
  boatName: {
    color: "#17233c",
    fontSize: 18,
    fontFamily: "Lexend Deca",
    fontWeight: "600",
  },
  boatDetail: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },
  edit: {
    borderRadius: 6,
    backgroundColor: "#072d4c",
    padding: 8,
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
  },
  addBoat: {
    borderRadius: 6,
    backgroundColor: "#2a8500",
    padding: 10,
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
});

export default Myboats;
