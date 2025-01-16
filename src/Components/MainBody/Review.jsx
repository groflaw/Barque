import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import destination from "../../../assets/Background/Destinos(2).png";
import { setCurboat, setBooking } from "../../Store/Global";

const Review = ({ data }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const goReview = async (item) => {
    await dispatch(setCurboat(item.boatId));
    await dispatch(setBooking(item));
    navigation.navigate("LeaveReview");
  };
  return (
    <View style={styles.review}>
      <Text style={styles.reviewtitle}>Pending Review</Text>
      {data?.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            goReview(item);
          }}
          key={index}
        >
          <View style={styles.card} className="flex flex-col mt-2">
            <View className="flex flex-row gap-3 items-center">
              <Image
                source={
                  item.boatId.boatImage.cover
                    ? { uri: item.boatId.boatImage.cover }
                    : destination
                }
                style={{ width: 60, height: 60, borderRadius: 8 }}
              ></Image>
              <View className="flex flex-col gap-2">
                <Text style={styles.model}>{item.boatId.model}</Text>
                <Text style={styles.date}>
                  Date : {new Date(item.date).toLocaleDateString()}
                </Text>
              </View>
            </View>
            <Text style={styles.header} className="mt-2">
              How was the experience?
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  review: {
    paddingTop: "3%",
    paddingLeft: "4%",
    paddingRight: "4%",
  },
  reviewtitle: {
    color: "#102a5e",
    fontSize: 17,
    fontFamily: "Lexend Deca", // Ensure the font is loaded
    fontWeight: "700",
    lineHeight: 26,
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
  model: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 24,
  },
  date: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    lineHeight: 20,
  },
  header: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    lineHeight: 21,
  },
});

export default Review;
