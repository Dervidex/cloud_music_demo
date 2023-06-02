import React from 'react';
import Style from './RecommendList.module.css'
import TitleBar from "../../../../UI/TitleBar/TitleBar";
import {useAppSelector} from "../../../../../hooks/redux_hooks";
import Recommend from "./Recommend/Recommend";

const RecommendList = () => {
  const recommendData = useAppSelector(state => state.RecommendData)

  const mapped =recommendData.map(item => {
    return <li key={item.id}><Recommend  {...item} /></li>
  })

  return (
    <div className={Style.recommendList}>
      <TitleBar title={'热门推荐'} showGenre={true}/>

      <ul className={Style.contentList}>
        {mapped}
      </ul>
    </div>
  );
};

export default RecommendList;