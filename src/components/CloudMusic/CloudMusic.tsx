import React, {useRef} from 'react';
import Style from './CloudMusic.module.css'
import MusicHeader from "./MusicHeader/MusicHeader";
import MusicBody from "./MusicBody/MusicBody";
import MusicFooter from "./MusicFooter/MusicFooter";
import ReturnTop from "./ReturnTop/ReturnTop";

const CloudMusic = () => {
  const divRef = useRef(null)
  const changeHandler = () => {
    console.log((divRef.current as any).scrollTop);
  }
  return (
    <div onScroll={changeHandler} ref={divRef} className={Style.cloudMusic}>
      <MusicHeader />
      <MusicBody />
      <MusicFooter />

      <ReturnTop />
    </div>
  );
};

export default CloudMusic;