import { useState, MouseEvent } from 'react'
import { useRecoilState } from 'recoil'

import { FilterI, FilterAtive } from '../../assets'
import { jejodoState, resultState, searchState } from '../../store/recoil'

import * as S from './styles'

const apartRange = [
  { range: '전체', result: 0 },
  { range: '5개이상', result: 5 },
  { range: '4개', result: 4 },
  { range: '3개', result: 3 },
  { range: '2개', result: 2 },
  { range: '1개', result: 1 },
]

const Filter = () => {
  const [jejodoData] = useRecoilState(jejodoState)
  const [, setSearchData] = useRecoilState(searchState)
  const [resultData] = useRecoilState(resultState)
  const [openFilter, setOpenFilter] = useState(false)
  const [currentTab, setCurrentTab] = useState(apartRange[0].range)

  const handleRangeClick = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.value)
    const { range } = e.currentTarget.dataset
    if (range === '0') {
      return setSearchData(jejodoData)
    } else if (range === '5') {
      const rangeResult = jejodoData.filter(
        (data) => data.building_count >= Number(range),
      )
      setSearchData(rangeResult)
      return
    }
    const rangeResult = jejodoData.filter(
      (data) => data.building_count === Number(range),
    )
    setSearchData(rangeResult)
  }

  const handleFilterMenu = () => {
    setOpenFilter((prev) => !prev)
  }
  return (
    <div>
      <S.FilterContainer>
        <S.Citizen>
          <div>입주민들</div>
          <S.CitizenCount>
            {resultData.length === 0 ? 20 : resultData.length}
          </S.CitizenCount>
        </S.Citizen>
        <button onClick={handleFilterMenu}>
          {openFilter ? <FilterAtive /> : <FilterI />}
        </button>
      </S.FilterContainer>
      {openFilter && (
        <S.FilterMenu>
          보유 아파트
          {apartRange.map((data, index) => (
            <S.FilterRange
              className={currentTab === data.range ? 'focus' : ''}
              data-range={data.result}
              onClick={handleRangeClick}
              key={`${data.range}` + index}
              value={data.range}
            >
              {data.range}
            </S.FilterRange>
          ))}
        </S.FilterMenu>
      )}
    </div>
  )
}

export default Filter
