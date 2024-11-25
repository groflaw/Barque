import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Radio from "../Basic/Radio";
import LoadingIndicator from "../Basic/LoadingIndicator";

import { submitCancellation } from "../../Actions/AddBoat/addboat";

const Cancellation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const curboat = useSelector((state) => state.Global.curboat);
  const loading = useSelector((state) => state.Global.loading);

  const [cancellation, setCancellation] = useState(
    curboat.cancellation ? curboat.cancellation : null
  );
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = async () => {
    navigation.navigate("Accessories");
  };
  const handleChange = async (value) => {
    setCancellation(value);
    const result = await dispatch(submitCancellation(curboat._id, value));
    if (result.errors) {
      setErrorMessages(result.errors);
    } else {
      setErrorMessages({});
    }
  };
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <>
              <Text style={styles.title} className="mt-5 ">
                Elige tu política de cancelación{" "}
              </Text>
              <View
                style={styles.card}
                className="flex flex-row items-center mt-4"
              >
                <View className="flex items-center" style={{ width: "30%" }}>
                  <Radio
                    selected={cancellation === 1}
                    onPress={() => handleChange(1)}
                  ></Radio>
                  <Text style={[styles.item, { backgroundColor: "#2a8500" }]}>
                    FLEXIBLE
                  </Text>
                </View>
                <View style={{ width: "70%" }}>
                  <Text style={styles.itemText} className="ml-2 ">
                    Cancelaciones de reservas gratis en todo momento con
                    devolución del dinero.
                  </Text>
                </View>
              </View>
              <View
                style={styles.card}
                className="flex flex-row items-center justify-center mt-4"
              >
                <View className="flex items-center" style={{ width: "30%" }}>
                  <Radio
                    selected={cancellation === 2}
                    onPress={() => handleChange(2)}
                  ></Radio>
                  <Text style={[styles.item, { backgroundColor: "#f4bf64" }]}>
                    MODERADA
                  </Text>
                </View>
                <View style={{ width: "70%" }}>
                  <Text style={styles.itemText} className="ml-2 ">
                    Cancelaciones de reservas gratis antes de las 24 horas del
                    día que inicia el viaje.
                  </Text>
                  <Text style={styles.itemText} className="ml-2 ">
                    Cancelaciones el mismo día de la reserva tendrá un cargo del
                    50% del costo de un día de reserva.
                  </Text>
                </View>
              </View>
              <View
                style={styles.card}
                className="flex flex-row items-center justify-center mt-4"
              >
                <View className="flex items-center " style={{ width: "30%" }}>
                  <Radio
                    selected={cancellation === 3}
                    onPress={() => handleChange(3)}
                  ></Radio>
                  <Text style={[styles.item, { backgroundColor: "#ff3b30" }]}>
                    ESTRICTA
                  </Text>
                </View>
                <View style={{ width: "70%" }}>
                  <Text style={styles.itemText} className=" ml-2 ">
                    Cancelaciones de reserva gratis antes de las 48 horas del
                    día que inicia el viaje.
                  </Text>
                  <Text style={styles.itemText} className="ml-2 ">
                    Cancelaciones dentro de las 48 horas previas de la reserva
                    tendrá un cargo del 50% del costo de un día de reserva.
                  </Text>
                </View>
              </View>
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
                {errorMessages.general && (
                  <Text style={styles.error} className="text-center">
                    {errorMessages.general}
                  </Text>
                )}
                {errorMessages.cancellation && (
                  <Text style={styles.error} className="text-center">
                    {errorMessages.cancellation}
                  </Text>
                )}
              </View>
            </>
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
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
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
    padding: 10,
  },
  item: {
    borderRadius: 12,

    paddingVertical: 4,
    paddingHorizontal: 15,
    color: "#ffffff",
    fontSize: 10,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    textAlign: "center",
  },
  itemText: {
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

export default Cancellation;
