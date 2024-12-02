export default function Loader({ slug }) {
  return slug ? (
    <div className="min-h-full bg-accent-yellow p-6">
      <header className="flex items-center justify-between mb-8">
        <div className="w-20 h-6 bg-secondary rounded-lg animate-pulse" />
        <div className="flex items-center gap-4">
          <div className="w-20 h-6 bg-secondary rounded-lg animate-pulse" />
          <div className="w-20 h-6 bg-secondary rounded-lg animate-pulse" />
        </div>
      </header>

      <p className="w-20 h-4 bg-secondary mt-2 animate-pulse" />
      <h1 className="w-full h-10 bg-secondary my-2 animate-pulse" />

      <div className="mt-2 h-full">
        <p className="min-h-96 bg-secondary animate-pulse" />
      </div>

    </div>
  ) : (
    <div className="relative h-full overflow-hidden">
      <header className="h-[10vh] bg-secondary my-2 animate-pulse" />
      <main className="h-[90vh] mx-auto px-6 py-10 overflow-y-scroll">
        <h2 className="h-10 bg-secondary mb-8 animate-pulse" />
        <div className="columns-[300px]">
          <div className="inline-block w-[300px] h-[200px] bg-secondary p-6 rounded-lg m-1 animate-pulse" />
          <div className="inline-block w-[300px] h-[200px] bg-secondary p-6 rounded-lg m-1 animate-pulse" />
        </div>
        <hr className="border-neutral-700 my-8" />
        <h2 className="h-10 bg-secondary mb-8 animate-pulse" />
        <div className="columns-[300px]">
          <div className="inline-block w-[300px] h-[200px] bg-secondary p-6 rounded-lg m-1 animate-pulse" />
          <div className="inline-block w-[300px] h-[200px] bg-secondary p-6 rounded-lg m-1 animate-pulse" />
          <div className="inline-block w-[300px] h-[200px] bg-secondary p-6 rounded-lg m-1 animate-pulse" />
        </div>
      </main>
    </div>
  )
}
