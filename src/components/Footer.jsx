import React from 'react'
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';
import {ImLinkedin2} from 'react-icons/im';
import {AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai';
// import {} from 'react-icons'
function Footer() {
  return (
    <div className='footermain'>
        <div className='footer'>
            <div className='part1'>
                <img src='https://dotglasses.org/wp-content/uploads/2020/07/logo.png' alt=''/>

            </div>
            <div className='part1'>
                <h3>OUR SOCIAL CHANNELS</h3>
                <div className='social'>
                    <ImLinkedin2 className='icon'/>
                    <FiInstagram  className='icon'/>
                    <BsFacebook className='icon'/>
                    <AiOutlineTwitter className='icon'/>
                    <AiFillYoutube className='icon'/>


                </div>
                
            </div>
            <div className='part1'>
                <h3 className='h3'>CONTACT US</h3>
                <div className='info'>
                    <p>DOT Glasses headquarters:</p>
                        <a href="info">info@dotglasses.org</a><br/>
                        <p>Country representatives:<br/></p>
                        <a href="contactus">Find your country</a>
                </div>
            </div>
        </div>
        <h3>© 2020 DOT Glasses®. All rights reserved. I Privacy Policy</h3>
    </div>
  )
}

export default Footer