import { ScrollView, View, StyleSheet } from "react-native";
import React from "react";
import Top from "../Components/MainBody/Top";
import Destinos from "../Components/MainBody/Destinos";
import Newboat from "../Components/MainBody/Newboat";
import Navbar from "../Components/Navbar";
const MainBody = () => {
  return (
    <>
      <ScrollView style={{ backgroundColor: "#f0f1ff" }}>
        <Top></Top>
        <Destinos></Destinos>
        <Newboat></Newboat>
      </ScrollView>
      <Navbar></Navbar>
    </>
  );
};

export default MainBody;
