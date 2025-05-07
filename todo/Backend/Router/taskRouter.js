const express = require ("express");
const { createTask, deleteTask, readTask, readTaskById, updateTask } = require("../controller/tasController");

const router = express.Router()

router.post("/tasks",createTask)
router.get("/tasks",readTask)
router.get("/tasks/:id",readTaskById)
router.put("/tasks/:id",updateTask)
router.delete(`/tasks/:id`,deleteTask)


module.exports = router;