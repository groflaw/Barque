import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

const Description = ({des}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text
        style={styles.descriptionContent}
        className="mt-4"
        numberOfLines={isExpanded ? undefined : 3} 
        ellipsizeMode="tail"
      >
        {des}
      </Text>
      <TouchableOpacity onPress={handleReadMore}>
        <Text style={styles.readmore} className="mt-2">
        {isExpanded ? "Show less" : "Read more..."}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  descriptionTitle: {
    color: "#072d4c",
    fontSize: 20,
    fontFamily: "Lexend Deca", 
    fontWeight: "700",
    lineHeight: 26,
  },
  descriptionContent: {
    color: "#102a5e",
    fontSize: 15,
    fontFamily: "Lexend Deca", 
    lineHeight: 22,
  },
  readmore: {
    color: "#0751c1",
    fontSize: 15,
    fontFamily: "Lexend Deca",
  },
});
export default Description;
