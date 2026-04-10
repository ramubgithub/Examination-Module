import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center" }}>
        <h2>Exam Dashboard</h2>

        <p>Total Time: 20 Minutes</p>

        <button onClick={() => navigate("/exam")}>
          Start Exam
        </button>
      </div>
    </>
  );
}