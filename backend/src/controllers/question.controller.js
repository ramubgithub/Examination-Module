const Question = require("../models/Question");

const addQuestion = async (req, res) => {
  const question = await Question.create(req.body);
  res.json(question);
};

const getQuestions = async (req, res) => {
  const questions = await Question.find({
    examId: req.params.examId
  });

  res.json(questions);
};

module.exports = { addQuestion, getQuestions };