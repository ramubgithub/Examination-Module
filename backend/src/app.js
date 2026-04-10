const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const examRoutes = require("./routes/exam.routes");
const questionRoutes = require("./routes/question.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/questions", questionRoutes);

module.exports = app;