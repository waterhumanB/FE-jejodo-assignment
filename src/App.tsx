import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'

import * as S from './style'
import { jejodoState, resultState, searchState } from './store/recoil'
import Pagination from './components/Pagination'
import Search from './components/Search'
import Filter from './components/Filter'
import PostCard from './components/PostCard'

const URL = `https://jejodo-dev-team.github.io/open-api/frontend.json`

function App() {
  const [jejodoData, setJeojodoData] = useRecoilState(jejodoState)
  const [searchData] = useRecoilState(searchState)
  const [resultData, setResultData] = useRecoilState(resultState)

  const [page, setPage] = useState(1)
  const offset = (page - 1) * 7

  const getData = async () => {
    await axios
      .get(URL)
      .then((res) => setJeojodoData(res.data))
      .catch((err) => setJeojodoData(err))
  }
  useEffect(() => {
    getData()
    setResultData(searchData === [] ? jejodoData : searchData)
  }, [resultData, searchData])

  return (
    <S.MainContainer>
      <S.Section>
        <S.Title>화섬 아파트 지구家 입주민들</S.Title>
        <br />
        <S.Desc>
          화섬 아파트에 입주한 입주민들입니다.
          <br /> 같이 화성에 가는날을 기다리며 화목하게 지내봐요!
        </S.Desc>
        <S.SearchContainer>
          <Search />
        </S.SearchContainer>
        <Filter />
      </S.Section>
      <S.PostCardBox>
        {resultData.length !== 0
          ? resultData
              .slice(offset, offset + 7)
              .map((data, index) => (
                <PostCard key={index + data.oname} data={data} />
              ))
          : jejodoData
              .slice(offset, offset + 7)
              .map((data, index) => (
                <PostCard key={index + data.oname} data={data} />
              ))}
      </S.PostCardBox>
      <Pagination
        total={resultData.length !== 0 ? resultData.length : jejodoData.length}
        limit={7}
        page={page}
        setPage={setPage}
      />
    </S.MainContainer>
  )
}
export default App
