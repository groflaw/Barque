import { View, StyleSheet, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllowes } from "../../Actions/BasicBoat/basicboat";

import tickImage from "../../../assets/Icons/tick.png";

const Details = ({ data }) => {
  const dispatch = useDispatch();

  const allowes = useSelector((state) => state.BasicBoat.allowes);

  const [allowed, setAllowed] = useState([]);
  const [unallowed, setUnallowed] = useState([]);

  useEffect(() => {
    const fetchAllowes = async () => {
      let result = await dispatch(getAllowes());
    };
    fetchAllowes();
  }, []);

  useEffect(() => {
    if (allowes.length > 0) {
      const allowedItems = allowes.filter((item) => data.includes(item._id));
      const unallowedItems = allowes.filter((item) => !data.includes(item._id));

      setAllowed(allowedItems);
      setUnallowed(unallowedItems);
    }
  }, [allowes, data]);

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Details</Text>
      <Text style={styles.header} className="mt-3">
        Allowed on the boat:
      </Text>
      {allowed.map((item, index) => {
        return (
          <View className="flex flex-row justify-between mt-3" key={index}>
            <Text> {item.title} </Text>
            <Image source={tickImage}></Image>
          </View>
        );
      })}
      <Text style={styles.header} className="mt-3">
        Not allowed on the boat:
      </Text>
      {unallowed.map((item, index) => {
        return (
          <View className="flex flex-row justify-between mt-5" key={index}>
            <Text> {item.title} </Text>
            <Image source={tickImage}></Image>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  Title: {
    color: "#102a5e",
    fontSize: 20,
    fontFamily: "Lexend Deca", // Make sure this font is available in your project
    fontWeight: "700",
    lineHeight: 31,
  },
  header: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 23,
  },
});
export default Details;
