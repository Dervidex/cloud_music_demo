import React from 'react';
import Style from './TitleBar.module.css'

const TitleBar = (props: TitleBarProps) => {
  const showGenre = !!props.showGenre
  return (
    <div className={Style.titleBar}>
      <div className={Style.titleBox}>
        <a href="/#"><div className={Style.title}>{props.title}</div></a>
        {showGenre && <div className={Style.genre}>
            <a href="/#">华语</a>
            <span>|</span>
            <a href="/#">流行</a>
            <span>|</span>
            <a href="/#">摇滚</a>
            <span>|</span>
            <a href="/#">民谣</a>
            <span>|</span>
            <a href="/#">电子</a>
        </div>}
      </div>
      <a href="/#"><span className={Style.more}>更多<sub></sub></span></a>
    </div>
  );
};

type TitleBarProps = {
  title: string,
  showGenre?: boolean
}

export default TitleBar;