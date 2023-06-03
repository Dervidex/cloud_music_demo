import React from 'react';
import Style from './BillBoard.module.css'
import {SongModel} from "../../../../../../type";
import titleIcon1 from '../../../../../../assets/billboard/1.jpg';
import titleIcon2 from '../../../../../../assets/billboard/2.jpg';
import titleIcon3 from '../../../../../../assets/billboard/3.jpg';

const BillBoard = (props: BillBoardProps) => {

  const dataList = props.songList.map((item, index) => {
    return (
      <li key={item.id} className={`${index%2===0? Style.backColor2 : Style.backColor1}`}>
        <span>{index+1}</span>
        <span>{item.songName}</span>
      </li>
    )
  })

  const getTitleIcon = () => {
    switch (props.boardName) {
      case '飙升榜' : return titleIcon1
      case '新歌榜' : return titleIcon2
      case '原创榜' : return titleIcon3
    }
  }

  return (
    <div className={Style.billBoard}>
      <ul className={Style.dataList}>
        <li className={`${Style.titleLi} ${Style.backColor1}`}>
          <div className={Style.titleBox}>
            <div className={Style.titleIcon}>
              <img src={getTitleIcon()}  alt={''}/>
              <a className={Style.cover} title={props.boardName} href="/#" ></a>
            </div>
            <a href="/#" className={Style.title} title={props.boardName}>{props.boardName}</a>
            <a href="/#" className={Style.playIcon}></a>
            <a href="/#" className={Style.starIcon}></a>
          </div>
        </li>

        {dataList}

        <li><span>查看全部</span></li>
      </ul>
    </div>
  );
};

type BillBoardProps = {
  boardName: string
  songList: SongModel[]
}
export default BillBoard;