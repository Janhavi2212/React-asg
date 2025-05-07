const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/server.js");
const taskRoutes = require("./Router/taskRouter.js");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Use the task routes
app.use("/api", taskRoutes); // Your endpoints will be under /api/tasks

const PORT = process.env.PORT||5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
