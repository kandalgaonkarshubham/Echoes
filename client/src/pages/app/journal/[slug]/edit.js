import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { XIcon, CheckIcon } from "lucide-react";

import Loader from "@/components/Loader";
import axios from "@/utils/axios";
import { useAuthStore, useJournalStore } from "@/utils/store";

export default function editJournal() {

  const [loading, setLoading] = useState(true);
  const [journal, setJournal] = useState({});

  const router = useRouter();
  const { query } = router;

  const email = useAuthStore((state) => state.email);
  const journals = useJournalStore((state) => state.journals);
  const setJournals = useJournalStore((state) => state.setJournals);

  useEffect(() => {
    if (query.slug) {
      const journal = journals.find((j) => j.id == query.slug);
      setJournal(journal);
      setLoading(false);
    }
  }, [router])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setJournal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSave = async () => {
    if (journal.title && journal.content) {
      try {
        const response = await axios.patch(`/journal/${journal.id}`, JSON.stringify({ title: journal.title, content: journal.content, email }));
        const { updatedJournal } = response.data;
        const updatedJournals = journals.map((j) =>
          j.id == query.slug ? { ...updatedJournal } : j
        );
        await setJournals({ journals: updatedJournals });
        router.push("/app/journals");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {loading ? (<Loader slug={true} />)
        :
        <div className="min-h-full bg-accent-yellow p-6">
          <header className="flex items-center justify-between mb-6">
            <Link href="/app/journals">
              <XIcon className="size-10 text-accent-red" />
            </Link>
            <button onClick={handleSave}>
              <CheckIcon className="size-10 text-accent-green" />
            </button>
          </header>

          <textarea className="w-full text-4xl font-semibold bg-transparent text-primary border border-primary/20 resize-none outline-none my-2" name="title" value={journal.title} onChange={handleChange} />

          <textarea className="min-h-max w-full text-xl text-secondary bg-transparent border border-primary/20 outline-none mt-3" name="content" value={journal.content} onChange={handleChange}></textarea>

        </div>
      }
    </>

  )
}
