import React, {useCallback, useEffect, useReducer, useState} from 'react';
import Style from './NewAlbumList.module.css'
import TitleBar from "../../../../UI/TitleBar/TitleBar";
import {useAppSelector} from "../../../../../hooks/redux_hooks";
import NewAlbum from "./NewAlbum/NewAlbum";


const NewAlbumList = () => {
  const newAlbumData = useAppSelector(state => state.NewAlbumData)

  const mapped = newAlbumData.map(item => {
    return <li key={item.id}><NewAlbum {...item} /></li>
  })

  const conListReducer = useCallback((prevState: ControlDataModel[], type: string) => {

    const newData = [...prevState]
    let currentIndex = -1
    let right1Index = -1
    let right2Index = -1
    let left1Index = -1
    let left2Index = -1
    // 获取各个位置对应的下标
    newData.forEach((value, index) => {
      if (value.position === 'current') currentIndex = index
      else if (value.position === 'right1') right1Index = index
      else if (value.position === 'right2') right2Index = index
      else if (value.position === 'left2') left2Index = index
      else left1Index = index
    })

    switch (type) {
      case 'right': {
        // 如果left2Index不为1，说明是先点击左再点击右，需要把left2改为right2
        if (left2Index !== -1) {
          newData[left2Index] = {
            position: 'right2',
            style: `${Style.transOff} ${Style.right2}`
          }
          right2Index = left2Index
        }

        // 点击右，current和right1、right2往左走，left1走最右边
        newData[right2Index] = {
          position: 'right1',
          style: `${Style.transOff} ${Style.right1}`
        }
        newData[right1Index] = {
          position: 'current',
          style: `${Style.transOn} ${Style.current}`
        }
        newData[currentIndex] = {
          position: 'left1',
          style: `${Style.transOn} ${Style.left1}`
        }
        newData[left1Index] = {
          position: 'right2',
          style: `${Style.transOff} ${Style.right2}`
        }
        return newData
      }
      case 'left': {
        // 如果right2不为1，说明是先点击右或者默认状态下点击左，需要把right2改为left2
        if (right2Index !== -1) {
          newData[right2Index] = {
            position: 'left2',
            style: `${Style.transOff} ${Style.left2}`
          }
          left2Index = right2Index
        }

        // 点击左，current和left1、left2往右走，right1走最左边
        newData[left2Index] = {
          position: 'left1',
          style: `${Style.transOff} ${Style.left1}`
        }
        newData[left1Index] = {
          position: 'current',
          style: `${Style.transOn} ${Style.current}`
        }
        newData[currentIndex] = {
          position: 'right1',
          style: `${Style.transOn} ${Style.right1}`
        }
        newData[right1Index] = {
          position: 'left2',
          style: `${Style.transOff} ${Style.left2}`
        }
        return newData
      }
      default : return prevState
    }
  }, [])

  const [conList, dispatch] = useReducer(conListReducer, [
    {position: 'left1', style: `${Style.left1}`},
    {position: 'current', style: `${Style.current}`},
    {position: 'right1', style: `${Style.right1}`},
    {position: 'right2', style: `${Style.right2}`}
  ] as ControlDataModel[])

  const [isTurn, setIsTurn] = useState(false)

  useEffect(() => {
    if (isTurn) {
      setTimeout(() => {
        setIsTurn(false)
      }, 1600)
    }
  }, [isTurn])
  const turnHandler = (type: string) => {
    return () => {
      if (isTurn) return
      setIsTurn(true)
      dispatch(type)
    }
  }
  
  return (
    <div className={Style.newAlbumList}>
      <TitleBar title={'新碟上架'}/>

      <div className={Style.wrapper}>
        <div className={Style.dataViewPort}>
          <ul className={`${Style.dataList} ${conList[0].style}`}>
            {mapped.slice(5, newAlbumData.length)}
          </ul>

          <ul className={`${Style.dataList} ${conList[1].style}`}>
            {mapped.slice(0, 5)}
          </ul>

          <ul className={`${Style.dataList} ${conList[2].style}`}>
            {mapped.slice(5, newAlbumData.length)}
          </ul>

          <ul className={`${Style.dataList} ${conList[3].style}`}>
            {mapped.slice(0, 5)}
          </ul>
        </div>
        <sub onClick={turnHandler('left')} className={Style.turnLeft} ></sub>
        <sub onClick={turnHandler('right')} className={Style.turnRight} ></sub>
      </div>


    </div>
  );
};

type ControlDataModel = {
  position: string,
  style: string
}

export default NewAlbumList;