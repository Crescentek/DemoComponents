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
import { ActivityIndicator, TouchableWithoutFeedback, Image } from "react-native";
import Box from "../components/common/Box";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


export default ({ onPress, testID}) => {

  const [stop, setStop] = useState(true)

  useEffect(() => {

    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:'522492505880-624bt1i4kei37hois3274tfo5grb4jbn.apps.googleusercontent.com', 
      offlineAccess: false, 
      forceCodeForRefreshToken: true, 
    })
    
  }, [])

  useEffect(() => {
    
  }, [])


  return (
    <TouchableWithoutFeedback
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      onPress={onPress}
      testID={testID}
    >
      <Box
        height={40}
        alignItems="center"
        justifyContent="center"
        borderRadius={999}
      >
        <Image
                style={{width: 40, height: 40, marginTop: 20}}
                source={require('../assets/images/goo.png')}
        />

        
      </Box>
    </TouchableWithoutFeedback>
  );
};
