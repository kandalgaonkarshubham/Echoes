import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuthStore } from "@/utils/store";

export default function auth() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    if (formData.email || formData.password) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          useAuthStore.getState().login(data.email, data.apiKey);
          router.push("/app");
        } else {
          const error = await response.json();
          setError(error.message);
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center" >

        <div className="font-Syne text-center mb-6">
          <h1 className="text-2xl font-bold">Sign In</h1>
          {error && (<p className="mt-2 text-red-400 font-semibold">{error}</p>)}
        </div>

        <div className="w-3/4 mb-4">
          <input type="email" name="email" className="w-full py-4 px-8 bg-secondary placeholder:font-semibold outline-none" value={formData.email} onChange={handleChange} placeholder="Email" />
        </div>

        <div className="w-3/4 mb-6">
          <input type="password" name="password" className="w-full py-4 px-8 bg-secondary placeholder:font-semibold outline-none" value={formData.password} onChange={handleChange} placeholder="Password" />
        </div>

        <div className="w-3/4">
          <button type="submit" className="font-Syne w-full rounded font-bold bg-accent-green hover:bg-accent-green/90 py-4" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}
