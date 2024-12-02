import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="grid h-screen place-content-center font-semibold px-4">
      <div className="text-center">
        <h1 className="text-9xl font-Syne">404</h1>

        <p className="text-2xl font-bold tracking-tight text-neutral-500 sm:text-4xl">Uh-oh!</p>

        <p className="mt-4 text-neutral-500">We can't find that page.</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-accent-red px-5 py-3 text-sm font-bold hover:bg-accent-red/90"
        >
          Go Back Home
        </Link>
      </div>
    </div>

  )
}
