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
import {
  getMyboats,
  setBoatFlag,
  getboatInfo,
} from "../../Actions/AddBoat/addboat";

import { setLoading, setCurboat } from "../../Store/Global";
import boatcard from "../../../assets/Profile/boat.png";

const Myboats = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const curuser = useSelector((state) => state.Slice.user);
  const loading = useSelector((state) => state.Global.loading);
  const boatTypes = useSelector((state) => state.BasicBoat.boattypes);

  const [myboats, setMyboats] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  const nextStep = async () => {
    dispatch(setCurboat({}));
    navigation.navigate("Option");
  };

  const handleSwitch = async (id, status) => {
    setMyboats((prevBoats) =>
      prevBoats.map((boat) =>
        boat._id === id ? { ...boat, flag: status } : boat
      )
    );
    let result = await dispatch(setBoatFlag(id, status));
    if (result.errors) {
      setErrorMessages(result.errors);
    }
  };

  const handleEdit = async (id) => {
    let result = await dispatch(getboatInfo(id));
    if (result.errors) {
      setErrorMessages(result.errors);
    }
    navigation.navigate("Option");
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchMyBoats();
    });

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
      } catch (error) {
        await dispatch(setLoading(false));
        console.error("Error fetching boat types:", error);
      }
    };
    if (curuser._id == undefined) {
      navigation.navigate("SignUp");
    } else {
      return unsubscribe;
    }
  }, [navigation]);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.Title}>Mis Embarcaciones</Text>
            {myboats.map((item, index) => {
              return (
                <View
                  style={styles.card}
                  className="flex flex-row items-center justify-between mt-4 w-full"
                >
                  <View
                    className="flex flex-row items-center"
                    style={{ width: "60%" }}
                  >
                    <Image
                      style={styles.cardImage}
                      source={
                        item.boatImage?.cover
                          ? { uri: item.boatImage.cover }
                          : boatcard
                      }
                    ></Image>
                    <View className="ml-3 text-wrap">
                      <Text style={styles.boatName}>
                        {item.location2 ? item.location2.boatname : ""}
                      </Text>
                      <Text style={styles.boatDetail} className="text-wrap">
                        Type:
                        {boatTypes
                          .filter((boat) => boat._id === item.boattype)
                          .map((boat) => boat.name)}
                      </Text>
                      <Text style={styles.boatDetail}>
                        Location: {item.location1}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{ width: "20%" }}
                    className="justify-center items-center"
                  >
                    <TouchableOpacity
                      onPress={() => handleEdit(item._id)}
                      className="w-full"
                    >
                      <Text style={styles.edit} className="mb-2 text-center">
                        Editor
                      </Text>
                    </TouchableOpacity>
                    <CustomSwitch
                      id={item._id}
                      flag={item.flag}
                      onSwitchChange={handleSwitch}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
      <View className="flex items-center mt-2 mb-2 w-100">
        <TouchableOpacity onPress={nextStep}>
          <Text style={styles.addBoat} className="text-center w-72">
            + Agregar embarcación
          </Text>
        </TouchableOpacity>
      </View>
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
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#0751c1",
  },
  boatName: {
    color: "#17233c",
    fontSize: 18,
    fontFamily: "Lexend Deca",
    fontWeight: 900,
  },
  boatDetail: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
    flexWrap: "wrap",
  },
  edit: {
    borderRadius: 6,
    backgroundColor: "#072d4c",
    padding: 5,
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
