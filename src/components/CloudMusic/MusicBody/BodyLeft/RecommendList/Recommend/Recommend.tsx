import React, {useCallback} from 'react';
import Style from './Recommend.module.css'
import {RecommendModel} from "../../../../../../type";

const Recommend = (props: RecommendProps) => {
  const {click, imgUrl, profile} = props;
  const isTop = !!props.isTop
  const tagType = props.tagType ? props.tagType : 0

  const getTagTypeStyle = useCallback((tagType: number) => {
    let tagTypeStyle = ''
    switch (tagType) {
      case 1:
        tagTypeStyle = Style.tagType1
        break
      default:
    }
    return tagTypeStyle
  },[])

  return (
    <div>
      <div className={Style.imgBox}>
        <img className={Style.img} src={imgUrl} alt=""/>
        {isTop && <sup className={Style.topIcon}></sup>}
        <a className={Style.cover} href="/#" title={profile}></a>

        <div className={Style.clickBox}>
          <span className={Style.earIcon}></span>
          <span className={Style.click}>{click}</span>
          <a href="/#" title={'播放'} className={Style.playerIcon}></a>
        </div>
      </div>

      <a href="/#" className={Style.profile} title={profile}>
        <sup className={`${getTagTypeStyle(tagType)}`}></sup>
        {profile}
      </a>
    </div>
  );
};

type RecommendProps = RecommendModel

export default Recommend;