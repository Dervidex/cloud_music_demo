import React, {useCallback, useState} from 'react';
import Style from './ReturnTop.module.css'



const ReturnTop = () => {



  const scrollTopHandler = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <div className={Style.returnTop} onClick={scrollTopHandler}>
      <div className={Style.icon}>^</div>
      <div className={Style.top}>TOP</div>
    </div>
  );
};

export default ReturnTop;