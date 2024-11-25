import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { gethostBoats } from "../../Actions/UserBoat/userboat";
import LoadingIndicator from "../Basic/LoadingIndicator";

import shipRoundImage from "../../../assets/Icons/shipround.png";
import TucacasImg from "../../../assets/Background/Destinos.png";
import starImage from "../../../assets/Icons/Iconstar.png";
import peopleImage from "../../../assets/Icons/Iconpeopleoutline.png";
import fullImage from "../../../assets/Icons/Iconopeninfull.png";
import eventImage from "../../../assets/Icons/Iconeventavailable.png";
import reviewImage from "../../../assets/Profile/user.png";

const Guest = () => {
  const dispatch = useDispatch();
  const curhost = useSelector((state) => state.Global.curhost);
  const mode = useSelector((state) => state.Global.mode);
  const loading = useSelector((state) => state.Global.loading);

  const [boats, setBoats] = useState([]);

  useEffect(() => {
    const fetchboats = async () => {
      let response = await dispatch(gethostBoats(curhost._id));
      setBoats(response);
    };
    fetchboats();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.card} className="mt-3">
              <View className="flex flex-row justify-center">
                <Image
                  source={
                    curhost.avatar ? { uri: curhost.avatar } : reviewImage
                  }
                  style={{ width: 150, height: 150 }}
                  className="rounded-full"
                ></Image>
              </View>
              {!mode && (
                <View className="flex flex-row items-center justify-center mt-2">
                  <Image source={shipRoundImage} />
                  <Text className="ml-1">Con Capitan</Text>
                </View>
              )}
              <View className="flex flex-row justify-center mt-2">
                <Text style={styles.name}>
                  {curhost.firstName + " " + curhost.lastName}
                </Text>
              </View>
              <Text className="mt-2" style={styles.des}>
                I'm the best captain out there, I have years of experience and I
                know all the beaches around.
              </Text>
              <Text className="mt-3" style={styles.property}>
                Review: {curhost.review}/5
              </Text>
              <Text className="mt-3" style={styles.property}>
                Locations: Caracas, Venezuela
              </Text>
              <Text className="mt-3" style={styles.property}>
                Trips made: {curhost.booking}
              </Text>
              <View className="flex flex-row justify-center">
                <TouchableOpacity style={styles.searchbtn} className="mt-3">
                  <Text style={styles.btnText}> Send Message </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.title} className="mt-5">
              {mode ? `Activate Booking` : curhost.firstName + "'s Boats"}
            </Text>
            {!mode &&
              boats.map((item, index) => {
                return (
                  <View style={styles.card} className="mt-3" key={index}>
                    <View className="flex flex-row justify-between">
                      <View>
                        <Image
                          source={
                            item.coverImage
                              ? { uri: item.coverImage }
                              : TucacasImg
                          }
                          style={{ width: 60, height: 60, borderRadius: 5 }}
                        ></Image>
                      </View>
                      <View className=" flex justify-around">
                        <Text style={styles.boatmodel}>{item.model}</Text>
                        <View className="flex flex-row">
                          <View
                            className="flex flex-row items-center"
                            style={styles.item}
                          >
                            <Image source={peopleImage}></Image>
                            <Text style={styles.itemText}>{item.capacity}</Text>
                          </View>
                          <View
                            className="flex flex-row items-center"
                            style={styles.item}
                          >
                            <Image source={fullImage}></Image>
                            <Text style={styles.itemText}>{item.size}</Text>
                          </View>
                          <View
                            className="flex flex-row items-center"
                            style={styles.item}
                          >
                            <Image source={eventImage}></Image>
                            <Text style={styles.itemText}>{item.year}</Text>
                          </View>
                        </View>
                        <Text style={styles.anchor}>{item.location1}</Text>
                      </View>
                      <View className="mt-2">
                        <View
                          className="flex flex-row items-center"
                          style={styles.review}
                        >
                          <Image source={starImage}></Image>
                          <Text style={styles.reviewText}>
                            {item.review} / 5
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            {mode && (
              <View style={styles.card} className="mt-3">
                <View className="flex flex-row">
                  <View>
                    <Image source={TucacasImg}></Image>
                  </View>
                  <View className="flex justify-center ml-3">
                    <Text style={styles.boatmodel}>
                      Luxury on the caribbean
                    </Text>
                    <Text style={styles.bookingdate} className="mt-3">
                      Date: 21/10/2023
                    </Text>
                  </View>
                </View>
              </View>
            )}
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
    marginLeft: 15,
    marginRight: 15,
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
    padding: 14,
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
  name: {
    color: "#030303",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  des: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: 300,
  },
  property: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
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
  searchbtn: {
    borderRadius: 6,
    backgroundColor: "#072d4c",
    padding: 10,
    width: "40%",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: 600,
    textAlign: "center",
  },
  title: {
    color: "#030303",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  boatmodel: {
    color: "#17233c",
    fontSize: 16,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
  bookingdate: {
    color: "#17233c",
    fontSize: 14,
    fontFamily: "Lexend Deca",
  },
});
export default Guest;
