import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  TextInput,
  Slider,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllBoatTypes } from "../../Actions/BasicBoat/basicboat";

import { filterBoats } from "../../Actions/UserBoat/userboat";

import Option from "../Basic/Option";
import Number from "../Basic/Number";
import CheckBox from "../Basic/CheckBox";

export default function Popup({
  visible,
  transparent,
  dismiss,
  margin,
  setBoats,
}) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(60);
  const [filter, setFilter] = useState({
    size: 0,
    boattype: 0,
    capacity: 0,
    price: 10,
    any: true,
  });

  const boatTypes = useSelector((state) => state.BasicBoat.boattypes);
  let curuser = useSelector((state) => state.Slice.user);

  const onValueChange = (value) => {
    setFilter((prevData) => ({
      ...prevData,
      price: Math.round(value),
    }));
  };

  useEffect(() => {
    const fectboattypes = async () => {
      let result = await dispatch(getAllBoatTypes());
    };
    fectboattypes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleAnyCheckbox = (newValue) => {
    setFilter((prevData) => ({
      ...prevData,
      any: newValue,
    }));
  };

  const search = async () => {   
    let result = await dispatch(filterBoats(filter));
    setBoats(result);
    dismiss();
    setFilter({
      size: 0,
      boattype: 0,
      capacity: 0,
      price: 100,
      any : true
    });
  };

  return (
    <Modal visible={visible} transparent={transparent} onRequestClose={dismiss}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <View
        style={{
          ...styles.modalContent,
          margin: margin,
        }}
      >
        <View style={styles.popupContent}>
          <View style={styles.popupTitleBox} className="flex bg-white w-80 ">
            <Text style={styles.popupTitle}>Guanta, Anzoategui</Text>
          </View>
          <View className="flex mt-3 w-72">
            <Text style={styles.sizeTitle}>Size (feet)</Text>
            <Number
              value={filter.size}
              onChange={handleChange}
              name="size"
            ></Number>
          </View>
          <View className="flex mt-3 w-72 ">
            <Text style={styles.sizeTitle} className="mb-2">
              Type of Vessel
            </Text>
            <Option
              width={"100%"}
              options={boatTypes}
              onChange={handleChange}
              name="boattype"
              placeholder="Select Type"
            ></Option>
          </View>
          <View className="flex mt-3 w-72">
            <Text style={styles.sizeTitle}>Capacity (Number of people)</Text>
            <Number
              value={filter.capacity}
              onChange={handleChange}
              name="capacity"
            ></Number>
          </View>
          <View className="flex mt-3 w-72">
            <View className="flex flex-row justify-between">
              <Text style={styles.sizeTitle}>Price Range</Text>
              <Text style={styles.sizeTitle}>{filter.price } - 1000 $</Text>
            </View>

            <View style={styles.SliderContainer} className="mt-2">
              <View style={{ ...styles.slider, width: `${filter.price /10}%` }} />
              <Slider
                minimumValue={1}
                maximumValue={1000}
                value={filter.price}
                onValueChange={onValueChange}
                style={styles.SliderInput}
                minimumTrackTintColor="rgba(23, 35, 60, 1)" // Line color
                thumbTintColor="rgba(23, 35, 60, 1)"
                maximumTrackTintColor="lightgray"
              />
            </View>
          </View>
          <View className="flex flex-row items-center">
            <CheckBox
              value={filter.any}
              onValueChange={toggleAnyCheckbox}
            ></CheckBox>
            <Text>Any</Text>
          </View>
          <View className="flex items-center mt-3 w-72 ">
            <TouchableOpacity onPress={() => search()}>
              <Text className="p-3 text-center text-white rounded-lg w-28 bg-slate-800">
                Aplicar Filtros
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    top: "10%",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  popupContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
  },
  popupTitleBox: {
    padding: 15,
    shadowColor: "#030303",
    shadowOffset: {
      width: 2,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  popupTitle: {
    color: "#030303",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 28,
  },
  sizeTitle: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },

  SliderContainer: {
    marginTop: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: [{ translateY: -2 }],
    height: 4,
    backgroundColor: "rgba(23, 35, 60, 1)",
    borderRadius: 10,
    zIndex: 10,
  },
  SliderInput: {
    width: "100%",
    opacity: 1,
    color: "black",
  },
});
