import React, {useCallback, useState} from 'react';
import Style from './ReturnTop.module.css'

const ReturnTop = (props: ReturnTopProps) => {

  return (
    <div className={Style.returnTop} onClick={props.onClick}>
      <div className={Style.icon}>^</div>
      <div className={Style.top}>TOP</div>
    </div>
  );
};

type ReturnTopProps = {
  onClick: () => void
}

export default ReturnTop;