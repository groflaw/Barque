import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import ChatInput from "../Components/Charts.jsx/ChatInput";
import BackButton from "../Components/Charts.jsx/BackButton";
const SingleChat = () => {
  return (
    <View style={styles.container}>
      <View className="relative flex items-center">
        <Text style={styles.headerTitle}>Chat Con</Text>
        <BackButton></BackButton>
      </View>
      <ScrollView className="pt-5 pl-4 pr-4 ">
        <View className="flex flex-row justify-start ">
          <Text style={styles.ChatCard} className="w-64 mt-2 ">
            ¡Hola! Sí, me gustaría saber más sobre las actividades de pesca.
          </Text>
        </View>
        <View className="flex flex-row justify-end ">
          <Text style={styles.ChatCard} className="float-right w-64 mt-2">
            ¡Hola! Sí, me gustaría saber más sobre las actividades de pesca.
          </Text>
        </View>
        <View className="flex flex-row justify-start ">
          <Text style={styles.ChatCard} className="w-64 mt-2 ">
            ¡Hola! Sí, me gustaría saber más sobre las actividades de pesca.
          </Text>
        </View>
        <View className="flex flex-row justify-end ">
          <Text style={styles.ChatCard} className="float-right w-64 mt-2">
            ¡Hola! Sí, me gustaría saber más sobre las actividades de pesca.
          </Text>
        </View>
      </ScrollView>
      <ChatInput></ChatInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: " 100%",
    paddingTop: 30,
    paddingBottom: 10,
  },
  headerTitle: {
    color: "#030303",
    fontSize: 20,
    fontFamily: "Lato",
    fontWeight: "700",
    lineHeight: 28,
  },
  ChatCard: {
    padding: 15,
    backgroundColor: "#102a5e",
    borderRadius: 8,
    color: "#ffffff",
  },
});

export default SingleChat;
