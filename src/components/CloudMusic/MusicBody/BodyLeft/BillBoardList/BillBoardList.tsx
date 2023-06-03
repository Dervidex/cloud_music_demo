import React from 'react';
import Style from './BillBoard.module.css'
import BillBoard from "./BillBoard/BillBoard";
import {useAppSelector} from "../../../../../hooks/redux_hooks";
import {stat} from "fs";

const BillBoardList = () => {
  const originData = useAppSelector(state => state.OriginBoardData)

  return (
    <div>
      <BillBoard boardName={'原创榜'} songList={originData}/>
    </div>
  );
};

export default BillBoardList;