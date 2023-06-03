import React from 'react';
import Style from './BillBoardList.module.css'
import BillBoard from "./BillBoard/BillBoard";
import {useAppSelector} from "../../../../../hooks/redux_hooks";
import TitleBar from "../../../../UI/TitleBar/TitleBar";

const BillBoardList = () => {
  const originData = useAppSelector(state => state.OriginBoardData)
  const soarData = useAppSelector(state => state.SoarBoardData)
  const newestData = useAppSelector(state => state.NewestBoardData)

  return (
    <div className={Style.billBoardList}>
      <TitleBar title={'榜单'} />

      <ul className={Style.boardList}>
        <li><BillBoard boardName={'飙升榜'} songList={soarData}/></li>
        <li><BillBoard boardName={'新歌榜'} songList={newestData}/></li>
        <li><BillBoard boardName={'原创榜'} songList={originData}/></li>
      </ul>
    </div>
  );
};

export default BillBoardList;