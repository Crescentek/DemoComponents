import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

export default ({ size, style }) => {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        ...style
      }}
    >
      <LottieView
        style={{
          width: size || 30,
          height: size || 30,
          //backgroundColor: "white",
        }}
        source={require("../../assets/animations/loading_spinner.json")}
        autoPlay
        loop
      />
    </View>
  );
};
