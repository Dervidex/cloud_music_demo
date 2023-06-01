import React from 'react';
import Style from './Singer.module.css'
import {SingerModel} from "../../../../../../type";

const Singer = (props: SingerProps) => {
  const {imgUrl, name, profile} = props;
  return (
    <a  href={'#'} style={{textDecoration: "none", color: "black"}}>
      <div className={Style.singer}>
        <img src={imgUrl} alt={''}/>
        <div className={Style.descBox}>
          <div className={Style.name}>{name}</div>
          <p className={Style.profile}>{profile}</p>
        </div>
      </div>
    </a>
  );
};

type SingerProps = SingerModel

export default Singer;