import React from 'react';
import Style from './SingerList.module.css'
import {useAppSelector} from "../../../../../hooks/redux_hooks";
import Singer from "./Singer/Singer";

const SingerList = () => {
  const singerData = useAppSelector(state => state.SingerData)

  const mapped = singerData.map(item => {
    return <Singer key={item.id} {...item} />
  })

  return (
    <div className={Style.singerList}>
      <div className={Style.title}>
        <div>入驻歌手</div>
        <a href="/#">查看全部&nbsp;&gt;</a>
      </div>

      <div>
        {mapped}
      </div>

      <div className={Style.recommend}>

        <a href="#" style={{textDecoration: "none", color: "black"}}>
          申请成为网易云音乐人
        </a>
      </div>

    </div>
  );
};

export default SingerList;