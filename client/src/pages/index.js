export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8">
      <span className="text-6xl text-white">Echoes</span>
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-accent-red animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-accent-green animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-accent-yellow animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
}
