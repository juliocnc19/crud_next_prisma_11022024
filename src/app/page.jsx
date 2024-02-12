import TaskList from "@/components/TaskList";
import { prisma } from "@/libs/prisma";

async function loadTask() {
  return prisma.task.findMany()
} 

export const revalidate = 0

export default async function Home() {
  const data = await loadTask();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
      {data.map((task) => (
        <TaskList task={task} key={task.id}/>
      ))}
    </div>
    </section>
  );
}
