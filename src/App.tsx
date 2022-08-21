import { ChangeEvent, useEffect, useState, MouseEvent } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'

import { Filter, Search } from './assets'
import Profile from './components/Profile'
import * as S from './style'
import { jejodoState } from './store/recoil'
import { JejodoProps } from './types/jejodo'

const URL = `https://jejodo-dev-team.github.io/open-api/frontend.json`

function App() {
  const [inputValue, setInputValue] = useState('')
  const [jejodoData, setJeojodoData] = useRecoilState(jejodoState)
  const [serachData, setSearchData] = useState<JejodoProps[]>()

  const inputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const fillterData = (data: JejodoProps[], word: string) => {
    if (!word) {
      return data
    }
    const filteredData = data.filter((data) => data.nickname.includes(word))
    return filteredData
  }

  const handleSearch = () => {
    setSearchData(fillterData(jejodoData, inputValue))
    setInputValue('')
  }

  const handleResultClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { result } = e.currentTarget.dataset
    result && setInputValue(result)
    setSearchData(fillterData(jejodoData, inputValue))
    setInputValue('')
  }

  const mapData = serachData !== undefined ? serachData : jejodoData

  const getData = async () => {
    await axios
      .get(URL)
      .then((res) => setJeojodoData(res.data))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(err),
      )
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <S.MainContainer>
      <S.Section>
        <S.Title>화섬 아파트 지구家 입주민들</S.Title>
        <br />
        <S.Desc>
          화섬 아파트에 입주한 입주민들입니다.
          <br /> 같이 화성에 가는날을 기다리며 화목하게 지내봐요!
        </S.Desc>
        <div style={{ position: 'relative' }}>
          <form>
            <S.SearchBox>
              <input
                style={{ width: '100%', fontSize: '14px', marginLeft: '25px' }}
                placeholder="검색"
                onChange={inputChangeValue}
                value={inputValue}
              />
              <button
                style={{
                  margin: 'auto 20px auto 0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={handleSearch}
              >
                <Search />
              </button>
            </S.SearchBox>
          </form>

          {inputValue !== '' && serachData !== undefined && (
            <S.SearchResultBox>
              <div style={{ marginTop: '25px' }} />
              {serachData.map((data, index) => (
                <button
                  style={{
                    marginLeft: '25px',
                    width: '100%',
                    height: '25px',
                    textAlign: 'left',
                    fontSize: '14px',
                  }}
                  data-result={data.nickname}
                  onClick={handleResultClick}
                  key={index + data.nickname}
                >
                  {data.nickname}
                </button>
              ))}
            </S.SearchResultBox>
          )}
        </div>
        <S.FilterContainer>
          <S.Citizen>
            <div>입주민들</div>
            <div
              style={{ fontWeight: '700', color: '#4498F2', marginLeft: '5px' }}
            >
              {jejodoData.length}
            </div>
          </S.Citizen>
          <button>
            <Filter />
          </button>
        </S.FilterContainer>
        {mapData.map((data, index) => (
          <div
            key={index + data.nickname}
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid #000',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              padding: '16px 0 16px 18px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Profile datakey={data.nickname} />
            </div>
            <div style={{ width: '100%', paddingLeft: '20px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div
                  style={{
                    paddingRight: '15px',
                    fontSize: '18px',
                    marginTop: '10px',
                  }}
                >
                  {data.nickname}
                </div>
                <div
                  style={{
                    color: '#4498F2',
                    fontSize: '14px',
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  지구家 아파트{data.building_count}개
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                <S.Nickname>제</S.Nickname>
                <S.SubName>{data.nickname}</S.SubName>
                <S.Oname>오</S.Oname>
                <S.SubName>{data.oname}</S.SubName>
              </div>
            </div>
          </div>
        ))}
      </S.Section>
    </S.MainContainer>
  )
}
export default App
