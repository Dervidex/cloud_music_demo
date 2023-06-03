import {createSlice} from "@reduxjs/toolkit";
import {SongModel} from "../../type";
import getRandomKey from "../../tools/RandomKey";

const initialState = [
  {
    id: getRandomKey(),
    songName: '向云端'
  },
  {
    id: getRandomKey(),
    songName: 'Letting Go (Live版)'
  },{
    id: getRandomKey(),
    songName: '迄今为止的生命里'
  },{
    id: getRandomKey(),
    songName: '想想就烦'
  },{
    id: getRandomKey(),
    songName: '字字句句 (Live版)'
  },{
    id: getRandomKey(),
    songName: '电梯战神'
  },{
    id: getRandomKey(),
    songName: '翠花'
  },{
    id: getRandomKey(),
    songName: 'Ghost Face (鬼脸) (LIVE版)'
  },{
    id: getRandomKey(),
    songName: '你要的全拿走 (Live版)'
  },{
    id: getRandomKey(),
    songName: '假面 (Ghost face)'
  }
] as SongModel[]

const NewestBoardSlice = createSlice({
  name: 'NewestBoardSlice',
  initialState,
  reducers: {

  }
})

export default NewestBoardSlice