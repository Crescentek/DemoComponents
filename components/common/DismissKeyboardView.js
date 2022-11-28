import React from "react";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";

const dismissKeyboard = Comp => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPressIn={() => Keyboard.dismiss()} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};

export default dismissKeyboard(View);
