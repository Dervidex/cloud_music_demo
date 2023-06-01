import React from 'react';
import Style from './DjList.module.css'
import {useAppSelector} from "../../../../../hooks/redux_hooks";
import Dj from "./Dj/Dj";
const DjList = () => {
  const DjData = useAppSelector(state => state.DjData)

  const mapped = DjData.map(item => {
    return <Dj key={item.id} {...item} />
  })

  return (
    <div className={Style.djList}>

      <div className={Style.title}>
        热门主播
      </div>

      {mapped}
    </div>
  );
};

export default DjList;