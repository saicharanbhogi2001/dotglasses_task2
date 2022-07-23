import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='home'>
        <div className='hleft'>
            <h4>DOT Glasses</h4>
            <h1>A Radical Solution<br/>
            for prescription<br/>
            eyeglasses</h1>
        <button className='bbutton' style={{background:"green",color:"white"}}>Know more</button>

        </div>
        <div className='hright'>
            <img src="https://dotglasses.org/wp-content/uploads/2020/11/banner-cheap-adjustable-eyeglasses-for-poor.png" alt="" />
        </div>
    </div>
  )
}
export default Home