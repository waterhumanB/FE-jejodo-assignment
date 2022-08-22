import styled from 'styled-components'

export const Box = styled.div`
  position: relative;
  height: 242px;
  overflow: hidden;
  z-index: 2;

  svg {
    position: absolute;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
  }
`
