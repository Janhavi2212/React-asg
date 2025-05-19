import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function useBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    const fetchBlogs = async () => {
        try {
            const res = await axios.get(BASE_URL);
            setBlogs(res.data);
        } catch (error) {
            setError(error.message || "Failed to load blogs...");
        }
    };

    const createBlogs = async (newBlog) => {
        try {
            const res = await axios.post(BASE_URL, newBlog);
            setBlogs(prev => [res.data, ...prev]);
        } catch (error) {
            setError(error.message || "Failed to create new blog...");
        }
    };

    const updateBlogs = async (id, updatedBlog) => {
        try {
            await axios.put(`${BASE_URL}/${id}`, updatedBlog);
            setBlogs(prevBlogs => prevBlogs.map(el => el.id === id ? { ...el, ...updatedBlog } : el));
        } catch (error) {
            setError(error.message || "Failed to update the blog...");
        }
    };

    const deleteBlogs = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            setBlogs(prevBlogs => prevBlogs.filter(el => el.id !== id));
        } catch (error) {
            setError(error.message || "Failed to delete the blog...");
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return { blogs, error, fetchBlogs, updateBlogs, createBlogs, deleteBlogs };
}