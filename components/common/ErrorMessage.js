import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import Box from './Box'
import useIsConnected from './hooks/useIsConnected'
import NoInternet from './NoInternet'
import SmallButton from './SmallButton'
import Text from './Text'

export default ({ error, refetch, isRefetching, inverted,...props }) => {
  const isConnected = useIsConnected()
  const [showNoInternet, setIsShowNoInternet] = useState(false)

  return (
    <Box alignItems="center" justifyContent="center" flex={1} {...props}>
      {(showNoInternet || (!isConnected && inverted)) &&
        <Box position={"absolute"} top={inverted ? -20 : -50} style={{ width: 200 }}>
          <NoInternet />
        </Box>
      }
      {isConnected || !inverted &&
        <>
          <Text variant="heading1" color={inverted ? "mainBackground" : "mainForeground"}>
            {!isConnected && !inverted ? "No connection" : "Something went wrong!"}
          </Text>
          {refetch && (
            <Box marginTop={6}>
              <SmallButton
                variant={inverted ? "invertedPrimary" : "primary"}
                label="Try again"
                onPress={refetch}
                width={167}
                isRefetching={isRefetching}
                showNoInternet={showNoInternet}
                setIsShowNoInternet={setIsShowNoInternet}
              />
            </Box>
          )}
        </>
      }
    </Box>
  )
}
