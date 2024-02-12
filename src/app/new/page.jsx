"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch("/api/task/" + params.id)
        .then((res) => res.json())
        .then((data) => {
          setDescription(data.description);
          setTitle(data.title);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      await fetch("/api/task/" + params.id, {
        method: "PUT",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });

    } else {
      await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        cache:"no-store"
      });

    }

    router.push("/");
    router.refresh()
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>
        <label htmlFor="tile" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          type="text"
          className="border border-gray-400 mb-4 p-2 w-full outline-none text-black"
          placeholder="Titulo"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          rows="3"
          className="border border-gray-400 mb-4 p-2 w-full outline-none text-black"
          placeholder="Descripcion"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white fond-bold py-2 px-4 rounded"
            type="submit"
          >
            {!params.id ? "Crear" : "Actualizar"}
          </button>
          {params.id && (
            <button className="bg-red-500 hover:bg-red-700 text-white fond-bold py-2 px-4 rounded"
            type="button"
            onClick={async()=>{
              await fetch('/api/task/'+params.id,{
                method:"DELETE"
              })
              router.push("/")
              router.refresh()
            }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
