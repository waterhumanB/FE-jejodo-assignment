import styled from 'styled-components'

import colors from '../../styles/constants/colors'

export const SearchContainer = styled.div`
  position: 'relative';
  width: 100%;
  max-width: 400px;
  margin: auto;
`

export const SearchBox = styled.div`
  width: 100%;
  height: 32px;
  border: 1px solid ${colors.black};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
  background: ${colors.white};
`

export const SearchInput = styled.input`
  width: 100%;
  font-size: 14px;
  margin-left: 25px;
`
export const SearchBtn = styled.button`
  margin: auto 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchResultBox = styled.div`
  overflow: scroll;
  border-radius: 16px;
  position: absolute;
  width: 100%;
  max-width: 400px;
  margin: auto;
  max-height: 100px;
  border: 1px solid ${colors.black};
  background: ${colors.white};
  top: 6px;
`

export const SearchResultMargin = styled.div`
  margin-top: 25px;
`

export const SearchResult = styled.button`
  margin-top: 25px;
  width: 100%;
  height: 30px;
  padding-left: 25px;
  text-align: left;
  font-size: 14px;

  :hover {
    background: ${colors.searchGray};
  }
`
