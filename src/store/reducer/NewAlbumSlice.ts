import {createSlice} from "@reduxjs/toolkit";
import {NewAlbumModel} from "../../type";
import getRandomKey from "../../tools/RandomKey";

const initialState = [
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/1.jpg",
    title: "麋鹿",
    author: '梁静茹'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/2.jpg",
    title: "FAST X (Original Motion Picture Soundtrack)",
    author: 'Fast & Furious: The Fast Saga'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/3.jpg",
    title: "I feel",
    author: '(G)I-DLE'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/4.jpg",
    title: "Live at The Wiltern",
    author: 'NIKI'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/5.jpg",
    title: "Random Access Memories (10th Anniversary Edition)",
    author: 'Daft Punk'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/6.jpg",
    title: "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)",
    author: 'Metro Boomin'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/7.jpg",
    title: "『THE FIRST SLAM DUNK』 (オリジナルサウンドトラック)",
    author: 'The Birthday / 武部聡志 / 10-FEET'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/8.jpg",
    title: "Midnights (The Til Dawn Edition)",
    author: 'Taylor Swift'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/9.jpg",
    title: "滔滔",
    author: '鹿先森乐队'
  },
  {
    id: getRandomKey(),
    imgUrl: "/newAlbum/10.jpg",
    title: "瓦舍",
    author: '草东没有派对'
  },
] as NewAlbumModel[]

const NewAlbumSlice = createSlice({
  name: 'NewAlbumSlice',
  initialState,
  reducers: {}
})

export default NewAlbumSlice