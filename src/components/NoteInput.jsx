"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteInput = () => {
  const router = useRouter();
  const [note, setNote] = useState("");

  async function createNote() {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: note,
          user: "ge@pixlogic.com",
          additionalData: "",
        }),
      }
    );
    const data = await res.json();
    router.refresh();
  }

  return (
    <div>
      <div className="flex p-3 ml-3 mr-3 space-x-2  md:items-center">
        <input
          placeholder="Write Here..."
          className="bg-grey text-sm focus:outline-none rounded-xl p-3 w-full"
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          className="text-xs bg-blue btn-hoverB p-3 rounded-xl text-white font-medium w-1/4"
          onClick={createNote}
        >
          Save
        </button>
      </div>
      <hr className="ml-6 mr-6 mt-3" />
    </div>
  );
};
