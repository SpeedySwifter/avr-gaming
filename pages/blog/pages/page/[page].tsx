import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
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

export default function PaginatedNewsPage({ posts, currentPage, totalPages }: Props) {
  return (
    <>
      <HeaderDezent />

      <main className="min-h-screen bg-white text-black px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">📣 Neuigkeiten</h1>

          {/* Filter + Suche */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
            <input
              type="text"
              placeholder="🔍 Blogposts durchsuchen..."
              className="w-full md:w-1/2 border border-gray-300 rounded-xl p-3"
            />
            <select className="w-full md:w-1/4 border border-gray-300 rounded-xl p-3">
              <option value="">Alle Kategorien</option>
              <option value="update">Updates</option>
              <option value="event">Events</option>
            </select>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
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

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <a
                key={i}
                href={`/news/page/${i + 1}`}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "public/data/blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const allPosts: BlogPost[] = JSON.parse(jsonData);

  const POSTS_PER_PAGE = 9;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }).map((_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params?.page as string || "1", 10);

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