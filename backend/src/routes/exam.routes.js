const router = require("express").Router();
const { createExam, getExams } = require("../controllers/exam.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, createExam);
router.get("/", auth, getExams);

module.exports = router;