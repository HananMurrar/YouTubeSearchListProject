// for API fetch function

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export async function fetchVideos(query: string): Promise<Video[]> {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${query}&key=${apiKey}`
  );

  const data = await res.json();

  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.medium.url,
  }));
}

