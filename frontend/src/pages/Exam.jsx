import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const questions = [
  { question: "What is JavaScript?", options: ["Programming Language", "Database", "OS", "Browser"], answer: "Programming Language" },
  { question: "Which keyword is used to declare variable?", options: ["var", "int", "string", "float"], answer: "var" },
  { question: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Google", "IBM"], answer: "Netscape" },
  { question: "Which symbol is used for comments?", options: ["//", "##", "**", "!!"], answer: "//" },
  { question: "What is typeof null?", options: ["null", "object", "undefined", "number"], answer: "object" },
  { question: "Which method converts JSON to object?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"], answer: "JSON.parse()" },
  { question: "Which is not a JS data type?", options: ["String", "Number", "Boolean", "Float"], answer: "Float" },
  { question: "Which operator checks equality?", options: ["==", "=", "!=", "<>"], answer: "==" },
  { question: "Which loop is used?", options: ["for", "loop", "repeat", "iterate"], answer: "for" },
  { question: "Which is arrow function?", options: ["()=>{}", "function()", "=>", "()"], answer: "()=>{}" },
  { question: "Which method adds element?", options: ["push()", "add()", "insert()", "append()"], answer: "push()" },
  { question: "Which removes last element?", options: ["pop()", "remove()", "delete()", "shift()"], answer: "pop()" },
  { question: "Which event loads page?", options: ["onload", "onclick", "onhover", "onchange"], answer: "onload" },
  { question: "Which is strict equality?", options: ["===", "==", "!=", "="], answer: "===" },
  { question: "Which is used for async?", options: ["async/await", "sync", "wait()", "pause()"], answer: "async/await" },
  { question: "Which method prints output?", options: ["console.log()", "print()", "echo()", "write()"], answer: "console.log()" },
  { question: "Which keyword defines constant?", options: ["const", "let", "var", "define"], answer: "const" },
  { question: "Which is array?", options: ["[]", "{}", "()", "<>"], answer: "[]" },
  { question: "Which is object?", options: ["{}", "[]", "()", "<>"], answer: "{}" },
  { question: "Which method joins array?", options: ["join()", "merge()", "concat()", "link()"], answer: "join()" }
];

export default function Exam() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(1200);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // TIMER
  useEffect(() => {
    if (timeLeft <= 0 || submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  // FORMAT TIME
  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // SELECT ANSWER
  const handleSelect = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  // SUBMIT
  const handleSubmit = () => {
    let score = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    setSubmitted(true);

    navigate("/result", {
      state: { score, total: questions.length }
    });
  };

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>JavaScript Exam</h2>
        <h3 style={{ color: "red" }}>⏱ {formatTime()}</h3>

        <div>
          <h4>{questions[current].question}</h4>
          {questions[current].options.map((opt, i) => (
            <div key={i}>
              <input
                type="radio"
                checked={answers[current] === opt}
                onChange={() => handleSelect(opt)}
              />
              {opt}
            </div>
          ))}
        </div>

        <button disabled={current === 0} onClick={() => setCurrent(current - 1)}>Previous</button>
        <button disabled={current === questions.length - 1} onClick={() => setCurrent(current + 1)}>Next</button>

        <br /><br />
        <button onClick={handleSubmit}>Submit Exam</button>
      </div>
    </>
  );
}