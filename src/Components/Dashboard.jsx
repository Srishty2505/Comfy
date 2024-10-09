import { signOut } from 'firebase/auth';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {auth} from "../firebase"


function Dashboard() {
  const userDatas = useLocation();
   const {displayName, email } = userDatas.state;
   const navigate = useNavigate()
  

    async function handleLogout()
   {
    try {
      await signOut(auth);
      // Redirect to login page after successful logout
      navigate("/");
    }
     catch (error) {
      console.error("Error signing out: ", error);
     }
   }
  return (
    <>
    <div className="greeting">
        <h2>
          Hello <em>{displayName}</em>
        </h2>
        <h4>
          You registered with the email <em>{email}</em>
        </h4>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}

export default Dashboard