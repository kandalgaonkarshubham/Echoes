import Link from 'next/link';

export default function journals() {
  const journals = [
    {
      id: 1,
      title: "My First Journal",
      date: "2024-12-01",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consectetur, dignissimos aperiam dolores ad commodi autem recusandae? Doloremque sed repellat asperiores, distinctio mollitia, quae nostrum exercitationem corrupti, praesentium iure laboriosam delectus doloribus? Rem tenetur vero, minus iusto nesciunt delectus ipsam nemo! Similique accusantium minus necessitatibus veniam hic iste. Ut, repellendus iure sed voluptas consequuntur sapiente dignissimos, dolore alias facere, quod iste! In asperiores harum id architecto incidunt suscipit dolore ad voluptatibus iste consequuntur dolores animi, consequatur doloremque doloribus praesentium provident illum eius facilis soluta reiciendis repellat sunt neque laboriosam. Soluta possimus unde officia sit veniam natus quisquam quia quis maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt amet rem alias reiciendis. Laudantium necessitatibus, alias beatae deserunt sunt molestias suscipit quisquam sed vitae consectetur laboriosam sequi. Molestias molestiae atque cupiditate illo incidunt eius possimus totam suscipit ullam est, ipsa pariatur esse, aut in distinctio? Voluptates vel doloremque animi quo ad sunt voluptatibus ipsam numquam optio illo aut molestias dolor, natus consequatur modi sint? Architecto voluptatem omnis cumque porro nobis, rem asperiores culpa esse explicabo vero quas odio iusto consectetur illo eveniet, sint quisquam a reprehenderit cupiditate molestias reiciendis et eligendi laborum? Non illum atque iste ullam fugiat libero.",
    },
    {
      id: 2,
      title: "Reflections on Development",
      date: "2024-11-30",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consectetur, dignissimos aperiam dolores ad commodi autem recusandae? Doloremque sed repellat asperiores, distinctio mollitia, quae nostrum exercitationem corrupti, praesentium iure laboriosam delectus doloribus? Rem tenetur vero, minus iusto nesciunt delectus ipsam nemo! Similique accusantium minus necessitatibus veniam hic iste. Ut, repellendus iure sed voluptas consequuntur sapiente dignissimos, dolore alias facere, quod iste! In asperiores harum id architecto incidunt suscipit dolore ad voluptatibus iste consequuntur dolores animi, consequatur doloremque doloribus praesentium provident illum eius facilis soluta reiciendis repellat sunt neque laboriosam. Soluta possimus unde officia sit veniam natus quisquam quia quis maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt amet rem alias reiciendis. Laudantium necessitatibus, alias beatae deserunt sunt molestias suscipit quisquam sed vitae consectetur laboriosam sequi. Molestias molestiae atque cupiditate illo incidunt eius possimus totam suscipit ullam est, ipsa pariatur esse, aut in distinctio? Voluptates vel doloremque animi quo ad sunt voluptatibus ipsam numquam optio illo aut molestias dolor, natus consequatur modi sint? Architecto voluptatem omnis cumque porro nobis, rem asperiores culpa esse explicabo vero quas odio iusto consectetur illo eveniet, sint quisquam a reprehenderit cupiditate molestias reiciendis et eligendi laborum? Non illum atque iste ullam fugiat libero.",
    },
    {
      id: 3,
      title: "Nature Walk",
      date: "2024-11-29",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consectetur, dignissimos aperiam dolores ad commodi autem recusandae? Doloremque sed repellat asperiores, distinctio mollitia, quae nostrum exercitationem corrupti, praesentium iure laboriosam delectus doloribus? Rem tenetur vero, minus iusto nesciunt delectus ipsam nemo! Similique accusantium minus necessitatibus veniam hic iste. Ut, repellendus iure sed voluptas consequuntur sapiente dignissimos, dolore alias facere, quod iste! In asperiores harum id architecto incidunt suscipit dolore ad voluptatibus iste consequuntur dolores animi, consequatur doloremque doloribus praesentium provident illum eius facilis soluta reiciendis repellat sunt neque laboriosam. Soluta possimus unde officia sit veniam natus quisquam quia quis maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt amet rem alias reiciendis. Laudantium necessitatibus, alias beatae deserunt sunt molestias suscipit quisquam sed vitae consectetur laboriosam sequi. Molestias molestiae atque cupiditate illo incidunt eius possimus totam suscipit ullam est, ipsa pariatur esse, aut in distinctio? Voluptates vel doloremque animi quo ad sunt voluptatibus ipsam numquam optio illo aut molestias dolor, natus consequatur modi sint? Architecto voluptatem omnis cumque porro nobis, rem asperiores culpa esse explicabo vero quas odio iusto consectetur illo eveniet, sint quisquam a reprehenderit cupiditate molestias reiciendis et eligendi laborum? Non illum atque iste ullam fugiat libero.",
    },
    {
      id: 4,
      title: "My First Journal",
      date: "2024-12-01",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consectetur, dignissimos aperiam dolores ad commodi autem recusandae? Doloremque sed repellat asperiores, distinctio mollitia, quae nostrum exercitationem corrupti, praesentium iure laboriosam delectus doloribus? Rem tenetur vero, minus iusto nesciunt delectus ipsam nemo! Similique accusantium minus necessitatibus veniam hic iste. Ut, repellendus iure sed voluptas consequuntur sapiente dignissimos, dolore alias facere, quod iste! In asperiores harum id architecto incidunt suscipit dolore ad voluptatibus iste consequuntur dolores animi, consequatur doloremque doloribus praesentium provident illum eius facilis soluta reiciendis repellat sunt neque laboriosam. Soluta possimus unde officia sit veniam natus quisquam quia quis maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt amet rem alias reiciendis. Laudantium necessitatibus, alias beatae deserunt sunt molestias suscipit quisquam sed vitae consectetur laboriosam sequi. Molestias molestiae atque cupiditate illo incidunt eius possimus totam suscipit ullam est, ipsa pariatur esse, aut in distinctio? Voluptates vel doloremque animi quo ad sunt voluptatibus ipsam numquam optio illo aut molestias dolor, natus consequatur modi sint? Architecto voluptatem omnis cumque porro nobis, rem asperiores culpa esse explicabo vero quas odio iusto consectetur illo eveniet, sint quisquam a reprehenderit cupiditate molestias reiciendis et eligendi laborum? Non illum atque iste ullam fugiat libero.",
    },
    {
      id: 5,
      title: "Reflections on Development",
      date: "2024-11-30",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consectetur, dignissimos aperiam dolores ad commodi autem recusandae? Doloremque sed repellat asperiores, distinctio mollitia, quae nostrum exercitationem corrupti, praesentium iure laboriosam delectus doloribus? Rem tenetur vero, minus iusto nesciunt delectus ipsam nemo! Similique accusantium minus necessitatibus veniam hic iste. Ut, repellendus iure sed voluptas consequuntur sapiente dignissimos, dolore alias facere, quod iste! In asperiores harum id architecto incidunt suscipit dolore ad voluptatibus iste consequuntur dolores animi, consequatur doloremque doloribus praesentium provident illum eius facilis soluta reiciendis repellat sunt neque laboriosam. Soluta possimus unde officia sit veniam natus quisquam quia quis maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt amet rem alias reiciendis. Laudantium necessitatibus, alias beatae deserunt sunt molestias suscipit quisquam sed vitae consectetur laboriosam sequi. Molestias molestiae atque cupiditate illo incidunt eius possimus totam suscipit ullam est, ipsa pariatur esse, aut in distinctio? Voluptates vel doloremque animi quo ad sunt voluptatibus ipsam numquam optio illo aut molestias dolor, natus consequatur modi sint? Architecto voluptatem omnis cumque porro nobis, rem asperiores culpa esse explicabo vero quas odio iusto consectetur illo eveniet, sint quisquam a reprehenderit cupiditate molestias reiciendis et eligendi laborum? Non illum atque iste ullam fugiat libero.",
    },
    {
      id: 6,
      title: "Nature Walk",
      date: "2024-11-29",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consectetur, dignissimos aperiam dolores ad commodi autem recusandae? Doloremque sed repellat asperiores, distinctio mollitia, quae nostrum exercitationem corrupti, praesentium iure laboriosam delectus doloribus? Rem tenetur vero, minus iusto nesciunt delectus ipsam nemo! Similique accusantium minus necessitatibus veniam hic iste. Ut, repellendus iure sed voluptas consequuntur sapiente dignissimos, dolore alias facere, quod iste! In asperiores harum id architecto incidunt suscipit dolore ad voluptatibus iste consequuntur dolores animi, consequatur doloremque doloribus praesentium provident illum eius facilis soluta reiciendis repellat sunt neque laboriosam. Soluta possimus unde officia sit veniam natus quisquam quia quis maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt amet rem alias reiciendis. Laudantium necessitatibus, alias beatae deserunt sunt molestias suscipit quisquam sed vitae consectetur laboriosam sequi. Molestias molestiae atque cupiditate illo incidunt eius possimus totam suscipit ullam est, ipsa pariatur esse, aut in distinctio? Voluptates vel doloremque animi quo ad sunt voluptatibus ipsam numquam optio illo aut molestias dolor, natus consequatur modi sint? Architecto voluptatem omnis cumque porro nobis, rem asperiores culpa esse explicabo vero quas odio iusto consectetur illo eveniet, sint quisquam a reprehenderit cupiditate molestias reiciendis et eligendi laborum? Non illum atque iste ullam fugiat libero.",
    },
    {
      id: 7,
      title: "Reflections on Development",
      date: "2024-11-30",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consectetur, dignissimos aperiam dolores ad commodi autem recusandae? Doloremque sed repellat asperiores, distinctio mollitia, quae nostrum exercitationem corrupti, praesentium iure laboriosam delectus doloribus? Rem tenetur vero, minus iusto nesciunt delectus ipsam nemo! Similique accusantium minus necessitatibus veniam hic iste. Ut, repellendus iure sed voluptas consequuntur sapiente dignissimos, dolore alias facere, quod iste! In asperiores harum id architecto incidunt suscipit dolore ad voluptatibus iste consequuntur dolores animi, consequatur doloremque doloribus praesentium provident illum eius facilis soluta reiciendis repellat sunt neque laboriosam. Soluta possimus unde officia sit veniam natus quisquam quia quis maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt amet rem alias reiciendis. Laudantium necessitatibus, alias beatae deserunt sunt molestias suscipit quisquam sed vitae consectetur laboriosam sequi. Molestias molestiae atque cupiditate illo incidunt eius possimus totam suscipit ullam est, ipsa pariatur esse, aut in distinctio? Voluptates vel doloremque animi quo ad sunt voluptatibus ipsam numquam optio illo aut molestias dolor, natus consequatur modi sint? Architecto voluptatem omnis cumque porro nobis, rem asperiores culpa esse explicabo vero quas odio iusto consectetur illo eveniet, sint quisquam a reprehenderit cupiditate molestias reiciendis et eligendi laborum? Non illum atque iste ullam fugiat libero.",
    },
    {
      id: 8,
      title: "Nature Walk",
      date: "2024-11-29",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consectetur, dignissimos aperiam dolores ad commodi autem recusandae? Doloremque sed repellat asperiores, distinctio mollitia, quae nostrum exercitationem corrupti, praesentium iure laboriosam delectus doloribus? Rem tenetur vero, minus iusto nesciunt delectus ipsam nemo! Similique accusantium minus necessitatibus veniam hic iste. Ut, repellendus iure sed voluptas consequuntur sapiente dignissimos, dolore alias facere, quod iste! In asperiores harum id architecto incidunt suscipit dolore ad voluptatibus iste consequuntur dolores animi, consequatur doloremque doloribus praesentium provident illum eius facilis soluta reiciendis repellat sunt neque laboriosam. Soluta possimus unde officia sit veniam natus quisquam quia quis maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt amet rem alias reiciendis. Laudantium necessitatibus, alias beatae deserunt sunt molestias suscipit quisquam sed vitae consectetur laboriosam sequi. Molestias molestiae atque cupiditate illo incidunt eius possimus totam suscipit ullam est, ipsa pariatur esse, aut in distinctio? Voluptates vel doloremque animi quo ad sunt voluptatibus ipsam numquam optio illo aut molestias dolor, natus consequatur modi sint? Architecto voluptatem omnis cumque porro nobis, rem asperiores culpa esse explicabo vero quas odio iusto consectetur illo eveniet, sint quisquam a reprehenderit cupiditate molestias reiciendis et eligendi laborum? Non illum atque iste ullam fugiat libero.",
    },
  ];

  return (
    <div className="relative h-full overflow-hidden">

      <header className="max-h-[10vh] my-2">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <div className="flex items-center justify-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="size-12 object-cover rounded-full"
              />
              <span className="font-Syne text-2xl">User</span>
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
        <h2 className="font-Syne text-5xl font-semibold mb-8">Recents</h2>
        <div className="columns-[300px]">
          {journals.map((journal) => {
            const randomClamp = Math.floor(Math.random() * 5) + 1;
            return (
              <Link
                key={journal.id}
                href={{ pathname: `journal/${journal.id}`, query: { route: 'view' } }}
                className="inline-block bg-accent-blue p-6 rounded-lg shadow-md hover:shadow-lg m-1 transition-all"
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
                  {journal.desc}
                </p>
              </Link>
            )
          })}
        </div>
        <hr className="border-neutral-700 my-8" />
        <h2 className="font-Syne text-5xl font-semibold mb-8">My Notes</h2>
        <div className="columns-[300px]">
          {journals.map((journal) => {
            const randomClamp = Math.floor(Math.random() * 5) + 1;
            return (
              <Link
                key={journal.id}
                href={`journal/${journal.id}/view`}
                className="inline-block bg-accent-green p-6 rounded-lg shadow-md hover:shadow-lg m-1 transition-all"
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
                  {journal.desc}
                </p>
              </Link>
            )
          })}
        </div>
      </main>

      <button className="absolute bottom-0 right-0 bg-accent-red rounded-3xl font-Syne text-6xl px-5 py-2 pt-0.5 mb-8 me-8">+</button>

    </div>
  )
}
