export interface SingerModel {
  id: number
  imgUrl: string,
  name: string,
  profile: string
}

export interface DjModel extends SingerModel {
}

export interface RecommendModel {
  id: number,
  imgUrl: string,
  tagType?: number,
  profile: string
  click: string,
  isTop?: boolean
}
export interface NewAlbumModel {
  id: number
  imgUrl: string,
  title: string,
  author: string
}

export interface SongModel {
  id: number,
  songName: string
}