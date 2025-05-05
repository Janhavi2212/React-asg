import React from 'react'
import UserInfo from './UserInfo'
import Avatar from './Avatar'

const UserProfle = ({name,email,bio,imageUrl}) => {
  return (
    <div>
      {/* <h3>User Profle</h3> */}
      <UserInfo name={name} email={email} bio={bio}/>
      <Avatar imageUrl={imageUrl}/>

    </div>
  )
}

export default UserProfle