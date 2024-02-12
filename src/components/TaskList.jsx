"use client";

import { useRouter } from "next/navigation";

export default function TaskList({ task }) {
  const router = useRouter();

  return (
    <div
      key={task.id}
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => router.replace("/task/edit/" + task.id)}
    >
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <small>{new Date(task.createAt).toLocaleDateString()}</small>
    </div>
  );
}
