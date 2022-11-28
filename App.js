import React from 'react'
import MainStack from './navigations/MainStack'
import { ThemeProvider } from '@shopify/restyle'
import { darkTheme, lightTheme } from "./theme"

export default function App() {
  const theme = "dark";
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <MainStack />
    </ThemeProvider>
  )
}

