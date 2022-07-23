import React from 'react'
import './Video.css';
import {AiFillPlayCircle} from 'react-icons/ai'
import Spects from 'C:/Users/DELL/dotglasses/dotglasses/src/images/spects1.png'
function Video() {
  return (
    <div className='video'>
        <img src={Spects} className="img" alt="" />
        <div className='play'>
            <AiFillPlayCircle style={{fontSize:"35px",cursor:"pointer"}}/>
        </div>
    </div>
  )
}

export default Video;