import { useState } from "react";
import api from "../apiClient";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await api.post("/auth/signup", { email, password });
      alert("Account created. Please login.");
      navigate("/");
    } catch {
      alert("User already exists");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded">
      <h2 className="text-2-xl font-semibold mb-4">Signup</h2>

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
        className="w-full bg-green-600 text-white py-2 hover:bg-green-700"
        onClick={signup}
      >
        Signup
      </button>
    </div>
  );
}
