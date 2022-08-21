import { atom } from 'recoil'

import { JejodoProps } from '../types/jejodo'

export const jejodoState = atom<JejodoProps[]>({
  key: '#jejodoStaet',
  default: [],
})
