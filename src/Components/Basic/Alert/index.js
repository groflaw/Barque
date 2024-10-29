import React from "react";
import { StyleSheet, SafeAreaView, View, Button, Alert } from "react-native";

const App = () => {
  const twoOptionAlert = () => {
    Alert.alert("Hello its Title", "This is two option alert.", [
      { text: "Yes", onPress: () => console.log("Yes Pressed") },
      {
        text: "No",
        onPress: () => console.log("No Pressed"),
        style: "cancel",
      },
    ]);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button
          title="Two Option Alert"
          color="#5f9ea0"
          onPress={twoOptionAlert}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
