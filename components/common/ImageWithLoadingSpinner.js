import React from "react";
import { Image} from "react-native";
import Box from "./Box";

const ImageWithLoadingSpinner = React.forwardRef((props, ref) => {
  return (
    <Box>
        <Image ref={ref} {...props} />
    </Box>
  );
});

export default ImageWithLoadingSpinner