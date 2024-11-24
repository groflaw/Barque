import { View, StyleSheet, Text, Image,TouchableOpacity } from "react-native";
import tickImage from "../../../assets/Icons/tick.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAccessories } from "../../Actions/BasicBoat/basicboat";

const Accessories = ({ data }) => {
  const dispatch = useDispatch();

  const accessories = useSelector((state) => state.BasicBoat.accessories);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchbasicAccess = async () => {
      let result = await dispatch(getAccessories());
    };
    fetchbasicAccess();
  }, []);
  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const visibleAccessories = isExpanded ? accessories : accessories.slice(0, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Accesorios</Text>
      {visibleAccessories.map((item, index) => {
        return data.includes(item._id) ? (
          <View className="flex flex-row justify-between mt-4" key={index}>
            <Text style={styles.Item}>{item.title}</Text>
            <Image source={tickImage}></Image>
          </View>
        ) : (
          <></>
        );
      })}
      {accessories.length > 3 && (
        <TouchableOpacity onPress={handleReadMore}>
          <Text style={styles.readmore} className="mt-2">
            {isExpanded ? "Show less" : "Read more..."}
          </Text>
        </TouchableOpacity>
      )}
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
    color: "#072d4c",
    fontSize: 20,
    fontFamily: "Lexend Deca", // Ensure you have the font loaded
    fontWeight: "700",
    lineHeight: 26,
  },
  Item: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca", // Ensure you have the font loaded
    fontWeight: "300", // Use "300" for light font weight
    lineHeight: 20,
  },
  readmore: {
    color: "#0751c1",
    fontSize: 15,
    fontFamily: "Lexend Deca",
  },
});
export default Accessories;
