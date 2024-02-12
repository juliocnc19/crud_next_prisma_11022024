import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="bg-slate-900">
            <div className="container mx-auto flex justify-between items-center py-3">
            <h3 className="font-bold text-2xl">
                Crud Tareas con Next
            </h3>
            <ul className="flex gap-x-2">
                <li className="text-slate-400 hover:text-slate-200">
                    <Link href="/">Tareas</Link>
                </li>
                <li className="text-slate-400 hover:text-slate-200" >
                    <Link href="/new">Nueva</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}