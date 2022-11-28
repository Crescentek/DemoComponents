import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Text from "../common/Text";
import Box from "../common/Box";

const BasicButton = ({ children, onPress, ...props }) => (
  <TouchableWithoutFeedback 
    onPress={onPress}
    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
  >
    <Box style={{borderColor: 'red', borderWidth: 1}}>
      <Text variant="heading1" {...props}>
        {children}
      </Text>
    </Box>
  </TouchableWithoutFeedback>
);
export default BasicButton;
