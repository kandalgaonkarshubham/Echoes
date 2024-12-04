import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MoveLeftIcon, PencilIcon, Trash2Icon } from "lucide-react";

import Loader from "@/components/Loader";
import axios from "@/utils/axios";
import { useAuthStore, useJournalStore } from "@/utils/store";

export default function viewJournal() {

  const [loading, setLoading] = useState(true);
  const [journal, setJournal] = useState({})

  const router = useRouter();
  const { query } = router;

  const journals = useJournalStore((state) => state.journals);
  const setJournals = useJournalStore((state) => state.setJournals);
  const email = useAuthStore((state) => state.email);

  useEffect(() => {
    if (query.slug) {
      const journal = journals.find((j) => j.id == query.slug);
      setJournal(journal);
      setLoading(false);
    }
  }, [router])

  const formatDate = (isoString) => {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const deleteJournal = async (id) => {
    if (id) {
      try {
        await axios.delete(`/journal/${id}`, { data: { email: email } });
        const updatedJournals = journals.filter((j) => j.id != id);
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
              <MoveLeftIcon className="size-10 text-secondary" />
            </Link>
            <div className="flex items-center gap-4">
              <Link href={`/app/journal/${journal.id}/edit`}>
                <PencilIcon className="size-6 text-sky-400" />
              </Link>
              <button onClick={() => deleteJournal(journal.id)}>
                <Trash2Icon className="size-6 text-rose-400" />
              </button>
            </div>
          </header>

          <p className="text-xl text-neutral-600">
            {formatDate(journal.createdAt)}
            {
              journal.updatedAt != journal.createdAt && (
                <span className="text-neutral-700 font-bold"> | {formatDate(journal.updatedAt)}</span>
              )
            }
          </p>
          <h1 className="text-4xl font-semibold text-primary my-2">{journal.title}</h1>

          <div className="mt-3">
            <p className="text-xl text-secondary">{journal.content}</p>
          </div>

        </div>
      }
    </>
  )
}
