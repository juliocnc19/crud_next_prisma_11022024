import { NextResponse} from "next/server"
import { prisma } from "@/libs/prisma"


export async function POST(request){
    const {title,description} = await request.json()
    const newTask = await prisma.task.create({
        data:{
            title,
            description
        }
    })
    return NextResponse.json(newTask)
}