"use client"; // falls App Router – bei Pages Router nicht notwendig

import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  localImage?: string;
}

export default function BlogCarousel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/blog/index.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 8)));
  }, []);

  if (!posts.length) return null;

  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide py-4">
      <div className="flex space-x-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="inline-block min-w-[280px] max-w-sm bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
          >
            {post.localImage && (
              <img
                src={post.localImage}
                alt="Beitragsbild"
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3
                className="text-white font-semibold text-sm line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p className="text-xs text-gray-500 mt-2">
                {new Date(post.date).toLocaleDateString("de-DE")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
