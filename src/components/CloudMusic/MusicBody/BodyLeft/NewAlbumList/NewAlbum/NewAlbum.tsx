import React, {useRef} from 'react';
import Style from './NewAlbum.module.css'
import {NewAlbumModel} from "../../../../../../type";

const NewAlbum = (props: NewAlbumProps) => {
  const {author, imgUrl, title} = props;

  const playRef = useRef(null)

  const showPlayIconHandler = () => {
    (playRef.current as any).style.display = 'inline-block'
  }

  const hiddenPlayIconHandler = () => {
    (playRef.current as any).style.display = 'none'
  }

  return (
    <div className={Style.newAlbum}>
      <div className={Style.imgBox}>
        <img className={Style.albumImg} src={imgUrl} alt=""/>
        <a onMouseOver={showPlayIconHandler} onMouseLeave={hiddenPlayIconHandler} className={Style.cover} href="/#"
           title={title}></a>
        <a title={'播放'} onMouseOver={showPlayIconHandler} onMouseLeave={hiddenPlayIconHandler} ref={playRef}
           className={Style.playIcon} href="/#"></a>
      </div>
      <div className={Style.descBox}>
        <a href="/#" title={title}>
          <div className={Style.title}>{title}</div>
        </a>
        <a href={'/#'} title={author}>
          <div className={Style.author}>{author}</div>
        </a>
      </div>
    </div>
  );
};

type NewAlbumProps = NewAlbumModel

export default NewAlbum;