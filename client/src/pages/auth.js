export default function auth() {
  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center" >

        <div className="font-Syne text-center mb-6">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="mt-2 text-red-400 font-semibold">Error! Account doesnt exist</p>
        </div>

        <div className="w-3/4 mb-4">
          <input type="email" name="email" className="w-full py-4 px-8 bg-secondary placeholder:font-semibold outline-none" placeholder="User Name" />
        </div>

        <div className="w-3/4 mb-6">
          <input type="password" name="password" className="w-full py-4 px-8 bg-secondary placeholder:font-semibold outline-none" placeholder="Password" />
        </div>

        <div className="w-3/4">
          <button type="submit" className="font-Syne w-full rounded font-bold bg-accent-green hover:bg-accent-green/90 py-4">Submit</button>
        </div>
      </div>
    </div>
  )
}
