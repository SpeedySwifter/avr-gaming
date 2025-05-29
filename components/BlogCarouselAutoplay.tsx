"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  localImage?: string;
}

export default function BlogCarouselAutoplay() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Blogposts laden
  useEffect(() => {
    fetch("/blog/index.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  // Autoplay mit Hover-Stopp
  useEffect(() => {
    const container = containerRef.current;
    if (!container || posts.length === 0) return;

    const scrollAmount = 300;
    const delay = 4000;

    function startScroll() {
      intervalRef.current = setInterval(() => {
        if (!container) return;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, delay);
    }

    function stopScroll() {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    startScroll();

    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      container.removeEventListener("mouseenter", stopScroll);
      container.removeEventListener("mouseleave", startScroll);
    };
  }, [posts]);

  if (!posts.length) return null;

  return (
    <div className="relative overflow-hidden bg-white text-black py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          News
        </h2>

        <div
          ref={containerRef}
          className="scrollbar-hide flex snap-x snap-mandatory space-x-4 overflow-x-auto scroll-smooth px-4 py-4"
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="snap-start flex-none w-[90%] mx-auto sm:mx-0 sm:w-[48%] md:w-[32%] lg:w-[24%] max-w-xs bg-neutral-900 text-white rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              {post.localImage && (
                <img
                  src={post.localImage}
                  alt="Beitragsbild"
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
              <div className="p-4">
                <h3
                  className="text-white text-sm font-semibold line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: post.title?.rendered ?? "Blogeintrag",
                  }}
                />
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(post.date).toLocaleDateString("de-DE")}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional: Pagination Punkte */}
        <div className="mt-4 flex justify-center gap-2">
          {posts.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
    </div>
  );
}
