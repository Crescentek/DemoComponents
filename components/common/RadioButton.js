import { useTheme } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { mix, mixColor } from "react-native-redash";
import Box from "./Box";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const inOut = Easing.bezier(0.8, 0, 0.2, 1);

export default ({ value, onPress, disabled }) => {
  const { primary, raisedInsetBackground } = useTheme().colors;

  const transition = useDerivedValue(
    () =>
      withTiming(value, {
        duration: 1000 / 2 / 3,
        easing: inOut,
      }),
    [value]
  );

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: mixColor(
        transition.value,
        raisedInsetBackground,
        primary
      ),
    };
  });

  const innerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: 3 },
        { translateX: mix(transition.value, 3, 18) },
      ],
    };
  });

  return (
    <AnimatedPressable
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      onPress={!disabled && onPress}
      style={[
        {
          width: 47,
          height: 31,
          borderRadius: 999,
          opacity: disabled ? 0.5 : 1,
        },
        containerStyle,
      ]}
    >
      <Animated.View style={[innerStyle]}>
        <Box
          backgroundColor="mainBackground"
          height={25}
          width={26}
          borderRadius={999}
          shadowColor="black"
          shadowOpacity={0.25}
          shadowOffset={{ height: 0.25, width: 0.25 }}
          shadowRadius={0.5}
        />
      </Animated.View>
    </AnimatedPressable>
  );
};
