import React, {useCallback, useRef, useState} from 'react';
import Style from './MusicHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const MusicHeader = () => {
  const holderText = '音乐/视频/电台/用户'
  const [holder, setHolder] = useState(holderText)
  const [keyword, setKeyword] = useState('')
  const [selectedTitle, setSelectedTitle] = useState(1)
  const [selectedRec, setSelectedRec] = useState(1)

  const inputRef: React.MutableRefObject<any> = useRef(null)

  const hiddenHolderHandler = useCallback(() => {
    inputRef.current.focus()
    setHolder('')
  }, [])
  const showHolderHandler = useCallback((e: any) => {
    if (!e.target.value)
      setHolder(holderText)
  }, [])
  const keyWordChangeHandler = useCallback((e: any) => {
    setKeyword(e.target.value)
  }, [])


  return (
    <>
      <div className={Style.musicHeaderMain}>
        <a href="/#">
          <div className={Style.topBarLogo}></div>
        </a>

        <div className={Style.headerMainTitle}>
          <div className={selectedTitle === 1 ? Style.titleHover : ''}>
            <span>发现音乐</span>
            {selectedTitle === 1 && <sub className={Style.subCor}>&nbsp;</sub>}
          </div>
          <div className={selectedTitle === 2 ? Style.titleHover : ''}>
            <span>我的音乐</span>
            {selectedTitle === 2 && <sub className={Style.subCor}>&nbsp;</sub>}
          </div>
          <div className={selectedTitle === 3 ? Style.titleHover : ''}>
            <span>关注</span>
            {selectedTitle === 3 && <sub className={Style.subCor}>&nbsp;</sub>}
          </div>
          <div><span>商城</span></div>
          <div><span>音乐人</span></div>
          <div className={`${Style.dlTitle} ${selectedTitle === 4 ? Style.titleHover : ''}`}>
            <span>下载客服端</span>
            {selectedTitle === 4 && <sub className={Style.subCor}>&nbsp;</sub>}
            <sup className={Style.hotTag}>&nbsp;</sup>
          </div>
        </div>

        <div className={Style.searchBox}>
          <div className={Style.searchIcon}><FontAwesomeIcon icon={faSearch}/></div>
          <input onChange={keyWordChangeHandler}
                 onFocus={hiddenHolderHandler} onBlur={showHolderHandler} value={keyword} className={Style.search}
                 ref={inputRef} type="text"/>
          <span onClick={hiddenHolderHandler} className={Style.holder}>{holder}</span>
        </div>

        <div className={Style.creatorTitle}>创作者中心</div>

        <div className={Style.login}>登录</div>
      </div>

      <div className={Style.recommendBar}>
        {selectedTitle === 1 ? <>
          <span className={selectedRec === 1 ? Style.recommendBarHover : ''}>推荐</span>
          <span className={selectedRec === 2 ? Style.recommendBarHover : ''}>排行榜</span>
          <span className={selectedRec === 3 ? Style.recommendBarHover : ''}>歌单</span>
          <span className={selectedRec === 4 ? Style.recommendBarHover : ''}>主播电台</span>
          <span className={selectedRec === 5 ? Style.recommendBarHover : ''}>歌手</span>
          <span className={selectedRec === 6 ? Style.recommendBarHover : ''}>新碟上架</span>
        </> : null}
      </div>
    </>

  );
};

export default MusicHeader;