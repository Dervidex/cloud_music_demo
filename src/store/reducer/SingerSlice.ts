import {createSlice} from "@reduxjs/toolkit";
import {SingerModel} from "../../type";

const initState = [
  {
    id: Date.now() + Math.round(Math.random()*1000),
    imgUrl: '/singer/1.jpg',
    name: '张惠妹aMEI',
    profile: '台湾歌手张惠妹'
  },
  {
    id: Date.now() + Math.round(Math.random()*1000),
    imgUrl: '/singer/2.jpg',
    name: '吴莫愁Momo',
    profile: '《中国好声音》选手吴莫愁'
  },
  {
    id: Date.now() + Math.round(Math.random()*1000),
    imgUrl: '/singer/3.jpg',
    name: '孙楠',
    profile: '歌手孙楠 代表作《你快回来》《燃烧》'
  },
  {
    id: Date.now() + Math.round(Math.random()*1000),
    imgUrl: '/singer/4.jpg',
    name: '麦田老狼',
    profile: '歌手，音乐人。代表作《同桌的你》等。'
  },
  {
    id: Date.now() + Math.round(Math.random()*1000),
    imgUrl: '/singer/5.jpg',
    name: '陈楚生',
    profile: '唱作歌手'
  },
] as SingerModel[]

const SingerSlice = createSlice({
  name: 'SingerSlice',
  initialState: initState,
  reducers: {
    addSinger: (state) => {
      state.push({
        id: Date.now() + Math.round(Math.random()*1000),
        imgUrl: '/singer/5.jpg',
        name: '陈楚生',
        profile: '唱作歌手'
      })
    }
  }
})

export default SingerSlice
export const {addSinger} = SingerSlice.actions