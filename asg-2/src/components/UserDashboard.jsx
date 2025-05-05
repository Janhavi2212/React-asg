import React from 'react'
import UserProfle from './UserProfle'

const UserDashboard = ({name,email, bio, imageUrl,isloggedIn,handleLogout}) => {

  return (
    <div>
        {isloggedIn? <><UserProfle name={name}email={email}bio={bio} imageUrl={imageUrl}/> <button onClick={handleLogout}>Log Out</button></>:<h3>You need to log in</h3>} 
    </div>
  )
}

export default UserDashboard