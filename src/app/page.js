import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NoteCard } from "@/components/NoteCard";
import { NoteInput } from "@/components/NoteInput";

async function getNotes() {
  const res = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='ge@pixlogic.com')",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data;
}

export default async function Page() {
  const { items } = await getNotes();

  return (
    <div className="bg-white rounded-xl h-full">
      <Header />
      <NoteInput />
      <div>
        {items.map(({ id, content }) => {
          return <NoteCard key={id} id={id} content={content} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
