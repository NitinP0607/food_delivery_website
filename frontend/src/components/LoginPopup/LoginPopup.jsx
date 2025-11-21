import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const[currentState,setCurrentState]= useState("Sign Up");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
           {
            currentState==="Sign Up" ? 
             <input type="text" placeholder='your name'  required />
             : <></>
           }
            <input type="email" placeholder='your email'  required />
            <input type="password" placeholder='enter password'  required />
        </div>
        <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continue, i agree to the trerms of use & privacy.</p>
            {
                currentState==="Login" ?
                <p>Create a new account <span onClick={()=>setCurrentState("Sign Up")}>click here</span></p>
                :
                 <p>Already have an account ? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
            
           
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
