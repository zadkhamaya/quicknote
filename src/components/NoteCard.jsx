"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const NoteCard = ({ id, content }) => {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);

  async function handleDelete() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: currentContent }),
      }
    );
    const data = await res.json();
    setOnEdit(false);
    router.refresh();
  }
  return (
    <div className="flex gap-2 p-3 m-6 rounded-xl flex-col justify-between bg-grey">
      {onEdit ? (
        <input
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
          className=" bg-grey text-xs p-2 focus:outline-none"
        />
      ) : (
        <div className=" bg-grey text-xs h-24">{currentContent}</div>
      )}

      <div className="text-right space-x-2">
        {onEdit ? (
          <button className="bg-blue btn-hoverB" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button
            className="bg-blue btn-hoverB"
            onClick={() => setOnEdit(true)}
          >
            Edit
          </button>
        )}

        <button className=" bg-red btn-hoverR" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
