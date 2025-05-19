import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import BlogDetail from "./components/BlogDetail";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import useBlogs from "./hooks/useBlogs";

const App = () => {
  const { blogs } = useBlogs(); 

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} />}/>
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/new" element={<BlogForm />} />
        <Route path="/edit/:id" element={<BlogForm isEdit={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;