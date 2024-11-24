import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import boatImage from "../../../assets/Background/Image.png";
import starImage from "../../../assets/Icons/Iconstar.png";
import peopleImage from "../../../assets/Icons/Iconpeopleoutline.png";
import fullImage from "../../../assets/Icons/Iconopeninfull.png";
import eventImage from "../../../assets/Icons/Iconeventavailable.png";
import anchorImage from "../../../assets/Icons/Iconanchor.png";

const BoatCard = ({
  coverImage,
  price,
  model,
  capacity,
  size,
  year,
  review,
  location1,
}) => {
  return (
    <View className="flex w-full p-3 mt-4 bg-white rounded-lg">
      <View className="flex items-center ">
        <Image source={
                coverImage
                  ? { uri: coverImage }
                  : boatImage
              } className="w-full rounded-lg"></Image>
        <View style={styles.price}>
          <Text style={styles.priceText}>${price}/day</Text>
        </View>
      </View>
      <Text style={styles.name}>{model}</Text>
      <View className="flex flex-row justify-between mt-1">
        <View className="flex flex-row">
          <View className="flex flex-row items-center" style={styles.item}>
            <Image source={peopleImage}></Image>
            <Text style={styles.itemText}>{capacity}</Text>
          </View>
          <View className="flex flex-row items-center" style={styles.item}>
            <Image source={fullImage}></Image>
            <Text style={styles.itemText}>{size}</Text>
          </View>
          <View className="flex flex-row items-center" style={styles.item}>
            <Image source={eventImage}></Image>
            <Text style={styles.itemText}>{year}</Text>
          </View>
        </View>
        <View className="flex flex-row items-center" style={styles.review}>
          <Image source={starImage}></Image>
          <Text style={styles.reviewText}>{review} / 5</Text>
        </View>
      </View>
      <View className="flex flex-row items-center mt-2">
        <Image source={anchorImage}></Image>
        <Text style={styles.anchor}>{location1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    position: "absolute",
    bottom: 5,
    right: 10,
  },
  priceText: {
    color: "#030303",
    fontSize: 12,
    fontFamily: "Lexend Deca",
    fontWeight: 500,
    lineHeight: 16,
    backgroundColor: "white",
    padding: 3,
    borderRadius: 8,
  },
  name: {
    color: "#030303",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 24,
    paddingTop: 5,
  },
  review: {
    marginRight: 4,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "#072d4c",
    borderRadius: 8.16,
    border: "0.5px solid #fffcfc",
    boxSizing: "border-box",
  },
  reviewText: {
    paddingLeft: 4,
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "Lexend Deca",
    fontWeight: 500,
    lineHeight: 16,
  },
  item: {
    marginRight: 4,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "#f0f1ff",
    borderRadius: 8.16,
    border: "0.5px solid #fffcfc",
    boxSizing: "border-box",
  },
  itemText: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 14,
    paddingLeft: 4,
  },
  anchor: {
    color: "#545454",
    fontSize: 11,
    fontFamily: "Lexend Deca",
    fontWeight: 400,
    lineHeight: 14,
    marginLeft: 4,
  },
});
export default BoatCard;
