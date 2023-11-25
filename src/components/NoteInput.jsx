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
      <h3>Input</h3>
      <input onChange={(e) => setNote(e.target.value)} />
      <button onClick={createNote}>Save Note</button>
    </div>
  );
};
