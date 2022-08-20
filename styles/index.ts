import { createGlobalStyle } from 'styled-components'

import fonts from './base/fonts'
import reset from './base/reset'

const GlobalStyle = createGlobalStyle`
${fonts}
${reset}`

export default GlobalStyle
