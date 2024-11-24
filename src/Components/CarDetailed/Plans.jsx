import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import shipRoundImage from "../../../assets/Icons/shipround.png";

import fullTickImage from "../../../assets/Icons/fulltick.png";
import { useEffect, useState } from "react";

const Plans = ({ data,setPlan }) => {
  const [expandedPlan, setExpandedPlan] = useState(null);

  const togglePlanDetails = (id) => {
    setExpandedPlan(expandedPlan === id ? null : id);
    setPlan(id)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Plans to choose from</Text>
      <View style={styles.content} className="mt-9">
        {data.map((item, index) => {
          const isExpanded = expandedPlan === item._id;
          return (
            <TouchableOpacity
              onPress={() => togglePlanDetails(item._id)}
              key={index}
            >
              <View style={isExpanded ? styles.open : styles.close}>
                <View className="flex flex-row justify-between">
                  <Text style={styles.head}> Plan {index + 1}</Text>
                  <View className="flex flex-row items-center">
                    <Text style={styles.price}>${item.price}</Text>
                    <TouchableOpacity
                      onPress={() => togglePlanDetails(item._id)}
                    >
                      <Image
                        source={fullTickImage}
                        style={isExpanded && styles.reverimage}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                {isExpanded && (
                  <>
                    <Text style={styles.description} className="mt-5">
                      {item.description}
                    </Text>
                    {item.captain == 1 && (
                      <View
                        style={styles.row}
                        className="flex flex-row items-center mt-3"
                      >
                        <Image source={shipRoundImage} />
                        <Text style={styles.driver}>Con Capitan</Text>
                      </View>
                    )}
                  </>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
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
  content: {
    backgroundColor: "#fefffe",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    padding: 15,
  },
  Title: {
    color: "#102a5e",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 30,
  },
  open: {
    backgroundColor: "#f0f1ff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ecedf0",
    padding: 10,
    marginBottom: 10,
    maringTop: 10,
  },
  close: {
    marginBottom: 10,
    maringTop: 10,
    padding: 10,
  },
  head: {
    color: "#17233c",
    fontSize: 18,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 22,
  },
  price: {
    color: "#0751c1",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 18,
    marginRight: 15,
  },
  reverimage: {
    transform: [{ rotate: "180deg" }],
  },
  description: {
    color: "#000000",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    lineHeight: 16,
  },
  driver: {
    marginLeft: 4,
    color: "#004eff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 16,
  },
});
export default Plans;
