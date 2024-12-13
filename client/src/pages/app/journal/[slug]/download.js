import { useEffect, useState } from "react";

import Loader from "@/components/Loader";

export default function viewJournal() {
  const [loading, setLoading] = useState(true);
  const [journal, setJournal] = useState({});

  useEffect(() => {
    // Listen for the injected journal data
    const handleJournalData = (event) => {
      const journalData = event.detail;
      setJournal(journalData);
      setLoading(false);
    };

    window.addEventListener('journalDataReady', handleJournalData);

    return () => {
      window.removeEventListener('journalDataReady', handleJournalData);
    };
  }, []);


  const formatDate = (isoString) => {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };


  return (
    <>
      {loading ? (
        <Loader slug={true} />
      ) : (
        <div id="puppeteer" className="min-h-full bg-accent-yellow p-6">
          <p className="text-xl text-neutral-600">
            {formatDate(journal.createdAt)}
            {journal.updatedAt != journal.createdAt && (
              <span className="text-neutral-700 font-bold">
                {" "}
                | {formatDate(journal.updatedAt)}
              </span>
            )}
          </p>
          <h1 className="text-4xl font-semibold text-primary my-2">
            {journal.title}
          </h1>

          <div className="mt-3">
            <p className="text-xl text-secondary">{journal.content}</p>
          </div>
        </div>
      )}
    </>
  );
}
