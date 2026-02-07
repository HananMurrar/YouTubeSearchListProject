// single video card

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export default function VideoCard({ id, title, description, thumbnail }: VideoCardProps) {
  return (
    <div className="border p-4 rounded shadow-sm bg-gray-50">
      <img src={thumbnail} alt={title} className="mb-2 w-full rounded" />
      <h2 className="font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        className="text-red-500 mt-2 block hover:font-bold"
      >
        Watch
      </a>
    </div>
  );
}


