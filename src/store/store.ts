import {configureStore} from "@reduxjs/toolkit";
import CarouselImgSlice from "./reducer/CarouselImgSlice";
import SingerSlice from "./reducer/SingerSlice";
import DjSlice from "./reducer/DjSlice";
import RecommendSlice from "./reducer/RecommendSlice";
import NewAlbumSlice from "./reducer/NewAlbumSlice";
import OriginBoardSlice from "./reducer/OriginBoardSlice";

const store = configureStore({
  reducer: {
    'CarouselImgData' : CarouselImgSlice.reducer,
    'SingerData' : SingerSlice.reducer,
    'DjData' : DjSlice.reducer,
    'RecommendData' : RecommendSlice.reducer,
    'NewAlbumData' : NewAlbumSlice.reducer,
    'OriginBoardData' : OriginBoardSlice.reducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch