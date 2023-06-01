import React, {useCallback, useEffect, useState} from 'react';
import Style from './CarouselImg.module.css'
import {useAppSelector} from "../../../../hooks/redux_hooks";

const CarouselImg = () => {
  const imgData = useAppSelector(state => state.CarouselImgData)

  const [crsIndex, setCrsIndex] = useState(0)
  const [showTrans, setShowTrans] = useState(1)


  // 开启轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCrsIndex(prevState => {
        return ++prevState === imgData.length ? 0 : prevState
      })
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [imgData, crsIndex])

  // 开启过渡效果
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowTrans(2)
    }, 4000)

    const timer2 = setTimeout(() => {
      setShowTrans(3)
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [crsIndex])

  const selectCrsIndexHandler = useCallback((index: number) => {
    return () => {
      setCrsIndex(index)
      setShowTrans(1) // 重置过渡效果
    }
  }, [])

  const nextCrsIndexHandler = useCallback((count: number) => {
    return () => {
      setCrsIndex(prevState => {
        const current = prevState + count
        if (current < 0) {
          return imgData.length - 1
        } else if (current === imgData.length) {
          return 0
        } else {
          return current
        }
      })
      setShowTrans(1) // 重置过渡效果
    }
  }, [imgData.length])

  const getImgTrans = (): string => {
    if (showTrans === 2) {
      return Style.imgTransB
    } else if (showTrans === 3) {
      return Style.imgTransC
    } else {
      return Style.imgTransA
    }
  }

  return (
    <div className={Style.carouselImg}>
      <div className={Style.blurImgBox}>
        <img className={Style.blurImg}
             src={imgData[crsIndex]}
             alt=""/>
      </div>

      <div className={Style.crsMainBox}>

        <div className={Style.imgBox}>
          <a href="/#">
            <img className={`${Style.crsImg} ${getImgTrans()}`} src={imgData[crsIndex]} alt=""/>
          </a>

          <div className={Style.indicator}>
            <div onClick={selectCrsIndexHandler(0)} className={crsIndex === 0 ? Style.indicatorSelected : ''}></div>
            <div onClick={selectCrsIndexHandler(1)} className={crsIndex === 1 ? Style.indicatorSelected : ''}></div>
            <div onClick={selectCrsIndexHandler(2)} className={crsIndex === 2 ? Style.indicatorSelected : ''}></div>
            <div onClick={selectCrsIndexHandler(3)} className={crsIndex === 3 ? Style.indicatorSelected : ''}></div>
            <div onClick={selectCrsIndexHandler(4)} className={crsIndex === 4 ? Style.indicatorSelected : ''}></div>
            <div onClick={selectCrsIndexHandler(5)} className={crsIndex === 5 ? Style.indicatorSelected : ''}></div>
            <div onClick={selectCrsIndexHandler(6)} className={crsIndex === 6 ? Style.indicatorSelected : ''}></div>
            <div onClick={selectCrsIndexHandler(7)} className={crsIndex === 7 ? Style.indicatorSelected : ''}></div>
          </div>
        </div>

        <div className={Style.dlInfo}>
          <a className={Style.dlButton} href="/#"><span></span></a>
          <span className={Style.dlText}>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </div>

        <div onClick={nextCrsIndexHandler(-1)} className={Style.arrl}></div>
        <div onClick={nextCrsIndexHandler(1)} className={Style.arrr}></div>
      </div>
    </div>
  );
};

export default CarouselImg;