import React from "react";
import Box from "../common/Box";
import Text from "../common/Text";

export default ({ section: { title } }) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={43}
      paddingHorizontal={4}
      backgroundColor="mainBackground"
    >
      <Text variant="heading1">
        {title}
      </Text>
    </Box>
  );
};
