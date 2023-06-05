import React, {useCallback, useRef, useState} from 'react';
import Style from './CloudMusic.module.css'
import MusicHeader from "./MusicHeader/MusicHeader";
import MusicBody from "./MusicBody/MusicBody";
import MusicFooter from "./MusicFooter/MusicFooter";
import ReturnTop from "./ReturnTop/ReturnTop";

const CloudMusic = () => {
  const [showTop, setShowTop] = useState(false)

  document.onscroll = () => {
    if (document.documentElement.scrollTop < 1) {
      setShowTop(false)
    } else {
      setShowTop(true)
    }
  }


  return (
    <div className={Style.cloudMusic}>
      <MusicHeader />
      <MusicBody />
      <MusicFooter />

      {showTop && <ReturnTop />}
    </div>
  );
};

export default CloudMusic;