import {createSlice} from "@reduxjs/toolkit";
import {DjModel} from "../../type";

const initState = [
  {
    id: Date.now() + Math.round(Math.random() * 1000),
    imgUrl: "/dj/1.jpg",
    name: "陈立",
    profile: "心理学家、美食家陈立教授"
  },
  {
    id: Date.now() + Math.round(Math.random() * 1000),
    imgUrl: "/dj/2.jpg",
    name: "刘维-Julius",
    profile: "歌手、播客节目《维维道来》主理人"
  },
  {
    id: Date.now() + Math.round(Math.random() * 1000),
    imgUrl: "/dj/3.jpg",
    name: "莫非定律乐团",
    profile: "男女双人全创作独立乐团"
  },
  {
    id: Date.now() + Math.round(Math.random() * 1000),
    imgUrl: "/dj/4.jpg",
    name: "碎嘴许美达",
    profile: "脱口秀网络红人"
  },
  {
    id: Date.now() + Math.round(Math.random() * 1000),
    imgUrl: "/dj/5.jpg",
    name: "银临Rachel",
    profile: ""
  },
] as DjModel[]

const DjSlice = createSlice({
  name: 'DjSlice',
  initialState: initState,
  reducers: {

  }
})

export default DjSlice