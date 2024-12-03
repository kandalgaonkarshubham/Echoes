import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/utils/store";

export default function logout() {
  const router = useRouter();
  const logOut = useAuthStore((state) => state.logOut);

  useEffect(() => {
    logOut();
    router.push("/auth");
  }, [])

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-accent-red animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-accent-green animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-accent-yellow animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  )
}
