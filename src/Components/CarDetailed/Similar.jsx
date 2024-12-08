import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilar } from "../../Actions/UserBoat/userboat";
import TucacasImg from "../../../assets/Background/Destinos.png";

const DesCard = ({ deslogo, descontent, price }) => {
  return (
    <TouchableOpacity className="pt-5 w-28 rounded-2xl">
      <Image
        className="mx-auto object-fit"
        source={{ uri: deslogo }}
        style={{ width: 90, height: 90, borderRadius: 10 }}
      />
      <Text className="mt-1" style={styles.model}>
        {descontent}
      </Text>
      <Text className="mt-1" style={styles.price}>
        ${price}
      </Text>
    </TouchableOpacity>
  );
};

const Similar = ({ location1, boatId }) => {
  const dispatch = useDispatch();
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    const fetchSimilar = async () => {
      let response = await dispatch(getSimilar(location1, boatId));
      setBoats(response);
    };
    fetchSimilar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Similar Boats</Text>
      <ScrollView
        className="!space-x-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {boats.map((item, index) => {
          return (
            <DesCard
              descontent={item.model}
              deslogo={item.coverImage}
              price={item.price}
              key={index}
            />
          );
        })}
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
    color: "#102a5e",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 31,
  },
  model: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: 300,
  },
  price: {
    color: "#0751c1",
    fontSize: 13,
    fontFamily: "Lexend Deca",
    fontWeight: 700,
  },
});

export default Similar;
