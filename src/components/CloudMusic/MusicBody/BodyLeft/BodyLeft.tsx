import React from 'react';
import Style from './BodyLeft.module.css'
import RecommendList from "./RecommendList/RecommendList";
import NewAlbumList from "./NewAlbumList/NewAlbumList";
import BillBoardList from "./BillBoardList/BillBoardList";

const BodyLeft = (props: BodyLeftProps) => {
  return (
    <div className={`${props.className} ${Style.bodyLeft}`}>
      <RecommendList />

      <NewAlbumList />

      {/*<BillBoardList />*/}
    </div>
  );
};

interface BodyLeftProps {
  className?: string
}

export default BodyLeft;