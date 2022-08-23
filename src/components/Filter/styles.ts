import styled from 'styled-components'

import colors from '../../styles/constants/colors'

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${colors.black};
  justify-content: space-between;
`
export const Citizen = styled.div`
  width: 110px;
  height: 32px;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: ${colors.white};
  background: ${colors.black};
  font-size: 14px;
`
export const CitizenCount = styled.div`
  font-weight: 700;
  color: ${colors.buildingText};
  margin-left: 5px;
`
export const FilterMenu = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;
  align-items: center;

  .focus {
    padding: 4px 12px;
    color: ${colors.white};
    background: ${colors.black};
    border-radius: 20px;
  }
`
export const FilterRange = styled.button`
  margin-left: 10px;
  font-size: 14px;
  color: ${colors.gray};
`
