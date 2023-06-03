import {createSlice} from "@reduxjs/toolkit";
import {SongModel} from "../../type";
import getRandomKey from "../../tools/RandomKey";

const initialState = [
  {
    id: getRandomKey(),
    songName: '向云端'
  }, {
    id: getRandomKey(),
    songName: '东莨菪碱'
  }, {
    id: getRandomKey(),
    songName: '恋是爱的呕吐物'
  }, {
    id: getRandomKey(),
    songName: 'Alive'
  }, {
    id: getRandomKey(),
    songName: '山间有歌'
  }, {
    id: getRandomKey(),
    songName: '仁义东巷'
  }, {
    id: getRandomKey(),
    songName: '时空观影券'
  }, {
    id: getRandomKey(),
    songName: 'Self Destruction Mode'
  }, {
    id: getRandomKey(),
    songName: '如果呢'
  }, {
    id: getRandomKey(),
    songName: '记得'
  },
] as SongModel[]

const SoarBoardSlice = createSlice({
  name: 'SoarBoardSlice',
  initialState,
  reducers: {

  }
})

export default SoarBoardSlice