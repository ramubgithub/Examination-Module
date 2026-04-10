import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const score = state?.score || 0;
  const total = state?.total || 0;

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Exam Result</h2>
      <h3>{score} / {total}</h3>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}