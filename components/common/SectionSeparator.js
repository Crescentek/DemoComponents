import React from "react";
import { View } from "react-native";

export default ({ leadingItem, trailingItem, trailingSection }) => {
  return leadingItem !== undefined &&
    trailingItem === undefined &&
    trailingSection !== undefined ? (
    <View style={{ height: 5 }} />
  ) : null;
};
