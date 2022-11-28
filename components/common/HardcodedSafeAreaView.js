import React from "react";
import { View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default ({ style, children, ...props }) => {
  const statusBarHeight = getStatusBarHeight();

  return (
    <View style={{ paddingTop: statusBarHeight, ...style }} {...{ props }}>
      {children}
    </View>
  );
};
