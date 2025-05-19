import React from "react";
import { Link } from "react-router-dom"; // Make sure you're importing Link

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2>Blog List</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.description}...</p>

          <Link to={`/blogs/${blog.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;