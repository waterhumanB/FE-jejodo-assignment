import { useMediaQuery } from 'react-responsive'

import { BannerM, BannerPT } from '../../assets'

import * as S from './style'

const Header = () => {
  const isTablet = useMediaQuery({
    query: '(min-width:1024px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  })

  return (
    <header>
      <S.Box>
        {isTablet && <BannerPT />}
        {isMobile && <BannerM />}
      </S.Box>
    </header>
  )
}

export default Header
