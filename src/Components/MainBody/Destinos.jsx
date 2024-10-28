import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TucacasImg from "../../../assets/Background/Destinos.png";
import LecheriaImg from "../../../assets/Background/Destinos(2).png";
import MargaritaImg from "../../../assets/Background/Destinos(3).png";
import HiguerImg from "../../../assets/Background/Destinos.png";

const DesCard = ({ deslogo, descontent }) => {
  return (
    <TouchableOpacity className="pt-5 w-28 rounded-2xl">
      <Image className="mx-auto w-85 h-85 object-fit" source={deslogo} />
      <Text
        style={styles.descontent}
        className="pt-1 text-sm font-semibold text-center"
      >
        {descontent}
      </Text>
    </TouchableOpacity>
  );
};
const Deslist = [
  { deslogo: TucacasImg, descontent: "Tucacas" },
  { deslogo: LecheriaImg, descontent: "Lecheria" },
  { deslogo: MargaritaImg, descontent: "Margarita" },
  { deslogo: HiguerImg, descontent: "Higuer" },
];
const Destinos = () => {
  return (
    <View style={styles.destinos}>
      <Text style={styles.destinostitle}>Destinos Top</Text>
      <ScrollView
        className="!space-x-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Deslist.map((des, i) => (
          <DesCard descontent={des.descontent} deslogo={des.deslogo} key={i} />
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
