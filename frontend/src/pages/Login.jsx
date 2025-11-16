import { useState } from "react";
import api from "../apiClient";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/tasks");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded">
      <h2 className="text-2-xl font-semibold mb-4">Login</h2>

      <input
        className="w-full border px-3 py-2 mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border px-3 py-2 mb-3"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
}
