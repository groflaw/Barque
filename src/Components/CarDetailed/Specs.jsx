import { View, Text, StyleSheet, Image } from "react-native";
import fullTick from "../../../assets/Icons/fulltick.png";
import { useEffect,useState } from "react";
import { useSelector , useDispatch} from "react-redux";

import { getAllBoatBrands, getAllBoatTypes } from "../../Actions/BasicBoat/basicboat";

const Specs = ({year,feets, brand, model, capacity,type}) => {

  const dispatch = useDispatch();

  const boatTypes = useSelector((state) => state.BasicBoat.boattypes);
  const boatBrands = useSelector((state) => state.BasicBoat.boatbrands);

  useEffect(()=>{
    const fectbasicdata = async() =>{
        let result = await dispatch(getAllBoatTypes());
        result = await dispatch(getAllBoatBrands());
    }
    fectbasicdata()
  },[])
  return (
    <View style={styles.container}>
      <View className="flex flex-row justify-between mt-5">
        <Text style={styles.Title}>Specifications</Text>
        <Image source={fullTick}></Image>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Year</Text>
        <Text style={styles.value}>{year}</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Feets</Text>
        <Text style={styles.value}>{feets}'</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Brand</Text>
        <Text style={styles.value}>{boatBrands.find((item) => item._id === brand)?.name}</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Model</Text>
        <Text style={styles.value}>{model}</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Capacity</Text>
        <Text style={styles.value}>Hasta {capacity} pers</Text>
      </View>
      <View className="flex flex-row justify-between mt-4">
        <Text style={styles.key}>Type</Text>
        <Text style={styles.value}> {boatTypes.find((item) => item._id === type)?.name}</Text>
      </View>
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
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca", 
    fontWeight: "700", 
    lineHeight: 26,
  },
  key: {
    color: "#101c2c",
    fontSize: 15,
    fontFamily: "Lexend Deca", 
    fontWeight: "300", 
    lineHeight: 22,
  },
  value: {
    color: "#101c2c",
    fontSize: 15, 
    fontFamily: "Lexend Deca",
    fontWeight: 900, 
    lineHeight: 20, 
  },
});
export default Specs;
