import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BoatCard from "./BoatCard";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { getboatInfo } from "../../Actions/AddBoat/addboat";
import { getUser } from "../../Actions/Auth/auth.acitons";
import { setLoading } from "../../Store/Global";
import { setCurhost } from "../../Store/Global";

const Boats = ({data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [boats, setBoats] = useState([])

  const handleboatpress = async (id, hostId) => {
    let result = await dispatch(getboatInfo(id));
    result = await dispatch(getUser(hostId));
    await dispatch(setCurhost(result));
    await navigation.navigate("CarDetails");
  };
  
  useEffect(()=>{
    setBoats(data)
  },[data])
  
  return (
    <View className="px-6 pb-10 mt-1">
      {boats.map((boat, index) => (
        <TouchableOpacity
          onPress={() => handleboatpress(boat._id, boat.user)}
          key={index}
        >
          <BoatCard
            image={boat.boatImage}
            model={boat.model}
            capacity={boat.capacity}
            size={boat.size}
            year={boat.year}
            review={boat.review}
            location1={boat.location1}
            price={boat.price}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Boats;
