import { useState } from "react";
import API from "../api/axios";
import "../styles/global.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await API.post("/auth/register", { name, email, password });
    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}