import React from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'

function Loginpage() {
  return (
    <>

<div className='mainboxx'>
<div className='one'>
    <Login/>
    </div>
      
      <div className='reg'>
        <Register/>
      </div>
</div>
   
      
</>
  )
}

export default Loginpage