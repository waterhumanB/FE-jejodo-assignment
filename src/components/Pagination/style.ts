import styled from 'styled-components'

import colors from '../../styles/constants/colors'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`

export const Button = styled.button`
  margin-left: 5px;

  &:visited {
    color: ${colors.black};
  }

  &[disabled] {
    cursor: revert;
    transform: revert;

    rect {
      stroke: ${colors.gray};
    }

    path {
      stroke: ${colors.gray};
      fill: ${colors.gray};
    }
  }
`
