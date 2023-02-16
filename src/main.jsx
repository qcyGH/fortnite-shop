import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { App } from './App'
import theme from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
