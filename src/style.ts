import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 320px;
  margin: auto;
  font-weight: 700;
`

export const Section = styled.section`
  width: 100%;
  margin: auto;
  text-align: center;
`

export const Title = styled.div`
  width: 100%;
  font-size: 28px;
  letter-spacing: -0.12em;
  margin-top: 40px;
`

export const Desc = styled.div`
  font-size: 16px;
  letter-spacing: -0.12em;
  margin-bottom: 40px;
  margin-top: 10px;
  line-height: 25px;
`
export const SearchContainer = styled.div`
  position: relative;
`
export const SearchBox = styled.div`
  width: 100%;
  height: 32px;
  border: 1px solid #000;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
  background: #fff;
`
export const SearchResultBox = styled.div`
  overflow: scroll;
  border-radius: 16px;
  position: absolute;
  width: 100%;
  max-height: 100px;
  border: 1px solid #000;
  background: #fff;
  top: 6px;
`

export const SearchResult = styled.button`
  width: 100%;
  height: 30px;
  padding-left: 25px;
  text-align: left;
  font-size: 14px;

  :hover {
    background: #eee;
  }
`

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

export const Nickname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  background: #ffdc3c;
  border: 1px solid #000;
  font-size: 8px;
  border-radius: 10px;
  margin-right: 5px;
`

export const Oname = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  background: #4498f2;
  border: 1px solid #000;
  font-size: 8px;
  border-radius: 10px;
  margin-right: 5px;
`
export const SubName = styled.div`
  color: #999;
  font-weight: 400;
  font-size: 12px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
