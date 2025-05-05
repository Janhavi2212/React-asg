import { useState } from 'react'
import './App.css'
import Greetng from './components/Greetng'
// import Avatar from './components/Avatar'
// import UserProfle from './components/UserProfle'
// import LoginMessage from './components/LoginMessage'
import UserDashboard from './components/UserDashboard'
import Dashboard from './components/Dashboard'

function App() {
  const [user,setUser]=useState({
    name:"Jane Doe",
    age: 25,
    email: "janeDoe@example.com",
    bio: "Web Developer",
    imageUrl: "profile.jpg",
    isLoggedIn: true,
    timeOfday:"Morning"
  })

  const handleLogout=()=>{
    setUser({...user,isLoggedIn:false})
}

  const handleForm=(e)=>{
    e.preventDefault();
    console.log(user)
  }

  const handleLogin=()=>{
    setUser({...user,isLoggedIn:true})
  }
  
  return (
    <>
 {(!user.isLoggedIn)?<form type="submt" onSubmit={handleForm}>
      <input type='text' placeholder='Enter name..' value={user.name} 
      onChange={(e)=>setUser({...user,name:e.target.value})}/>
      <input type='email' placeholder='Enter email..' value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}/>
      <textarea value={user.bio} 
      onChange={(e) => setUser({...user, bio: e.target.value})} />
      <img src={user.imageUrl} />
      <select value={user.timeOfday}
      onChange={(e)=>setUser({...user,timeOfday:e.target.value})}>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
      <button type='submit' onClick={handleLogin}>Log In</button>
    </form> :<><Greetng name={user.name} timeOfday={user.timeOfday} />
    <UserDashboard name={user.name} email={user.email} bio={user.bio} imageUrl={user.imageUrl} isloggedIn={user.isLoggedIn} handleLogout={handleLogout}/></> }
    

    
    <Dashboard isLoggedIn={user.isLoggedIn}/>

    

    
    </>

    
  )
}

export default App
