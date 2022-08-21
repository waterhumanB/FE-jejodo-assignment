import styled from 'styled-components'

import { BannerM } from '../assets'

const Box = styled.div`
  position: relative;
  height: 242px;
  overflow: hidden;

  svg {
    position: absolute;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

const Header = () => {
  return (
    <header>
      <Box>
        <BannerM />
      </Box>
    </header>
  )
}

export default Header
