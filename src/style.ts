import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  min-width: 320px;
  max-width: 560px;
  margin: 40px auto 0;
  padding: 0 15px;
  font-weight: 700;
  @media screen and (min-width: 1024px) {
    margin: 110px auto 0;
  }
`

export const Section = styled.section`
  width: 100%;
  margin: auto;
  text-align: center;
`

export const Title = styled.div`
  width: 100%;
  font-size: 28px;
  letter-spacing: -0.2em;
  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
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

export const PostCardBox = styled.div`
  margin-top: 35px;
`
