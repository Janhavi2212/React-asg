import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

// Blog Dsplay Page
const BlogDetail = () => {
    const [blog,setBlog]=useState(null)
    const {id} = useParams() 
    const navigate = useNavigate()
    const BASE_URL = 'https://jsonplaceholder.typicode.com';

    useEffect(()=>{
        axios.get(`${BASE_URL}/posts/${id}`)
        .then((res)=>{
            setBlog(res.data)
        })
    },[id])

    /// delete this blog
    const handleDel = async()=>{
        await axios.delete(`${BASE_URL}/posts/${id}`)
        alert("Ths Blog has been deleted")
        navigate("/");
    }

return (
  <div>
    <h4>Blog Detail</h4>
    {blog ? (
      <>
        <h2>{blog.title}</h2>
        <p>{blog.description || "No description available"}</p>
        <button onClick={handleDel}>Delete Blog</button>
        <Link to={`/edit/${blog.id}`}>
          <button>Edit Blog</button>
        </Link>
      </>
    ) : (
      <p>Loading blog details...</p>
    )}
  </div>
);
}

export default BlogDetail