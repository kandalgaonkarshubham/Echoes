import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { ArrowBigLeftDashIcon, UploadIcon } from "lucide-react";

import { useAuthStore, useJournalStore } from "@/utils/store";
import axios from "@/utils/axios";

export default function editJournal() {

  const router = useRouter();
  const email = useAuthStore((state) => state.email);
  const addJournal = useJournalStore((state) => state.addJournal);

  const [fields, setFields] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (fields.title && fields.content) {
      try {
        const response = await axios.post("/journal", JSON.stringify({ ...fields, email }));
        console.log(response.data)
        await addJournal(response.data.newJournal);
        router.back();
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div className="min-h-full bg-accent-blue p-6">
      <header className="flex items-center justify-between mb-6">
        <Link href="/app/journals">
          <ArrowBigLeftDashIcon className="size-10 text-accent-red" />
        </Link>
        <button onClick={handleSave}>
          <UploadIcon className="size-10 text-accent-green" />
        </button>
      </header>

      <textarea className="w-full text-4xl font-semibold bg-transparent text-primary border border-primary/20 resize-none outline-none my-2" name="title" value={fields.title} onChange={handleChange} />

      <div className="mt-3">
        <textarea className="h-96 w-full text-xl text-secondary bg-transparent border border-primary/20 outline-none" name="content" value={fields.content} onChange={handleChange}></textarea>
      </div>

    </div>
  )
}
