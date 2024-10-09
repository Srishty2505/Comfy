import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import '../App.css'
import {auth} from "../firebase"




function Register() {

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    cpassword:""
  });
  let name , value;
  
  const postUserData =(e) => {
    name = e.target.name
    value = e.target.value
    setUserData({ ...userData, [name]: value });
  }
  const { firstName, lastName, email, password, cpassword } = userData;
  
  
  // const postUserData =()
  
  async function registerData(e)
  {
    e.preventDefault();
    
    if (password !== cpassword) {
      setError("Passwords do not match!");
      return;
    }
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      await updateProfile(userCredentials.user, {displayName: userData.firstName})
      console.log(userCredentials);
  }





  return (
   <>
   <div className="register">
        <h2>Register here</h2>
        <form action ="" method='POST' className="registerpage" onSubmit={registerData}>
         <input type="text" value={userData.firstName} placeholder='First Name' name='firstName' onChange={postUserData}/>
         <input type="text" value={userData.lastName} placeholder='Last Name' name='lastName' onChange={postUserData}/>
          <input type="email"value={userData.email} placeholder="Enter your email" name='email' onChange={postUserData}/>
          <br />
          <input type='password' value={userData.password} name="password" placeholder="Enter your password"  id="" onChange={postUserData}></input>
          <br />
          <input type='password' value={userData.cpassword} name="cpassword" placeholder="Confirm your password" id="" onChange={postUserData}></input>
          <br />
          <button type="Register now">Register</button>
        </form>
      </div>
      
   </>
  )
}

export default Register