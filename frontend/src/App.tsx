import React from 'react';
import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { ChakraProvider } from "@chakra-ui/react"

import GlobalStyle from './styles/global.styled';

function App() {
  return (
      <ChakraProvider>
        <GlobalStyle />
        <Router>
          <Switch>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
        </Router>
      </ChakraProvider>
  )
}

export default App;
