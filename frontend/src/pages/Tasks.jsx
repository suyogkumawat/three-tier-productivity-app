import { useEffect, useState } from "react";
import api from "../apiClient";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/api/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white shadow-md rounded">
      <h2 className="text-2-xl font-semibold mb-4">My Tasks</h2>

      <ul className="space-y-2">
        {tasks.map((t) => (
          <li key={t.id} className="border p-2 rounded">
            {t.title} — {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
