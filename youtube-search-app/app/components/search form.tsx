// search input and button

"use client";

import { useState } from "react";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube ..."
        className="border p-2 w-full font-serif"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-red-500 text-white font-serif hover:bg-red-600"
      >
        Search
      </button>
    </form>
  );
}

