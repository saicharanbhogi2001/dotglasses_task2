import React from 'react'
import './Bhome.css'
function Bhome() {
  return (
    <div className='bhome'>
        <div className='bhleft'>
            <h1>DOT Glasses is the first sustainable<br/> solution to the world's vision problem</h1>
            <ul>
                <li> Adjustable one-size-fits-all eyeglasses</li>
                <li>A transformational lens concept</li>
                <li>Simple proprietary vision testing tools</li>
                <li>Easy 60-minute training to prepare anyone to provide basic vision care</li>
                <button className='bbutton'>Know more</button>
            </ul>  
        </div>
        <div className='bhright'>
            <img src="https://www.dotglasses.org/wp-content/uploads/2020/11/women-dotglasses.png" alt="" />
            
        </div>

    </div>
  )
}

export default Bhome