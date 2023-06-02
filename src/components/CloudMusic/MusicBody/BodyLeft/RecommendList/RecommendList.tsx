import React from 'react';
import Style from './RecommendList.module.css'
import TitleBar from "../../../../UI/TitleBar/TitleBar";

const RecommendList = () => {
  return (
    <div>
      <TitleBar title={'热门推荐'} showGenre={true}/>
    </div>
  );
};

export default RecommendList;