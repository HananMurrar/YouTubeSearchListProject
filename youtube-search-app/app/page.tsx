"use client";

import { useState } from "react";
import SearchForm from "./components/search form";
import VideoCard from "./components/video card";
import { fetchVideos, Video } from "./services/youtube";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const results = await fetchVideos(query);
    setVideos(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white font-serif p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">YouTube Search List</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p className="mt-4">Loading ...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}
