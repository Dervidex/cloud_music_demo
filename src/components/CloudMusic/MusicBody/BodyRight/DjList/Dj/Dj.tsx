import React from 'react';
import Style from './Dj.module.css'
import {DjModel} from "../../../../../../type";

const Dj = (props: DjProps) => {
  const {imgUrl, name, profile} = props;
  return (
    <div className={Style.dj}>



      <a href="/#"><img src={imgUrl} alt=""/></a>
      <div className={Style.descBox}>
        <a className={Style.name} href={'/#'}>{name}</a>
        <span className={Style.profile}>{profile}</span>
      </div>
    </div>
  );
};

type DjProps = DjModel

export default Dj;