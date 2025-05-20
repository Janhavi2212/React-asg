import { useState } from 'react'
import './App.css'
import UserForm from './assets/UserForm'

function App() {
const [user , setUser] = useState([])

  return (
    <>
    <UserForm/>
    </>
  )
}

export default App
