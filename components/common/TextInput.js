import React, { useState, forwardRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { createVariant, useRestyle, useTheme } from "@shopify/restyle";
import Box from "../common/Box";


const TextInput1 = forwardRef(
  ({ value, onChangeText, handleBlur, multiline, noClear, testID, ...props }, ref) => {
   
    const theme = useTheme();
    const { black, white, red } = theme.colors;
    
    const [focused, setFocused] = useState(false);
    const [textInputBGColor, settextInputBGColor] = useState(black);

    return (
      <Box
        height={multiline ? "auto" : 51}
        flexDirection="row"
        alignItems={multiline ? "stretch" : "center"}
        paddingHorizontal={4}
        paddingVertical={multiline ? 3 : 0}
        minHeight={multiline ? 92 : 0}
        
        {...props}
      >
        <TextInput
          testID={testID}
          {...{ ref, value, onChangeText }}
          {...{ multiline }}
          {...props}
          selectionColor={red}
          placeholderTextColor={white}
          style={[
            {
              padding: 5,
              borderRadius: 5,
               backgroundColor: textInputBGColor,
              height: multiline ? "auto" : 50,
              flex: 1,
              color: red,
              lineHeight: multiline ? 20 : null,
              paddingHorizontal: multiline ? 1 : null,
            },
            
          ]}
          onBlur={() => settextInputBGColor(white)}
          onFocus={() => settextInputBGColor(black)}
        ></TextInput>
        
      </Box>
    );
  }
);

export default TextInput1