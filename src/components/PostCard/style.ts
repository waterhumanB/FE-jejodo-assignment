import styled from 'styled-components'

import colors from '../../styles/constants/colors'

export const PostCardContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.black};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 16px 0 16px 18px;
  margin-bottom: 10px;
`

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InfoBox = styled.div`
  width: 100%;
  padding-left: 20px;
`
export const FirstInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SecondInfo = styled.div`
  display: flex;
  margin-top: 10px;
`

export const NickameBox = styled.div`
  padding-right: 15px;
  font-size: 18px;
  margin-top: 10px;

  .search {
    background: ${colors.searchText};
  }
`

export const BudingCount = styled.div`
  color: ${colors.buildingText};
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubNickname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  background: ${colors.yellow};
  border: 1px solid ${colors.black};
  font-size: 8px;
  border-radius: 10px;
  margin-right: 3px;
`

export const Oname = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  background: ${colors.buildingText};
  border: 1px solid ${colors.black};
  font-size: 8px;
  border-radius: 10px;
  margin-right: 3px;
`
export const SubName = styled.div`
  color: ${colors.gray};
  font-weight: 400;
  font-size: 12px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.1em;
`
