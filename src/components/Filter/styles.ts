import styled from 'styled-components'

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #000;
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
  color: #fff;
  background: #000;
  font-size: 14px;
`
export const CitizenCount = styled.div`
  font-weight: 700;
  color: #4498f2;
  margin-left: 5px;
`
export const FilterMenu = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;
  align-items: center;

  .focus {
    padding: 4px 12px;
    color: #fff;
    background: #000;
    border-radius: 20px;
  }
`
export const FilterRange = styled.button`
  margin-left: 10px;
  font-size: 14px;
  color: #999;
`
