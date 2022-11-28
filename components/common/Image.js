import React from "react";
import FastImage from "react-native-fast-image";
import Box from "./Box";

export default ({ onLoad, ...props }) => {
  return (
    <>
      <Box {...props} />
      <FastImage onLoad={onLoad} {...props} />
    </>
  );
};
