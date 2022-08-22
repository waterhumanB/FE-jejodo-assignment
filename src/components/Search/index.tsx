import { useState, MouseEvent, ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { jejodoState, searchState } from '../../store/recoil'
import { JejodoProps } from '../../types/jejodo'
import { SearchI } from '../../assets'

import * as S from './style'

const Search = () => {
  const [jejodoData] = useRecoilState(jejodoState)
  const [, setSearchData] = useRecoilState(searchState)
  const [inputValue, setInputValue] = useState('')

  const fillterData = (data: JejodoProps[], word: string) => {
    if (!word) {
      return data
    }
    const filteredData = data.filter(
      (data) => data.nickname.includes(word) || data.oname.includes(word),
    )
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

  const inputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <div style={{ position: 'relative' }}>
      <S.SearchBox>
        <S.SearchInput
          placeholder="검색"
          onChange={inputChangeValue}
          value={inputValue}
        />
        <S.SearchBtn onClick={handleSearch}>
          <SearchI />
        </S.SearchBtn>
      </S.SearchBox>
      {inputValue !== '' && fillterData(jejodoData, inputValue).length > 0 && (
        <S.SearchResultBox>
          {fillterData(jejodoData, inputValue).map((data, index) => (
            <S.SearchResult
              data-result={data.nickname}
              onClick={handleResultClick}
              key={index + data.nickname}
            >
              {data.nickname}
            </S.SearchResult>
          ))}
        </S.SearchResultBox>
      )}
    </div>
  )
}

export default Search
