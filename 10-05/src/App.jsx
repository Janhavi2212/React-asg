import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [itemPerPage]=useState(10)
  // useEffect(()=>{
  //   fetchTodo()
  // },[])

  const fetchTodo = async() => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await(res.json())
    console.log(jsonData)
    setTodo(jsonData)
  } catch (error) {
    console.log(error)
  }
  }

  const handlePrev=()=>{
    if(currentPage==1) return
    setCurrentPage(currentPage-1)
  }

  const totalPages = Math.ceil(todo.length/itemPerPage)
  const handleNext =()=>{
    if(currentPage<totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const start = (currentPage - 1) * itemPerPage;
  const displayedTodo= todo.slice(start ,start + itemPerPage)
  return (
    <>
    <button type='submit' onClick={fetchTodo}>Fetch Todo</button>
    <ul>
      {displayedTodo.map((el)=>(<li key={el.id}>
        <h3>{el.title}</h3>
      </li>))}
    </ul>
    <button type='submit' onClick={handlePrev}>Prev</button>
    <button type='submit' onClick={handleNext}>Next</button>
    </>
  )
}

export default App
