import React from 'react';
import Style from './ExtraSupport.module.css'

const ExtraSupport = () => {
  return (
    <ul className={Style.supportList}>
      <li>
        <a href="/#" className={Style.openPlatform}></a>
        <span>音乐开放平台</span>
      </li>
      <li>
        <a href="/#" className={Style.trade}></a>
        <span>云村交易所</span>
      </li>
      <li>
        <a href="/#" className={Style.studio}></a>
        <span>Amped Studio</span>
      </li>
      <li>
        <a href="/#" className={Style.userAuth}></a>
        <span>用户认证</span>
      </li>
      <li>
        <a href="/#" className={Style.musicPlatform}></a>
        <span>音乐交易平台</span>
      </li>
      <li>
        <a href="/#" className={Style.reward}></a>
        <span>打赏</span>
      </li>
      <li>
        <a href="/#" className={Style.videoPrize}></a>
        <span>视频激励</span>
      </li>
    </ul>
  );
};

export default ExtraSupport;