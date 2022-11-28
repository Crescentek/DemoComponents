import React from "react";
import {
  backgroundColor,
  border,
  createVariant,
  spacing,
  useRestyle,
  typography,
  color,
  useTheme,
} from "@shopify/restyle";
import { TouchableWithoutFeedback } from "react-native";
import Box from "../common/Box";
import Text from "../common/Text";

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

export default ({ onPress, label, Icon, testID, children, ...rest }) => {
  const props = useRestyle(restyleFunctions, rest);
  const labelProps = useRestyle(labelRestyleFunctions, rest);

  const { mainForeground } = useTheme().colors;
  return (
    <TouchableWithoutFeedback
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      onPress={onPress}
      testID={testID}
    >
      <Box
        height={44}
        alignItems="center"
        justifyContent="center"
        borderRadius={999}
        {...props}
      >
        {Icon && (
          <Box
            position="absolute"
            left={0}
            top={0}
            bottom={0}
            justifyContent="center"
            paddingLeft={3}
          >
            <Icon fill={mainForeground} />
          </Box>
        )}
        {children || (
          <Text
            fontFamily="ABC-Social-Medium"
            fontWeight="500"
            fontSize={15}
            marginTop={0.5}
            {...labelProps}
            borderWidth={0}
          >
            {label}
          </Text>
        )}
      </Box>
    </TouchableWithoutFeedback>
  );
};
