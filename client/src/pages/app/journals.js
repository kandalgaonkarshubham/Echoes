import Link from 'next/link';

import { useAuthStore, useJournalStore } from '@/utils/store';


export default function journals() {
  const journals = useJournalStore((state) => state.journals);
  const user = useAuthStore((state) => state.email);

  return (
    <div className="relative h-full overflow-hidden">

      <header className="max-h-[10vh] my-2">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <div className="flex items-center justify-center gap-2">
              <img
                src="https://img.freepik.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg"
                alt=""
                className="size-12 object-cover rounded-full"
              />
              <span className="font-Syne text-2xl">{user}</span>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav>
                <ul className="flex items-center gap-6 text-lg">
                  <li>
                    <Link className="font-Syne transition hover:text-accent-red" href="/app/logout">Logout</Link>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </header>

      <main className="h-[90vh] mx-auto px-6 py-10 overflow-y-scroll">
        {journals.length > 0 ? (
          <>
            <h2 className="font-Syne text-5xl font-semibold mb-8">My Notes</h2>
            <div className={journals.length < 4 ? "columns-[100vw] sm:columns-[50vw]" : `columns-[300px]`}>
              {journals.map((journal) => {
                const randomClamp = Math.floor(Math.random() * 5) + 1;
                return (
                  <Link
                    key={journal.id}
                    href={`/app/journal/${journal.id}/view`}
                    className="relative inline-block bg-accent-green p-6 rounded-lg shadow-md hover:shadow-lg m-1 transition-all z-10"
                  >
                    <h3 className="text-3xl text-neutral-800 font-bold">{journal.title}</h3>
                    <p
                      className="mt-2 text-base text-neutral-700 font-semibold overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: randomClamp,
                      }}
                    >
                      {journal.content}
                    </p>
                  </Link>
                )
              })}
            </div>
          </>
        ) :
          (
            <div className="w-full h-full flex items-center justify-center text-[8vw] underline">No Entries Yet</div>
          )
        }
      </main>

      <Link href={"/app/journal/create"} className="absolute bottom-0 right-0 bg-accent-red rounded-3xl font-Syne text-6xl px-5 py-2 pt-0.5 mb-8 me-8">+</Link>
    </div>
  )
}
