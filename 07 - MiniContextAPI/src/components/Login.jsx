import React, { useContext, useState } from 'react'
import { userContext } from '../Context/userContext'

function Login() {
    const {setUser} =useContext(userContext)

    const [username,setUsername] =useState("")
    const [Password,setPassword] =useState("")

    function handleBtn(){
        setUser({username,Password})
    }

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder='Enter Your Name...' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      &nbsp; &nbsp;
      <input type="password" placeholder='Enter Your Password' value={Password} onChange={(e)=>setPassword(e.target.value)}/>
      &nbsp; &nbsp;
      <button onClick={handleBtn}>Submit</button>
    </>
  )
}

export default Login
