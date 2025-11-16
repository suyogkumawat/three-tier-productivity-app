import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex gap-4">
      {isLoggedIn ? (
        <>
          <button onClick={() => navigate("/tasks")}>Tasks</button>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </>
      )}
    </nav>
  );
}
