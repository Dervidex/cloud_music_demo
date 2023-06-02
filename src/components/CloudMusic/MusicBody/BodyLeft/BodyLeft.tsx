import React from 'react';
import Style from './BodyLeft.module.css'
import RecommendList from "./RecommendList/RecommendList";

const BodyLeft = (props: BodyLeftProps) => {
  return (
    <div className={`${props.className} ${Style.bodyLeft}`}>
      <RecommendList />
    </div>
  );
};

interface BodyLeftProps {
  className?: string
}

export default BodyLeft;