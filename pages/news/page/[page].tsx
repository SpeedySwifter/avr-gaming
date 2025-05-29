import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderDezent from "@/components/HeaderDezent";
import Footer from "@/components/Footer";
import BlogCardApple from "@/components/BlogCardApple";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  localImage?: string;
  category?: string;
}

interface Props {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
}

export default function PaginatedNewsPage({
  posts,
  currentPage,
  totalPages,
}: Props) {
  const router = useRouter();
  const { search = "", category = "" } = router.query;

  const [searchTerm, setSearchTerm] = useState(search as string);
  const [selectedCategory, setSelectedCategory] = useState(category as string);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);

  useEffect(() => {
    const filtered = posts.filter((post) => {
      const matchSearch = post.title.rendered
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory
        ? post.category === selectedCategory
        : true;
      return matchSearch && matchCategory;
    });

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, search: val, category: selectedCategory },
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedCategory(val);
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, category: val, search: searchTerm },
    });
  };

  return (
    <>
      <HeaderDezent />

      {/* HERO SECTION */}
      <section className="relative text-white text-center py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60 pointer-events-none"
          style={{ backgroundImage: "url('/img/news-hero.webp')" }}
        />
        <div className="absolute inset-0 z-10 bg-black opacity-40 pointer-events-none" />
        <div className="relative z-20 h-[30vh] flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Neuigkeiten & Updates</h1>
          <p className="text-lg text-avrblue">Die neuesten Beiträge aus unserer Welt – Events, Erfolge und Einblicke.</p>
        </div>
      </section>

      <main className="min-h-screen bg-white text-black px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Filter + Suche */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
            <input
              type="text"
              placeholder="🔍 Blogposts durchsuchen..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full md:w-1/2 border border-gray-300 rounded-xl p-3"
            />
          </div>

          {/* Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCardApple
                  key={post.id}
                  title={post.title.rendered}
                  excerpt={post.excerpt.rendered}
                  date={post.date}
                  slug={post.slug}
                  localImage={post.localImage}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Keine passenden Beiträge gefunden.</p>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <a
                key={i}
                href={`/news/page/${i + 1}?search=${searchTerm}&category=${selectedCategory}`}
                className={`px-4 py-2 rounded-full border ${
                  currentPage === i + 1 ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {i + 1}
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "public/data/blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const allPosts: BlogPost[] = JSON.parse(jsonData);
  const POSTS_PER_PAGE = 9;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }).map((_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const page = parseInt((params?.page as string) || "1", 10);
  const filePath = path.join(process.cwd(), "public/data/blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const allPosts: BlogPost[] = JSON.parse(jsonData);

  const POSTS_PER_PAGE = 9;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return {
    props: {
      posts: paginatedPosts,
      currentPage: page,
      totalPages,
    },
  };
};