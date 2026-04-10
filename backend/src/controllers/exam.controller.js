const Exam = require("../models/Exam");

const createExam = async (req, res) => {
  const exam = await Exam.create({
    title: req.body.title,
    createdBy: req.user.id
  });

  res.json(exam);
};

const getExams = async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
};

module.exports = { createExam, getExams };