import React, {useCallback, useRef, useState} from 'react';
import Style from './CloudMusic.module.css'
import MusicHeader from "./MusicHeader/MusicHeader";
import MusicBody from "./MusicBody/MusicBody";
import MusicFooter from "./MusicFooter/MusicFooter";
import ReturnTop from "./ReturnTop/ReturnTop";
import MusicPlayerBar from "./MusicPlayerBar/MusicPlayerBar";

const CloudMusic = () => {
  const [showTop, setShowTop] = useState(false)

  const divRef = useRef(null)

  const toggleTopHandler = (e: any) => {
    if (e.target.scrollTop < 1) {
      setShowTop(false)
    } else {
      setShowTop(true)
    }
  }

  const turnTopHandler = () => {
    (divRef.current as any).scrollTop = 0
  }

  return (
    <div ref={divRef} onScroll={toggleTopHandler} className={Style.cloudMusic}>
      <MusicHeader />
      <MusicBody />
      <MusicFooter />

      {showTop && <ReturnTop onClick={turnTopHandler}/>}

      <MusicPlayerBar />
    </div>
  );
};

export default CloudMusic;