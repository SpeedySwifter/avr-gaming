"use client"; // falls in App Router / optional im Pages Router

import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPreview {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  localImage?: string;
}

interface BlogListProps {
  limit?: number; // z. B. 3 oder 6 Beiträge
}

export default function BlogList({ limit = 3 }: BlogListProps) {
  const [posts, setPosts] = useState<BlogPreview[]>([]);

  useEffect(() => {
    fetch("/blog/index.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, limit);
        setPosts(sorted);
      });
  }, [limit]);

  if (!posts.length) return null;

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
          <div className="flex items-center space-x-4">
            {post.localImage && (
              <img
                src={post.localImage}
                alt="Thumbnail"
                className="w-20 h-20 object-cover rounded"
              />
            )}
            <div>
              <h3
                className="text-white text-base font-semibold group-hover:text-avrblue transition"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <span className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString("de-DE")}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
