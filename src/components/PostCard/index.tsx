import { useRecoilState } from 'recoil'

import { searchTextState } from '../../store/recoil'
import { PostProps } from '../../types/jejodo'

import Profile from './Profile'
import * as S from './style'

const PostCard = ({ data }: PostProps) => {
  const [SearchText] = useRecoilState(searchTextState)
  return (
    <S.PostCardContainer>
      <S.ProfileBox>
        <Profile datakey={data.nickname} />
      </S.ProfileBox>
      <S.InfoBox>
        <S.FirstInfo>
          <S.NickameBox>
            <span className={SearchText === data.nickname ? 'search' : ''}>
              {data.nickname}
            </span>
          </S.NickameBox>
          <S.BudingCount>지구家 아파트{data.building_count}개</S.BudingCount>
        </S.FirstInfo>
        <S.SecondInfo>
          <S.SubNickname>제</S.SubNickname>
          <S.SubName>{data.nickname}</S.SubName>
          <S.Oname>오</S.Oname>
          <S.SubName>{data.oname}</S.SubName>
        </S.SecondInfo>
      </S.InfoBox>
    </S.PostCardContainer>
  )
}
export default PostCard
