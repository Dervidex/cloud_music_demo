import {createSlice} from "@reduxjs/toolkit";

const carouselImgData = [
  '/carousel/1.jpg',
  '/carousel/2.jpg',
  '/carousel/3.jpg',
  '/carousel/4.jpg',
  '/carousel/5.jpg',
  '/carousel/6.jpg',
  '/carousel/7.jpg',
  '/carousel/8.jpg',
]

const CarouselImgSlice = createSlice({
  name: 'CarouselImgSlice',
  initialState: carouselImgData,
  reducers: {

  }
})

export default CarouselImgSlice
