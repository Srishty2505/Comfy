import React, { useState } from 'react'
import {signInWithEmailAndPassword  } from "firebase/auth";
import '../App.css'
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom';


function Login() {
// LOGIN CODE HERE

const [loginData ,setLoginData] =useState({
  loginemail:"",
  loginpassword:""  
})
const navigate = useNavigate();
const { loginemail, loginpassword } = loginData;


const postLoginData =(e)=>
{
  const { name, value } = e.target;
  setLoginData({ ...loginData, [name]: value });
}
async function handleSubmit(e) {
  e.preventDefault();

  const logInUser = await signInWithEmailAndPassword(
    auth,
    loginData.loginemail,
    loginData.loginpassword
  );
  if (logInUser) {
    const user = logInUser.user;
    const { userid, displayName, email } = user;
    navigate("/dashboard", { state: { userid, displayName, email } });
  }
}




    return (
      <>
      <div className='contactpage'>
      <div className="login">
        <h2>Login here</h2>

        <form action="" method="POST" className="loginpage" onSubmit={handleSubmit}>
          <input type="email" value={loginData.loginemail} name='loginemail' placeholder="Enter your email" onChange={postLoginData}/>
          <br />
          <input name="loginpassword" value={loginData.loginpassword}   placeholder="Enter your password" id="" onChange={postLoginData}></input>
         <br/>
          <button type="submit">Login</button>
          </form>
          </div>
      </div>
      </>
    );
  }

export default Login