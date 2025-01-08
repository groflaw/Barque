import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { getAllowes } from "../../Actions/BasicBoat/basicboat";
import { submitAllowes } from "../../Actions/AddBoat/addboat";
import { setLoading } from "../../Store/Global";

import CheckBox from "../Basic/CheckBox";
import LoadingIndicator from "../Basic/LoadingIndicator";
import ToastMessage from "../Basic/ToastMessage/ToastMessage";

const Allowed = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  const allowes = useSelector((state) => state.BasicBoat.allowes);
  const curboat = useSelector((state) => state.Global.curboat);
  const loading = useSelector((state) => state.Global.loading);

  const [all, setAll] = useState(curboat.allowes ? curboat.allowes : []);
  const [toastType, setToastType] = useState("success");
  const [errormessage, setErrorMessage] = useState("");

  const handleCheckboxChange = async (checked, id) => {
    if (checked) {
      setAll((prevAccess) => [...prevAccess, id]);
    } else {
      setAll((prevAccess) => prevAccess.filter((itemId) => itemId !== id));
    }
  };

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleSubmit = async () => {
    const result = await dispatch(submitAllowes(curboat._id, all));
    if (result?.errors) {
      setToastType("warning");
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          setErrorMessage(`${result.errors[key]}`);
          handleShowToast();
        }
      }
    }
    navigation.navigate("Myboats");
  };

  useEffect(() => {
    const fetchBoatTypes = async () => {
      try {
        await dispatch(setLoading(true));
        let result = await dispatch(getAllowes());
        if (result?.errors) {
          setToastType("warning");
          for (let key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              setErrorMessage(`${result.errors[key]}`);
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

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title} className="mb-5">
              What is allowed on the boat?
            </Text>
            {allowes.map((item, index) => {
              return (
                <View className="flex flex-row items-center justify-between pl-2 pr-2 mt-3 bg-white rounded-xl">
                  <View className="flex flex-row items-center">
                    <Image
                      source={{ uri: item.icon }}
                      width={20}
                      height={30}
                    ></Image>
                    <Text className="ml-4">{item.title}</Text>
                  </View>
                  <CheckBox
                    value={all.includes(item._id)}
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
    paddingTop: 40,
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
});
export default Allowed;
