import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

import { addPlan, delPlan, getboatInfo } from "../../Actions/AddBoat/addboat";

const AddPlans = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.Global.loading);
  const curboat = useSelector((state) => state.Global.curboat);

  const [mode, setMode] = useState("date");
  const [startshow, setStartShow] = useState(false);
  const [endshow, setEndShow] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [plans, setPlans] = useState(curboat.plans);

  const nextStep = () => {
    navigation.navigate("AddDocImage");
  };

  const addNewTemp = () => {
    const newPlan = {
      _id:
        plans.length > 0 ? Math.max(...plans.map((plan) => plan._id)) + 1 : 0,
      description: "",
      price: 0,
      start: new Date(),
      end: new Date(),
      captain: 1,
    };
    setPlans((prevPlans) => [...prevPlans, newPlan]);
  };

  const onChangeStart = (event, selectedDate, itemId) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setStartShow(false); // Assuming this is a boolean state to show/hide date picker
      handleChange({
        target: { name: "start", value: currentDate, _id: itemId },
      });
    }
  };
  const onChangeEnd = (event, selectedDate, itemId) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setEndShow(false); // Assuming this is a boolean state to show/hide date picker
      handleChange({
        target: { name: "end", value: currentDate, _id: itemId },
      });
    }
  };
  const showMode = (currentMode, sort) => {
    if (sort == "start") setStartShow(true);
    else setEndShow(true);
    setMode(currentMode);
  };
  const showDatepicker = (sort) => {
    showMode("date", sort);
  };
  const showTimepicker = (sort) => {
    showMode("time", sort);
  };

  const handleChange = (e) => {
    const { name, value, _id } = e.target;
    const newValue = name === "price" ? parseFloat(value) || 0 : value;

    setPlans((prevPlans) =>
      prevPlans.map((p) =>
        p._id === _id ? { ...p, ...{ [name]: newValue } } : p
      )
    );
  };

  const handleSubmit = async (id) => {
    const plan = plans.find((item) => item._id === id);
    const result = await dispatch(addPlan(curboat._id, plan));
    if (result.errors) {
      setErrorMessages(result.errors);
    } else {
      setPlans(result.plans);
    }
  };
  const handleDelet = async (id) => {
    const result = await dispatch(delPlan(curboat._id, id));
    if (result.errors) {
      setErrorMessages(result.errors);
    } else {
      setPlans(result.plans);
    }
  };

  const Captions = [
    {
      _id: 1,
      name: "Yes",
    },
    {
      _id: 2,
      name: "No",
    },
  ];

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Add your plan</Text>
          <Text style={styles.des} className="mt-3 w-96">
            Add your travel plan. You will be able to add up to 5 different plan
            for your boat indicating price, schedule, if captain is included and
            the description of the destinations and what is included in the
            plan.
          </Text>
          <View className="flex justify-start">
            <TouchableOpacity onPress={addNewTemp} className="w-24">
              <Text style={styles.addTemp} className="mt-3 text-center ">
                + Add
              </Text>
            </TouchableOpacity>
          </View>
          {plans.map((item, index) => {
            return (
              <View style={styles.card} key={item._id} className="mt-4">
                <View className="flex flex-row items-center justify-between">
                  <Text style={styles.head}>Plan{index + 1}</Text>
                  <View
                    style={styles.price}
                    className="flex flex-row items-center"
                  >
                    <Text style={styles.priceText} className="mr-1">
                      $
                    </Text>
                    <TextInput
                      style={styles.priceText}
                      value={item.price + ""}
                      keyboardType="numeric"
                      onChangeText={(text) =>
                        handleChange({
                          target: { name: "price", value: text, _id: item._id },
                        })
                      }
                    ></TextInput>
                  </View>
                </View>
                {errorMessages.price && (
                  <Text style={styles.error}>{errorMessages.price}</Text>
                )}
                <TextInput
                  onChangeText={(text) =>
                    handleChange({
                      target: {
                        name: "description",
                        value: text,
                        _id: item._id,
                      },
                    })
                  }
                  className="mt-4"
                  style={styles.textarea}
                  multiline
                  numberOfLines={4}
                  placeholder="Describes the destinations of this plan and all that is included in it..."
                  placeholderTextColor="#aaaaaa"
                  value={item.description}
                />
                {errorMessages.description && (
                  <Text style={styles.error}>{errorMessages.description}</Text>
                )}
                <View className="flex items-center mb-5 ">
                  <View className="flex flex-row items-center justify-around">
                    <TouchableOpacity
                      onPress={() => {
                        showDatepicker("start");
                      }}
                    >
                      <Text className="mt-2">
                        {new Date(item.start).toLocaleDateString()}
                      </Text>
                    </TouchableOpacity>
                    <View style={{ width: 5 }}></View>
                    <TouchableOpacity
                      onPress={() => {
                        showTimepicker("start");
                      }}
                    >
                      <Text className="mt-2">
                        {new Date(item.start).toLocaleTimeString()}
                      </Text>
                    </TouchableOpacity>
                    <View style={{ width: 15 }}></View>
                    <TouchableOpacity
                      onPress={() => {
                        showDatepicker("end");
                      }}
                    >
                      <Text className="mt-2">
                        {new Date(item.end).toLocaleDateString()}
                      </Text>
                    </TouchableOpacity>
                    <View style={{ width: 5 }}></View>
                    <TouchableOpacity
                      onPress={() => {
                        showTimepicker("end");
                      }}
                    >
                      <Text className="mt-2">
                        {new Date(item.end).toLocaleTimeString()}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {errorMessages.start && (
                    <Text style={styles.error}>{errorMessages.start}</Text>
                  )}
                  {startshow && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date(item.start)}
                      mode={mode}
                      is24Hour={true}
                      onChange={(event, selectedDate) =>
                        onChangeStart(event, selectedDate, item._id)
                      }
                    />
                  )}
                  <View className="flex flex-row"></View>
                  {endshow && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date(item.end)}
                      mode={mode}
                      is24Hour={true}
                      onChange={(event, selectedDate) =>
                        onChangeEnd(event, selectedDate, item._id)
                      }
                    />
                  )}
                </View>
                {/* <View className="flex flex-row items-center justify-between">
                  <Option
                    defaultValue={item.captain}
                    options={Captions}
                    placeholder="Does it include captain?"
                    onChange={handleChange}
                    name="captain"
                    _id={item._id}
                  ></Option>
                </View> */}
                {/* {errorMessages.captain && (
                  <Text style={styles.error}>{errorMessages.captain}</Text>
                )} */}
                <View className="flex flex-row items-center justify-around w-full mt-3">
                  <TouchableOpacity
                    onPress={() => handleSubmit(item._id)}
                    className="w-40"
                  >
                    <Text style={styles.addTemp} className="w-full text-center">
                      SAVE
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDelet(item._id)}
                    className="w-40"
                  >
                    <Text style={styles.addTemp} className="w-full text-center">
                      DELETE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

          <View className="mt-5">
            <TouchableOpacity onPress={nextStep}>
              <Text style={styles.continue} className="text-center">
                CONTINUAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    color: "#000000",
    fontSize: 12,
    fontFamily: "Lexend Deca",
  },
  addTemp: {
    borderRadius: 6,
    backgroundColor: "#2a8500",
    padding: 10,
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
  },
  savePlan: {
    borderRadius: 6,
    backgroundColor: "#2a8500",
    padding: 5,
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
  },
  card: {
    backgroundColor: "#ffffff", // Background color
    borderRadius: 8, // Border radius
    borderWidth: 1, // Border width
    borderColor: "#efefef", // Border color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 12, // Shadow radius
    elevation: 5, // Android shadow equivalent
    padding: 16, // Padding inside the card (adjust as needed)
  },
  head: {
    color: "#17233c", // Text color
    fontSize: 16, // Font size as a number, no 'px'
    fontFamily: "Lexend Deca", // Font family
    fontWeight: "500", // Font weight
  },
  price: {
    backgroundColor: "#fefffe", // Background color
    borderRadius: 10, // Border radius as a number
    borderWidth: 1, // Border width
    borderColor: "#bec0e3", // Border color
    padding: 5, // Optional: Add padding for better layout (adjust as needed)
  },
  priceText: {
    color: "#0751c1", // Text color
    fontSize: 14, // Font size as a number, no 'px'
    fontFamily: "Lexend Deca", // Font family
    fontWeight: "500", // Font weight
  },
  textarea: {
    height: 100, // Adjust height as needed
    borderColor: "#bec0e3", // Border color
    borderWidth: 1, // Border width
    borderRadius: 10, // Rounded corners
    backgroundColor: "#fefffe", // Background color
    padding: 10, // Inner padding
    color: "#000", // Text color
    fontSize: 14, // Font size
    fontFamily: "Lexend Deca", // Font family
    fontWeight: "500", // Font weight
  },
  continue: {
    borderRadius: 6, // Border radius as a number
    backgroundColor: "#17233c", // Background color
    padding: 20, // Add some padding for better touch area
    color: "#ffffff", // Text color
    fontSize: 13, // Font size as a number
    fontFamily: "Mulish", // Font family
    fontWeight: "900", // Font weight
  },
  error: {
    color: "red", // Red color for the error message
    fontSize: 12, // Small font size
    marginTop: 2, // Space between the input and the error message
  },
});
export default AddPlans;
