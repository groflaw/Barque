import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import IconStarImage from "../../../assets/Icons/Iconstar.png";

import ReviewImage from "../../../assets/Icons/Review.png";
import { useEffect } from "react";

const ReviewCard = ({index, item}) => {
  return (
    <View className="flex flex-row items-center justify-between pt-1 pb-1 pl-3 pr-3 ml-3 mr-3 bg-white w-72 rounded-xl">
      <View className="flex flex-row items-center">
        <Image source={ReviewImage}></Image>
        <View className="ml-4">
          <View
            style={stylesCard.review}
            className="flex flex-row items-center w-20 mt-2 "
          >
            <Image source={IconStarImage}></Image>
            <Text style={stylesCard.mark}>{item.review}/ 5</Text>
          </View>
          <Text style={stylesCard.name}>{item.customer}</Text>
          <Text style={stylesCard.date}>{new Date(item.date).toLocaleDateString()}</Text>
        </View>
      </View>
      <Text>{index+1}/247</Text>
    </View>
  );
};
const Reviews = ({ review, booking, data }) => {
  return (
    <View style={styles.container}>
      <View className="flex flex-row justify-between">
        <Text style={styles.Title}>Review</Text>
        <View
          style={styles.review}
          className="flex flex-row items-center mt-2 w-40 justify-center"
        >
          <Image source={IconStarImage}></Image>
          <Text style={styles.mark}>{review} / 5</Text>
          <Text style={styles.count}>({booking} bookings)</Text>
        </View>
      </View>
      <ScrollView
        className="!space-x-4 mt-5"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <ReviewCard key={index} index = {index} item = {item}/>
        ))}
      </ScrollView>
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
    color: "#0a252f",
    fontSize: 20, 
    fontFamily: "Lexend Deca",
    fontWeight: "700", 
    lineHeight: 26,
  },
  review: {
    backgroundColor: "#072d4c",
    borderRadius: 9,
    borderWidth: 1, 
    borderColor: "#ffffff", 
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  mark: {
    color: "white",
    paddingLeft: 5,
  },
  count: {
    paddingLeft: 5,
    color: "#8e9697",
    fontSize: 12,
    fontFamily: "Roboto", // Ensure this font is loaded
    fontWeight: "700",
    lineHeight: 18,
  },
});

const stylesCard = StyleSheet.create({
  review: {
    backgroundColor: "#072d4c",
    borderRadius: 9, // No need for 'px'
    borderWidth: 1, // Specifies the width of the border
    borderColor: "#ffffff", // Color of the border
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  mark: {
    color: "white",
    paddingLeft: 5,
  },
  name: {
    color: "#0a252f",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "700", // React Native uses string for fontWeight like '400', '700' etc.
    lineHeight: 20,
  },
  date: {
    color: "#0a252f",
    fontSize: 12, // Remove 'px', use number directly
    fontFamily: "Lexend Deca",
    lineHeight: 20, // Remove 'px', use number directly
  },
});
export default Reviews;
