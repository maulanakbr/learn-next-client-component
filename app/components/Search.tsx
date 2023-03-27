"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const router: AppRouterInstance = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}`);
  };

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        className="w-80 rounded-xl bg-white p-2 text-xl"
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="ml-2 rounded-xl bg-slate-300 p-2 text-xl font-bold">
        🚀
      </button>
    </form>
  );
}
