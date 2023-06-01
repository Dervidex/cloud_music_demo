import React from 'react';
import Style from './MusicBody.module.css'
import CarouselImg from "./CarouselImg/CarouselImg";
import BodyLeft from "./BodyLeft/BodyLeft";
import BodyRight from "./BodyRight/BodyRight";

const MusicBody = () => {
  return (
    <div >
      <CarouselImg />
      <div className={Style.bodyBox}>
        <BodyLeft className={Style.bodyLeft}/>
        <BodyRight className={Style.bodyRight}/>
      </div>

    </div>
  );
};

export default MusicBody;