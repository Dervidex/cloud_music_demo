import React, {useEffect, useState} from 'react';
import Style from './MusicPlayerBar.module.css'
import ReactDOM from "react-dom";

const barRoot = document.getElementById('bar-root') as HTMLElement

const MusicPlayerBar = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [isLock, setIsLock] = useState(false)
  const [currentBarOffsetX, setCurrentBarOffsetX] = useState(0)
  const [isAllowMove, setIsAllowMove] = useState(false)
  const [, setClientXOffset] = useState(0)
  const [nowTime, setNowTime] = useState('00:00')
  const allTime = 300

  useEffect(() => {
    const t = Math.ceil(currentBarOffsetX / 466 * allTime)
    const time =
      new Date(0, 0, 0, 0, 0, t)
        .toLocaleString('zh-CN', {minute: "numeric", second: "numeric"})

    setNowTime(time)
  }, [currentBarOffsetX])

  const hiddenBarHandler = () => {
    if (isLock) return
    setIsHidden(true)
  }
  // const hiddenBarAndDenyMoveHandler = () => {
  //   setIsAllowMove(false)
  //   hiddenBarHandler()
  // }
  const showBarHandler = () => {
    if (isLock) return
    setIsHidden(false)
  }

  const toggleBarHandler = () => {
    setIsLock(prevState => !prevState)
  }

  const changeCurrentBarPositionHandler = (e: any) => {
    const parentOffsetLeft = e.target.offsetParent.offsetLeft
    const result = e.clientX - parentOffsetLeft
    setCurrentBarOffsetX(() => result)
    setClientXOffset(e.clientX)
  }

  const dragBtnDownHandler = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    setIsAllowMove(() => true)
  }
  const dragBtnMoveHandler = (e: any) => {

      setClientXOffset(clientXState => {

        if (clientXState !== 0) {
          setCurrentBarOffsetX(offsetXState => {
            const move = e.clientX - clientXState
            // 如果当前播放条已达到总长度，禁止往前滑动
            if (offsetXState >= 466 && move >= 0) {
              return 466
            } else if (offsetXState <= 0 && move <= 0) {
              return 0
            } else return offsetXState + move

          })
        }

        return e.clientX
      })

  }
  const dragBtnUpHandler = (e: any) => {
    setIsAllowMove(() => false)
  }

  // const dragBtnLeaveHandler = () => {
  //   setIsAllowMove(() => false)
  // }

  return ReactDOM.createPortal((
    <div onMouseUp={dragBtnUpHandler}
         onMouseMove={isAllowMove?dragBtnMoveHandler:undefined}
         onMouseOver={showBarHandler}
         onMouseLeave={hiddenBarHandler}
         className={`${Style.musicPlayerBar} ${isHidden ? Style.hiddenBar : Style.showBar} ${isLock ? Style.lockBar : ''}`}>

      <div className={Style.expandBar}></div>

      <div className={Style.bar}>
        <div className={Style.playOpr}>
          <a className={Style.prevIcon} href="/#" title={'上一首'}></a>
          <a className={Style.playIcon} href="/#" title={'播放'}></a>
          <a className={Style.nextIcon} href="/#" title={'下一首'}></a>
        </div>

        <div className={Style.maskBox}>
          <img className={Style.maskImg} src="/playerMask/1.jpg" alt=""/>
          <a className={Style.mask} href="/#"></a>
        </div>

        <div className={Style.playerWrapper}>
          <div>
            <a href={'/#'} className={Style.songName}>Touch (2021 Epilogue) [feat. Paul Williams]</a>
            <a href={'/#'} className={Style.singer}>Daft Punk</a>
          </div>

          <div
            className={Style.player}
            onMouseDown={changeCurrentBarPositionHandler}>
            <div className={Style.totalBar}/>
            <div
              style={{width: currentBarOffsetX}}
              className={Style.currentBar}>
              <div
                onMouseDown={dragBtnDownHandler}
                onMouseUp={dragBtnUpHandler}
                className={Style.dragBtn}>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.timeWrapper}>
          <span className={Style.nowTime}>{nowTime}</span>
          &nbsp;/&nbsp;
          <span className={Style.allTime}>05:00</span>
        </div>

        <div className={Style.opr2}>
          <a className={Style.pipLyric} href="/#" title={'画中画歌词'}/>
          <a className={Style.start} href="/#" title={'收藏'}/>
          <a className={Style.share} href="/#" title={'分享'}/>
        </div>

        <div className={Style.opr3}>
          <a className={Style.sound} href="/#" title={'声音'}/>
          <a className={Style.roll} href="/#" title={'单曲循环'}/>
          <a className={Style.songList} href="/#" title={'播放列表'}>22</a>
        </div>
      </div>

      <div className={Style.lock}>
        <a onClick={toggleBarHandler} className={`${isLock ? Style.lockIcon : Style.unlockIcon}`} href="/#"></a>
      </div>

    </div>
  ), barRoot)
};

export default MusicPlayerBar;