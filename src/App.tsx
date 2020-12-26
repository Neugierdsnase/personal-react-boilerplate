import React, { FunctionComponent } from 'react'
import { Box } from './components/Layout/Box'
import { AppRouter } from './components/Navigation/AppRouter'
import { MainMenu } from './components/Navigation/MainMenu'

export const App: FunctionComponent = () => {
  return (
    <Box>
      <MainMenu />
      <AppRouter />
    </Box>
  )
}
