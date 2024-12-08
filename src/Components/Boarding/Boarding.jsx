import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import SplashImg from "../../../assets/Background/Splash.jpeg";

const Boarding = () => {
  const { height, width } = Dimensions.get("screen");
  const navigation = useNavigation();
  const sharedValues = useSharedValue(0);

  // Animated styles
  const firstScreenAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(sharedValues.value !== 0 ? 0 : 1, {
        duration: 1000,
      }),
      backgroundColor: "white",
    };
  });

  const onSkipFun = () => {
    navigation.navigate("Main");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onSkipFun();
    }, 2000);
    const unsubscribe = navigation.addListener("focus", async () => {
      return () => clearTimeout(timer);
    });
    return unsubscribe
  }, [navigation]);

  // Screens
  const FirstScreen = () => {
    return (
      <Animated.View
        style={[
          { height: height, width: width, zIndex: -99 },
          StyleSheet.absoluteFill,
          firstScreenAnimatedStyle,
          { justifyContent: "center", alignItems: "center" }, // Center content
        ]}
      >
        <View className="z-50 px-6 space-y-5">
          <Image source={SplashImg} preserveAspectRatio="xMidYMid slice" />
        </View>
      </Animated.View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={onSkipFun}>
      <View
        style={{ height: height, width: width, flex: 1, position: "relative" }}
      >
        <View className="flex-row w-full h-full">
          <FirstScreen />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Boarding;
