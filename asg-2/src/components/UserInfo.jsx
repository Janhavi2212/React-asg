import React from 'react'

const UserInfo = ({name,email ,bio}) => {
  return (
    <div>
        <h2>User Info</h2>
        <h4>Name : {name}</h4>
        <h4>Email : {email}</h4>
        <h4>Bio : {bio}</h4>
    </div>
  )
}

export default UserInfo