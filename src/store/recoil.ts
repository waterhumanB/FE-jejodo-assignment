import { atom } from 'recoil'

import { JejodoProps } from '../types/jejodo'

export const jejodoState = atom<JejodoProps[]>({
  key: '#jejodoStaet',
  default: [],
})

export const searchState = atom<JejodoProps[]>({
  key: '#searchStaet',
  default: [],
})

export const resultState = atom<JejodoProps[]>({
  key: '#resultStaet',
  default: [],
})

export const searchTextState = atom<string>({
  key: '#searchTextState',
  default: '',
})
