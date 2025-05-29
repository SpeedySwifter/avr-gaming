
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  localImage?: string;
}

export default function BlogCardApple({ title, excerpt, date, slug, localImage }: BlogCardProps) {
  return (
    <a href={`/news/${slug}`} className="block rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200 overflow-hidden">
      {localImage && (
        <div className="w-full h-48 relative">
          <Image src={localImage} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{excerpt.replace(/<[^>]+>/g, "")}</p>
      </div>
    </a>
  );
}
