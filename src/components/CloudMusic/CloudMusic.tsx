import React from 'react';
import Style from './CloudMusic.module.css'
import MusicHeader from "./MusicHeader/MusicHeader";
import MusicBody from "./MusicBody/MusicBody";
import MusicFooter from "./MusicFooter/MusicFooter";

const CloudMusic = () => {
  return (
    <div>
      <MusicHeader />
      <MusicBody />
      <MusicFooter />
    </div>
  );
};

export default CloudMusic;