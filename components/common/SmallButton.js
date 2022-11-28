import React, { useEffect, useState } from "react";
import {
  backgroundColor,
  border,
  createVariant,
  spacing,
  useRestyle,
  typography,
  color,
} from "@shopify/restyle";
import { ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import Box from "../common/Box";
import Text from "../common/Text";
import useIsConnected from "./hooks/useIsConnected";

const restyleFunctions = [
  spacing,
  border,
  backgroundColor,
  createVariant({ themeKey: "buttonVariants" }),
];

const labelRestyleFunctions = [
  typography,
  color,
  createVariant({ themeKey: "buttonLabelVariants" }),
];

export default ({ onPress, label, testID, isRefetching, showNoInternet, setIsShowNoInternet, inverted, ...rest }) => {
  const props = useRestyle(restyleFunctions, rest);
  const labelProps = useRestyle(labelRestyleFunctions, rest);
  const isConnected = useIsConnected()
  const [stop, setStop] = useState(true)

  useEffect(() => {
    if (showNoInternet) {
      setTimeout(() => {
        setIsShowNoInternet(false)
      }, 1000);
    }
  }, [showNoInternet])

  useEffect(() => {
    if (isRefetching) {
      setTimeout(() => {
        setStop(true)
      }, 4000);
    }
  }, [isRefetching])

  const buttonPress = () => {
    if (!isConnected && showNoInternet != undefined) {
      setIsShowNoInternet(true)
    } else {
      onPress()
    }
  }

  return (
    <TouchableWithoutFeedback
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      onPress={() => buttonPress()}
      testID={testID}
    >
      <Box
        height={40}
        alignItems="center"
        justifyContent="center"
        borderRadius={999}
        {...props}
      >
        {((isConnected && isRefetching) || !stop) ? (
          <ActivityIndicator size="small" color={!inverted ? "#000000" : "#FFFFFF"} />
        ) :
          <Text
            fontFamily="ABC-Social-Book"
            fontWeight="500"
            marginTop={0.75}
            fontSize={14}
            lineHeight={17}
            textAlign="center"
            {...labelProps}
          >
            {label}
          </Text>
        }
      </Box>
    </TouchableWithoutFeedback>
  );
};
