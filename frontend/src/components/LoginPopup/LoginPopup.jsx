import React, { useContext, useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const LoginPopup = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext);

    const[currentState,setCurrentState]= useState("Login");
    const [data,setData] = useState({
      name:"",
      email:"",
      password:"",

    });

    const onChanheHandler= (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event)=>{
      event.preventDefault();
      let newUrl = url
      if(currentState==='Login'){
        newUrl +="/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl,data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
        toast.success(response.data.message)
      }else{
        toast.error("An error occured")
      }
    }
   
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
           {
            currentState==="Sign Up" ? 
             <input name='name' onChange={onChanheHandler} value={data.name} type="text" placeholder='Enter your name'  required />
             : <></>
           }
            <input name='email' onChange={onChanheHandler} value={data.email} type="email" placeholder='your email'  required />
            <input name='password' onChange={onChanheHandler} value={data.password} type="password" placeholder='enter password'  required />
        </div>
        <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
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
