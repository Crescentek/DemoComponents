import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Box from './Box'
import Text from './Text'

export default ({ error, refetch, isRefetching, ...props }) => {
  const statusBarHeight = getStatusBarHeight();
  const { top } = useSafeAreaInsets();

  return (
    <Box
    position="absolute"
    left={0}
    top={62 + (statusBarHeight < 44 ? 20 : top)}
    right={0}
    justifyContent="center"
    alignItems="center"
  >
    <Box
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="5"
      height={41}
      borderRadius={20}
      style={{
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 10,
      }}
    >
      <Text
        fontFamily="ABC-Social-Medium"
        fontWeight="500"
        fontSize={15}
        lineHeight={18}
        textAlign="center"
        marginTop={"px"}
      >
        No internet connection
      </Text>
    </Box>
  </Box>
  )
}
