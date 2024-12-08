import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const BoatCard = ({ cover, boatContent,toBoat,boatId,hostId }) => {
  return (
    <TouchableOpacity className="pt-5 w-32 rounded-2xl" onPress={()=>{
      toBoat(boatId,hostId);
    }}>
      <Image className="mx-auto object-fit" source={{ uri: cover}} style={{width : 90, height : 90, borderRadius : 10 }}/>
      <Text
        style={styles.boatContent}
        className="pt-1 text-sm font-semibold text-center"
      >
        {boatContent}
      </Text>
    </TouchableOpacity>
  );
};

const Newboat = ({ data, toBoat }) => {
  return (
    <View style={styles.newboat}>
      <Text style={styles.newboatTitle}>New boats</Text>
      <ScrollView
        className="!space-x-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((boat, i) => (
          <BoatCard
            boatContent={boat.model}
            cover={boat.boatImage.cover}
            key={i}
            toBoat = {toBoat}
            hostId = {boat.user}
            boatId = {boat._id}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  newboat: {
    paddingTop: "3%",
  },
  newboatTitle: {
    paddingLeft: "4%",
    color: "#102a5e",
    fontSize: 17,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 26,
  },
  boatContent: {
    color: "#102a5e",
    fontSize: 11,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 16,
  },
});
export default Newboat;
