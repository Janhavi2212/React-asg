import React from 'react'

const LoginMessage = ({isLoggedIn}) => {
  return (
    <div>
        <h2>Log in Message</h2>
        <br/>
        {isLoggedIn?"Welcome back,User!":"Please Log in"}
    </div>
  )
}

export default LoginMessage