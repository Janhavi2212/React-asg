const express = require ("express");
const Task = require("../Model/task");

const createTask = async (req , res) => {
    try {
        const data = await Task(req.body)
        await data.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

const readTask = async (req , res) => {
    try {
        const data = await Task.find()
        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const readTaskById = async (req , res) => {
    try {
        const data = await Task.findById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTask = async (req, res) => {
    try {
        const data = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports={createTask,readTask,updateTask,readTaskById,deleteTask}