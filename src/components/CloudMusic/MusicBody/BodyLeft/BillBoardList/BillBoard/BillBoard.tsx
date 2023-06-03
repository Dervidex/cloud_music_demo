import React, {useCallback, useState} from 'react';
import Style from './BillBoard.module.css'
import {SongModel} from "../../../../../../type";
import titleIcon1 from '../../../../../../assets/billboard/1.jpg';
import titleIcon2 from '../../../../../../assets/billboard/2.jpg';
import titleIcon3 from '../../../../../../assets/billboard/3.jpg';

const BillBoard = (props: BillBoardProps) => {
  const oprFlag = new Array(props.songList.length).fill(false) as boolean[]
  const [showOpr, setShowOpr] = useState(oprFlag)

  const showOprHandler = useCallback((index: number) => {
    return () => {
      setShowOpr(prevState => {
        const newData = [...prevState]
        newData[index] = true
        return newData
      })
    }
  }, [])

  const hiddenOprHandler = useCallback((index: number) => {
    return () => {
      setShowOpr(prevState => {
        const newData = [...prevState]
        newData[index] = false
        return newData
      })
    }
  }, [])

  const dataList = props.songList.map((item, index) => {
    return (
      <li onMouseOver={showOprHandler(index)} onMouseLeave={hiddenOprHandler(index)}
          key={item.id} className={`${index % 2 === 0 ? Style.backColor2 : Style.backColor1} ${Style.songItem}`}>
        <div
          className={`${index === 0 || index === 1 || index === 2 ? Style.topNumber : Style.number}`}>{index + 1}</div>
        <a title={item.songName}
           className={`${Style.songName} ${showOpr[index] ? Style.changeSongName : Style.recoverSongName}`}
           href="/#">{item.songName}</a>
        <div className={`${Style.operateIcon} ${showOpr[index] ? Style.showOperateIcon : Style.hiddenOperationIcon}`}>
          <a className={Style.playIcon2} href="/#" title={'播放'}></a>
          <a className={Style.addIcon} href="/#" title={'添加到播放列表'}></a>
          <a className={Style.starIcon2} href="/#" title={'收藏'}></a>
        </div>
      </li>
    )
  })

  const getTitleIcon = () => {
    switch (props.boardName) {
      case '飙升榜' :
        return titleIcon1
      case '新歌榜' :
        return titleIcon2
      case '原创榜' :
        return titleIcon3
    }
  }

  return (
    <div className={`${Style.billBoard}`}>
      <ul className={Style.dataList}>
        <li className={`${Style.titleLi} ${Style.backColor1}`}>
          <div className={Style.titleBox}>
            <div className={Style.titleIcon}>
              <img src={getTitleIcon()} alt={''}/>
              <a className={Style.cover} title={props.boardName} href="/#"></a>
            </div>
            <a href="/#" className={Style.title} title={props.boardName}>{props.boardName}</a>
            <a href="/#" className={Style.playIcon} title={'播放'}></a>
            <a href="/#" className={Style.starIcon} title={'收藏'}></a>
          </div>
        </li>

        {dataList}

        <li className={Style.backColor2}><a href={'/#'} className={Style.all}>查看全部&gt;</a></li>
      </ul>
    </div>
  );
};

type BillBoardProps = {
  boardName: string
  songList: SongModel[]
}
export default BillBoard;