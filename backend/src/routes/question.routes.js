const router = require("express").Router();
const { addQuestion, getQuestions } = require("../controllers/question.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, addQuestion);
router.get("/:examId", auth, getQuestions);

module.exports = router;