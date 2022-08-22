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

  const handleRangeClick = (e: MouseEvent<HTMLButtonElement>) => {
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
          <div
            style={{ fontWeight: '700', color: '#4498F2', marginLeft: '5px' }}
          >
            {resultData.length === 0 ? 20 : resultData.length}
          </div>
        </S.Citizen>
        <button onClick={handleFilterMenu}>
          {openFilter ? <FilterAtive /> : <FilterI />}
        </button>
      </S.FilterContainer>
      {openFilter && (
        <div style={{ display: 'flex' }}>
          <div>보유 아파트</div>
          {apartRange.map((data, index) => (
            <button
              data-range={data.result}
              onClick={handleRangeClick}
              key={`${data.range}` + index}
            >
              {data.range}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Filter
