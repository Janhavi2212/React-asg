import React, { useEffect } from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const BlogForm = ({ isEdit }) => {
    const { formData, handleChange, setFormData, resetForm } = useForm({ title: "", description: "" });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (isEdit && id) {
            axios.get(`${BASE_URL}/${id}`)
                .then((res) => setFormData(res.data))
                .catch((error) => console.error("Error fetching blog:", error));
        }
    }, [isEdit, id, setFormData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`${BASE_URL}/${id}`, formData);
                alert("Edited");
            } else {
                await axios.post(BASE_URL, formData);
                alert("Created");
            }
            navigate("/");
        } catch (error) {
            console.error("Error submitting blog:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{isEdit ? "Edit" : "New"} Blog</h2>
                <input type="text" placeholder="Title Please..." name="title" value={formData.title || ""} onChange={handleChange} />
                <br />
                <input type="text" placeholder="Description Please..." name="description" value={formData.description || ""} onChange={handleChange} />
                <br />
                <button type="submit">{isEdit ? "Update" : "Create"}</button>
            </form>
            <button type="button" onClick={resetForm}>Reset</button>
        </div>
    );
};

export default BlogForm;