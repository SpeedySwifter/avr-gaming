import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import fs from "fs";

interface BlogPostProps {
  post: any;
}

export default function BlogDetail({ post }: BlogPostProps) {
  if (!post) return <p className="text-white p-6">Beitrag nicht gefunden.</p>;

  return (
    <>
      <Head>
        <title>{post.title.rendered} | AVR Blog</title>
      </Head>
      <main className="min-h-screen bg-black text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-3xl font-bold text-avrblue mb-4"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          {post.localImage && (
            <img
              src={post.localImage}
              alt="Beitragsbild"
              className="mb-6 w-full max-h-[400px] object-cover rounded"
            />
          )}
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </main>
    </>
  );
}

// 🔁 Slug-Pfade bei Buildzeit generieren
export const getStaticPaths: GetStaticPaths = async () => {
  const indexFile = path.join(process.cwd(), "public/blog/index.json");
  const rawData = fs.readFileSync(indexFile, "utf-8");
  const posts = JSON.parse(rawData);

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // zeigt 404, wenn slug nicht gefunden
  };
};

// 📦 Einzelbeitrag per Slug laden
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const indexFile = path.join(process.cwd(), "public/blog/index.json");
  const rawData = fs.readFileSync(indexFile, "utf-8");
  const posts = JSON.parse(rawData);

  const matched = posts.find((p: any) => p.slug === slug);

  if (!matched) {
    return { notFound: true };
  }

  const postFile = path.join(process.cwd(), `public/blog/post-${matched.id}.json`);
  const postRaw = fs.readFileSync(postFile, "utf-8");
  const post = JSON.parse(postRaw);

  return {
    props: {
      post,
    },
  };
};
