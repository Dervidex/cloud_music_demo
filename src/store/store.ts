import {configureStore} from "@reduxjs/toolkit";
import CarouselImgSlice from "./reducer/CarouselImgSlice";
import SingerSlice from "./reducer/SingerSlice";
import DjSlice from "./reducer/DjSlice";
import RecommendSlice from "./reducer/RecommendSlice";

const store = configureStore({
  reducer: {
    'CarouselImgData' : CarouselImgSlice.reducer,
    'SingerData' : SingerSlice.reducer,
    'DjData' : DjSlice.reducer,
    'RecommendData' : RecommendSlice.reducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch