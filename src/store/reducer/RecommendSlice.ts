import {RecommendModel} from "../../type";
import getRandomKey from "../../tools/RandomKey";
import {createSlice} from "@reduxjs/toolkit";

const initState = [
  {
    id: getRandomKey(),
    imgUrl: "/recommend/1.jpg",
    profile: '愿还会有人，做个傻子陪你浪费一生',
    click: '2573万'
  },
  {
    id: getRandomKey(),
    imgUrl: "/recommend/2.jpg",
    profile: '古典清香 I 我的茶馆里住着巴赫与肖邦',
    click: '2494万',
    isTop: true
  },
  {
    id: getRandomKey(),
    imgUrl: "/recommend/3.jpg",
    profile: '请你一定不要停下来 成为你想成为的人',
    click: '6760万'
  },
  {
    id: getRandomKey(),
    imgUrl: "/recommend/4.jpg",
    profile: ' 【免费】南怀瑾读金刚经 前言 超越宗教的大智慧',
    tagType: 1,
    click: '65107'
  },
  {
    id: getRandomKey(),
    imgUrl: "/recommend/5.jpg",
    profile: '不得了！这些英文歌的热评信息量好大……',
    click: '3206万',
    isTop: true
  },
  {
    id: getRandomKey(),
    imgUrl: "/recommend/6.jpg",
    profile: ' 《港乐时光机》：回到1993，30年前的大热日本翻唱曲！',
    tagType: 1,
    click: '2724'
  },
  {
    id: getRandomKey(),
    imgUrl: "/recommend/7.jpg",
    profile: '温柔英文歌-睡觉专用',
    click: '3837万'
  },
  {
    id: getRandomKey(),
    imgUrl: "/recommend/8.jpg",
    profile: '👸🏻👸🏻👸🏻',
    tagType: 1,
    click: '104万'
  },
] as RecommendModel[]

const RecommendSlice = createSlice({
  name: 'RecommendSlice',
  initialState: initState,
  reducers: {

  }
})

export default RecommendSlice
