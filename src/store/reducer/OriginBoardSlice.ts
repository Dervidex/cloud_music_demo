import {createSlice} from "@reduxjs/toolkit";
import getRandomKey from "../../tools/RandomKey";
import {SongModel} from "../../type";

const initialState = [
  {id: getRandomKey(), songName: 'Emotion'},
  {id: getRandomKey(), songName: '冬青'},
  {id: getRandomKey(), songName: 'Plastic Dream'},
  {id: getRandomKey(), songName: '怎样/어때'},
  {id: getRandomKey(), songName: '花丛中起舞'},
  {id: getRandomKey(), songName: '晚风替我去爱你'},
  {id: getRandomKey(), songName: 'Last 9 On Earth (地球最后一夜) (LIVE版)'},
  {id: getRandomKey(), songName: '冠军相'},
  {id: getRandomKey(), songName: '分割线'},
  {id: getRandomKey(), songName: 'Young Lover'},
] as SongModel[]

const OriginBoardSlice = createSlice({
  name: 'OriginBoardSlice',
  initialState,
  reducers: {}
})

export default OriginBoardSlice