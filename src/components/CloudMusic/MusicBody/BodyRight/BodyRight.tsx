import React from 'react';
import Style from './BodyRight.module.css'
import LoginTips from "./LoginTips/LoginTips";
import SingerList from "./SingerList/SingerList";
import DjList from "./DjList/DjList";

const BodyRight = (props: BodyRightProps) => {
  return (
    <div className={`${props.className} ${Style.bodyRight}`}>
      <LoginTips />
      <SingerList />
      <DjList />
    </div>
  );
};

interface BodyRightProps {
  className?: string
}

export default BodyRight;