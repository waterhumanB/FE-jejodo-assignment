import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import GlobalStyle from './styles'
import App from './App'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
