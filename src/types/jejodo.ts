import { Dispatch, SetStateAction } from 'react'

export interface JejodoProps {
  nickname: string
  oname: string
  // eslint-disable-next-line @typescript-eslint/naming-convention
  building_count: number
}

export interface PageProps {
  total: number
  limit: number
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export interface PostProps {
  data: JejodoProps
}

export interface ProfileProps {
  datakey: string
}
