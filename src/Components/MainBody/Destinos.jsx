import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import TucacasImg from "../../../assets/Background/Destinos.png";
import LecheriaImg from "../../../assets/Background/Destinos(2).png";
import MargaritaImg from "../../../assets/Background/Destinos(3).png";
import HiguerImg from "../../../assets/Background/Destinos.png";

const DesCard = ({ deslogo, descontent, setLocation }) => {
  return (
    <TouchableOpacity
      className="pt-5 w-28 rounded-2xl flex justify-center items-center"
      onPress={() => {
        setLocation(descontent);
      }}
    >
      <Image
        className="mx-auto object-fit"
        source={deslogo}
        style={{ width: 90, height: 90, borderRadius: 10 }}
      />
      <Text
        style={styles.descontent}
        className="pt-1 text-sm font-semibold text-center"
      >
        {descontent.split(",")[0]}
      </Text>
    </TouchableOpacity>
  );
};

const Destinos = ({ data, setLocation }) => {
  const [desImage, SetDesImage] = useState([
    TucacasImg,
    LecheriaImg,
    MargaritaImg,
    HiguerImg,
  ]);
  return (
    <View style={styles.destinos}>
      <Text style={styles.destinostitle}>Destinos Top</Text>
      <ScrollView
        className="!space-x-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((des, i) => (
          <DesCard
            descontent={des.location1}
            deslogo={desImage[i]}
            key={i}
            setLocation={setLocation}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  destinos: {
    paddingTop: "8%",
  },
  destinostitle: {
    paddingLeft: "4%",
    color: "#102a5e",
    fontSize: 17,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 26,
  },
  descontent: {
    color: "#102a5e",
    fontSize: 11,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: 16,
  },
});
export default Destinos;
