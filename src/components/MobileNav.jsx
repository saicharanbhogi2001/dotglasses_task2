import {React,useState} from 'react'
import './Mobilenav.css'

import {GiHamburgerMenu} from 'react-icons/gi'
function MobileNav() {
    var [state,setState]=useState(false);
    function show()
    {
        setState(!state)
    }
  return (
    <div className='mobilenav'>
        <GiHamburgerMenu onClick={show} style={{fontSize:"26px"}} className="hamberger"/>
        <div className={state? 'mobilebox active':"mobilebox"}>
                <img src="https://dotglasses.org/wp-content/uploads/2020/07/logo.png" alt=""></img>

                <ul>
                    <li>Home
                        >
                    </li>
                    <li>solution
                        >
                    </li>
                    <li>where we work
                        >
                    </li>
                    <li>About us
                        >
                    </li>
                </ul>
                <button className="but">contact</button>
            
        </div>
    </div>
  )
}

export default MobileNav