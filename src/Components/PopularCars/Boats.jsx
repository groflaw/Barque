import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BoatCard from "./BoatCard";
import { useNavigation } from "@react-navigation/native";

import { client, handleGetImageUrl } from "../../_Instance/instance";

const Boats = () => {
  const navigation = useNavigation();

  // const [populars, setPopulars] = useState([]);

  // const getALLCars = async () => {
  //   try {
  //     const res = await client.fetch('*[_type == "cars"]');
  //     setPopulars(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getALLCars();
  // }, []);
  const boats = [
    {
      image: "",
      name: "Luxury Yacht",
      price: 500,
      users: 10,
      full: 60,
      year: 2020,
      review: 4.8,
      price: 500,
      anchor: "Casa Bote A, Lecheria",
    },
    {
      image: "",
      name: "Luxury Yacht",
      price: 500,
      users: 10,
      full: 60,
      year: 2020,
      review: 4.8,
      price: 500,
      anchor: "Casa Bote A, Lecheria",
    },
    {
      image: "",
      name: "Luxury Yacht",
      price: 500,
      users: 10,
      full: 60,
      year: 2020,
      review: 4.8,
      price: 500,
      anchor: "Casa Bote A, Lecheria",
    },
  ];

  const handleboatpress = () => {
    navigation.navigate("CarDetails");
  };
  return (
    <View className="px-6 pb-10 mt-1">
      {boats.map((boat, i) => (
        <TouchableOpacity onPress={handleboatpress}>
          <BoatCard
            image={boat.boatImage}
            name={boat.name}
            users={boat.users}
            full={boat.full}
            year={boat.year}
            review={boat.review}
            anchor={boat.anchor}
            price={boat.price}
            key={i}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Boats;
