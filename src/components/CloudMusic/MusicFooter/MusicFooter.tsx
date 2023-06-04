import React from 'react';
import Style from './MusicFooter.module.css'
import ExtraSupport from "./ExtraSupport/ExtraSupport";

const MusicFooter = () => {
  return (
    <div className={Style.musicFooter}>
      <ExtraSupport />
    </div>
  );
};

export default MusicFooter;