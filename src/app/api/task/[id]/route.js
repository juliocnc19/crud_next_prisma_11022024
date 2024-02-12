import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const idTask = Number(params.id);

  const task = await prisma.task.findUnique({
    where: {
      id: idTask,
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const task = Number(params.id);
    const taskUpdated = await prisma.task.update({
      where: {
        id: task,
      },
      data: data,
    });

    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(request, { params }) {
  try {
    const idTask = Number(params.id);
    const taskDeleted = await prisma.task.delete({
      where: {
        id: idTask,
      },
    });
    return NextResponse.json(taskDeleted);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
