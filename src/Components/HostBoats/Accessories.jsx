import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import CheckBox from "../Basic/CheckBox";
import LoadingIndicator from "../Basic/LoadingIndicator";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

import { getAccessories } from "../../Actions/BasicBoat/basicboat";
import { submitAccessories } from "../../Actions/AddBoat/addboat";
import { setLoading } from "../../Store/Global";

const Accessories = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  const accessories = useSelector((state) => state.BasicBoat.accessories);
  const curboat = useSelector((state) => state.Global.curboat);
  const loading = useSelector((state) => state.Global.loading);

  const [access, setAccess] = useState(
    curboat.accessories ? curboat.accessories : []
  );
  const [toastType, setToastType] = useState("success");
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const fetchBoatTypes = async () => {
      try {
        await dispatch(setLoading(true));
        let result = await dispatch(getAccessories());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessages(`${result.errors[key]}`);
              handleShowToast();
            }
          }
        }
        await dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching boat types:", error);
      }
    };
    const unsubscribe = navigation.addListener("focus", async () => {
      fetchBoatTypes();
    });
    return unsubscribe;
  }, [navigation]);

  const handleCheckboxChange = async (checked, id) => {
    if (checked) {
      setAccess((prevAccess) => [...prevAccess, id]);
    } else {
      setAccess((prevAccess) => prevAccess.filter((itemId) => itemId !== id));
    }
  };

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleSubmit = async () => {
    const result = await dispatch(submitAccessories(curboat._id, access));

    if (result?.errors) {
      setToastType("warning");
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          setErrorMessages(`${result.errors[key]}`);
          handleShowToast();
        }
      }
    }
    navigation.navigate("Allowed");
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title} className="mt-5">
              Accesorios disponibles
            </Text>
            <Text style={styles.des} className="mt-5">
              Selecciona los accesorios con que dispone tu embarcación{" "}
            </Text>
            {accessories.map((item, index) => {
              return (
                <View
                  className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl"
                  key={index}
                >
                  <View className="flex flex-row items-center">
                    <Image
                      source={{ uri: item.icon }}
                      width={20}
                      height={30}
                    ></Image>
                    <Text className="ml-4">{item.title}</Text>
                  </View>
                  <CheckBox
                    value={access.includes(item._id)}
                    onValueChange={(checked) =>
                      handleCheckboxChange(checked, item._id)
                    }
                  ></CheckBox>
                </View>
              );
            })}

            <View className="mt-5">
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
              >
                <Text style={styles.continue} className="text-center">
                  CONTINUAR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ToastMessage
            type={toastType}
            description={errorMessages}
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
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  des: {
    color: "#172b4d",
    fontSize: 13,
    fontFamily: "Lexend Deca",
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
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
});
export default Accessories;
