import { View, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import Navbar from "../Components/Navbar";
import boatMark from "../../assets/Icons/nav-boat.png";

import ChatUser from "../Components/Charts.jsx/ChatUser";

const Chat = () => {
  const { height, width } = Dimensions.get("screen");

  return (
    <View style={styles.container}>
      <View className="flex items-center mb-5">
        <Image source={boatMark}></Image>
      </View>
      <ScrollView className="flex" style={styles.chatlist}>
        {Array.from({ length: 3 }, (_, index) => (
          <ChatUser key={index} />
        ))}
      </ScrollView>
      <Navbar></Navbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: " 100%",
    paddingTop: 30,
    paddingBottom: 10,
  },
  chatlist: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
export default Chat;
