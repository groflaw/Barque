import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

import { addPlan, delPlan } from "../../Actions/AddBoat/addboat";

import Option from "../Basic/Option";
import LoadingIndicator from "../Basic/LoadingIndicator";

import schedule from "../../../assets/Icons/schedule.png";
import calendar from "../../../assets/Icons/calendar.png";

const AddPlans = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const curboat = useSelector((state) => state.Global.curboat);
  const loading = useSelector((state) => state.Global.loading);

  const [mode, setMode] = useState(null);
  const [startshow, setStartShow] = useState(false);
  const [curdate, setCurdate] = useState(null);
  const [curid, setCurId] = useState(null);
  const [cursort, setCursort] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});
  const [plans, setPlans] = useState(curboat.plans);
  const [cusplan, setCusplan] = useState(false);

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
      captain: 0,
    };
    setPlans((prevPlans) => [...prevPlans, newPlan]);
  };

  const onChangeStart = (event, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setStartShow(false);
      handleChange({
        target: { name: cursort, value: currentDate, _id: curid },
      });
      setMode(null);
      setCurdate(null);
      setCurId(null);
      setCursort(null);
    }
  };

  const showDatepicker = (sort, mode, itemId, date) => {
    setStartShow(true); // setshow datapicker
    setMode(mode); // date or time
    setCurId(itemId); // selected _id
    setCurdate(date); // selected date
    setCursort(sort); //start or end
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
      setErrorMessages({});
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
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title} className="mt-3">
              Add your plans
            </Text>
            <Text style={styles.des} className="mt-3">
              Add your travel plan. You will be able to add up to 5 different
              plan for your boat indicating price, schedule, if captain is
              included and the description of the destinations and what is
              included in the plan.
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
                            target: {
                              name: "price",
                              value: text,
                              _id: item._id,
                            },
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
                    <Text style={styles.error}>
                      {errorMessages.description}
                    </Text>
                  )}
                  <View className="flex items-center mb-2 ">
                    {!cusplan && (
                      <View className="flex flex-row justify-around mt-2 items-center  w-full">
                        <Text style = {styles.clockdes}>Duratoin:</Text>
                        <TouchableOpacity
                          onPress={() => {
                            showDatepicker(
                              "start",
                              "time",
                              item._id,
                              item.start
                            );
                          }}
                        >
                          <Text style={styles.clock}>
                            {new Date(item.start).toTimeString().slice(0, 5)}
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.clockdes}>to</Text>
                        <TouchableOpacity
                          onPress={() => {
                            showDatepicker("end", "time", item._id, item.end);
                          }}
                        >
                          <Text style={styles.clock}>
                            {new Date(item.end).toTimeString().slice(0, 5)}
                          </Text>
                        </TouchableOpacity>
                        <Image source={schedule}></Image>
                      </View>
                    )}

                    <View className="w-full flex flex-row">
                      <TouchableOpacity
                        onPress={() => setCusplan(!cusplan)}
                        className="mt-2"
                        style={{ width: "38%" }}
                      >
                        <Text
                          style={[styles.continue, { paddingVertical: 10 }]}
                          className="text-center"
                        >
                          {!cusplan ? "+ Custom Plan" : "Custom Plan"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {cusplan && (
                      <>
                        <View className="flex flex-row items-center justify-around mt-2" style={{width : '70%'}}>
                          <TouchableOpacity
                            onPress={() => {
                              showDatepicker(
                                "start",
                                "time",
                                item._id,
                                item.start
                              );
                            }}
                          >
                            <Text style={styles.clock}>
                              {new Date(item.start).toTimeString().slice(0, 5)}
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => {
                              showDatepicker(
                                "start",
                                "date",
                                item._id,
                                item.start
                              );
                            }}
                          >
                            <Text style={styles.clock}>
                              {new Date(item.start).toLocaleDateString()}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <View className="flex flex-row items-center justify-around w-full mt-2" style={{width : '70%'}}>
                          <TouchableOpacity
                            onPress={() => {
                              showDatepicker("end", "time", item._id, item.end);
                            }}
                          >
                            <Text style={styles.clock}>
                              {new Date(item.end).toTimeString().slice(0, 5)}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              showDatepicker("end", "date", item._id, item.end);
                            }}
                          >
                            <Text style={styles.clock}>
                              {new Date(item.end).toLocaleDateString()}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    )}

                    {errorMessages.start && (
                      <Text style={styles.error}>{errorMessages.start}</Text>
                    )}
                  </View>

                  <View className="flex flex-row items-center justify-between">
                    <Option
                      defaultValue={item.captain}
                      options={Captions}
                      placeholder="Does it include captain?"
                      onChange={handleChange}
                      name="captain"
                      _id={item._id}
                    ></Option>
                  </View>
                  {errorMessages.captain && (
                    <Text style={styles.error}>{errorMessages.captain}</Text>
                  )}
                  <View className="flex flex-row items-center justify-around w-full mt-3">
                    <TouchableOpacity
                      onPress={() => handleSubmit(item._id)}
                      className="w-32"
                    >
                      <Text
                        style={styles.addTemp}
                        className="w-full text-center"
                      >
                        SAVE
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDelet(item._id)}
                      className="w-32"
                    >
                      <Text
                        style={[styles.addTemp,{backgroundColor : '#ff3b30'}]}
                        className="w-full text-center"
                      >
                        DELETE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
            {startshow && (
              <DateTimePicker
                testID="dateTimePicker"
                value={new Date(curdate)}
                mode={mode}
                is24Hour={true}
                onChange={(event, selectedDate) =>
                  onChangeStart(event, selectedDate)
                }
              />
            )}
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
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  des: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Lexend Deca",
  },
  addTemp: {
    borderRadius: 6,
    backgroundColor: "#2a8500",
    padding: 10,
    color: "#ffffff",
    fontSize: 14,
    fontWeight : 700,
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
  head: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
  },
  price: {
    backgroundColor: "#fefffe",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#bec0e3",
    padding: 5,
  },
  priceText: {
    color: "#0751c1",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
  },
  textarea: {
    height: 100,
    borderColor: "#bec0e3",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fefffe",
    padding: 10,
    color: "#000",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
  },
  clock: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: "#505050",
    borderRadius: 8,
    backgroundColor: "#ffffff",
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
  clockdes : {
    color: '#17233c',
    fontSize: 15,
    fontFamily: 'Lexend Deca',
    fontWeight: 700,
  }
});
export default AddPlans;
