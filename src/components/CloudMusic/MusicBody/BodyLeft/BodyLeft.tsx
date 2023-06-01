import React from 'react';
import Style from './BodyLeft.module.css'

const BodyLeft = (props: BodyLeftProps) => {
  return (
    <div className={props.className}>

    </div>
  );
};

interface BodyLeftProps {
  className?: string
}

export default BodyLeft;