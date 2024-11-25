import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import awardImage from "../../../assets/Icons/Iconaward.png";
import starImage from "../../../assets/Icons/Iconstar.png";
import reviewImage from "../../../assets/Profile/user.png";
import { useEffect } from "react";
const Host = ({ name, review, resrate ,avatar}) => {
  const navigation = useNavigation();


  const goGuest = () =>{
    navigation.navigate("GuestProfile");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Host</Text>
      <View style={styles.content} className="mt-4">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text style={styles.name}>{name}</Text>
            <View className="flex flex-row items-center mt-1">
              {review > 4.8 && (
                <View
                  className="flex flex-row items-center rounded-lg"
                  style={styles.award}
                >
                  <Image source={awardImage}></Image>
                  <Text style={styles.awardText}>ANFITRIÓN TOP</Text>
                </View>
              )}

              <View
                className="flex flex-row items-center rounded-lg"
                style={styles.review}
              >
                <Image source={starImage}></Image>
                <Text style={styles.reviewText}>{review}/5</Text>
              </View>
            </View>
          </View>
          <Image source={ avatar ? { uri: avatar } : reviewImage } style= {{width : 50, height :50}}></Image>
        </View>
        <TouchableOpacity className="mt-5">
          <View className="flex items-center" style={styles.messageButtpn}>
            <Text style={styles.messageText}>SEND MESSAGE</Text>
          </View>
        </TouchableOpacity>
        <View className="flex flex-row justify-between mt-6">
          <Text style={styles.key}>Average response time</Text>
          <Text style={styles.value}> 24 hours</Text>
        </View>
        <View className="flex flex-row justify-between mt-6">
          <Text style={styles.key}> Response rate </Text>
          <Text style={styles.rateValue}>{resrate}%</Text>
        </View>
        <View className="flex items-center">
          <TouchableOpacity className="items-center mt-7" onPress={()=>{goGuest()}}>
            <Text style={styles.toProfile}>View Profile</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    color: "#17233c",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700", 
    lineHeight: 26, 
  },
  content: {
    backgroundColor: "#fefffe",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c0c0c0", 
    padding: 15,
  },
  name: {
    color: "#102a5e", 
    fontSize: 18,
    fontFamily: "Lexend Deca", 
    fontWeight: "700", 
    lineHeight: 28,
  },
  award: {
    paddingTop: 2,
    marginRight: 10,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#f4bf64",
  },
  awardText: {
    maringLeft: 20,
    color: "#154353",
    fontSize: 12, 
    fontFamily: "Lato",
    fontWeight: "800",
    lineHeight: 14, 
  },
  review: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#072d4c",
  },
  reviewText: {
    color: "#ffffff", 
    fontSize: 12, 
    fontFamily: "Lexend Deca", 
    fontWeight: "500", 
    lineHeight: 14,
  },
  messageButtpn: {
    padding: 10,
    borderWidth: 1, 
    borderColor: "#0751c1", 
    borderRadius: 11,
  },
  messageText: {
    color: "#0751c1",
    fontSize: 18, 
    fontFamily: "Lexend Deca",
    fontWeight: "600", 
    lineHeight: 23,
  },
  key: {
    color: "#17233c", 
    fontSize: 14, 
    fontFamily: "Lato", 
    fontWeight: "700", 
    lineHeight: 20, 
  },
  value: {
    color: "#17233c", 
    fontSize: 14, 
    fontFamily: "Lato",
    fontWeight: "700", 
    lineHeight: 19,
  },
  rateValue: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    backgroundColor: "#2a8500",
    color: "#ffffff", 
    fontSize: 12, 
    fontFamily: "Lato", 
    fontWeight: "700", 
    lineHeight: 20,
    textAlign: "center",
  },
  toProfile: {
    color: "#0751c1", 
    fontSize: 16, 
    fontFamily: "Lato", 
    lineHeight: 29, 
    textAlign: "center", 
  },
});
export default Host;
